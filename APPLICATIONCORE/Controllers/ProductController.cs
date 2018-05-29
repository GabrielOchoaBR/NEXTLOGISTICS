//Gabriel Ochoa - 29/05/2018
//Controller Class  

using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using APPLICATION.Models;
using Microsoft.AspNetCore.Mvc;

namespace APPLICATION.Controllers {

    [Route("api/products")]
    public class ProductController : Controller
    {
        //Get all rows of the list.
        //It was created just for tests. It is not used on this application.
        [HttpGet]
        public ActionResult Get()
        {
            // return all products
            return Ok(Json(new { products = ProductFactory.Products.ToArray(), total = ProductFactory.Products.Count }));
        }

        //Get all rows from a range.
        //Rows - numbers of rows of the page.
        //PageNumber - Number of the page.
        [HttpGet("Paging")]
        public ActionResult Get(int Rows, int PageNumber) {
            //Get only the rows of the page
            var products = ProductFactory.Products.Skip(PageNumber * Rows).Take(Rows).ToArray();
            //Send all rows asked and the number of the rows in the table (list)
            var Result = Json(new { products = products, total = ProductFactory.Products.Count });

            return Ok(Result);
        }

        ///Get only a single rows.
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            //Verify if the ModelState still valided 
            if (!this.ModelState.IsValid) {
                return BadRequest();
            } else if (ProductFactory.Products.SingleOrDefault(x => x.Row == id) != null) {
                //Return a single row as solicited
                return Ok(ProductFactory.Products.SingleOrDefault(x => x.Row == id));

            } else {
                //Return NotFound case the row is missed.
                return NotFound();
            }
        }

        //Insert a new Product in the database.
        [HttpPost]
        public ActionResult Post([FromBody]ProductModel product) {
            if (!this.ModelState.IsValid || product == null) {
                return BadRequest();
            } else {

                ProductModel ProductNewest = ProductFactory.Products.OrderByDescending(x => x.Row).First();

                int newId = ProductNewest.Row + 1;

                product.Row = newId;

                ProductFactory.Products.Add(product);

                return Created($"api/products/{newId}", product);
            }
        }

        //Update the register of the database.
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody]ProductModel product) {
            if (!this.ModelState.IsValid) {
                return BadRequest();
            } else if (ProductFactory.Products.SingleOrDefault(x => x.Row == id) != null) {

                int Index = ProductFactory.Products.IndexOf(ProductFactory.Products.SingleOrDefault(x => x.Row == id));

                ProductFactory.Products[Index] = product;

                return Ok();
            } else {
                return NotFound();
            }
        }

        //Delete a row of the database 
        [HttpDelete("{id}")]
        public ActionResult Delete(int id) {
            if (ProductFactory.Products.SingleOrDefault(x => x.Row == id) != null) {
                int Index = ProductFactory.Products.IndexOf(ProductFactory.Products.SingleOrDefault(x => x.Row == id));
                ProductFactory.Products.RemoveAt(Index);
                return Ok();
            } else {
                return NotFound();
            }
        }
    }
}
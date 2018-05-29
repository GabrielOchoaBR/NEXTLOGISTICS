//Gabriel Ochoa - 28/05/2018
//Factory Data Class - Created to help the application supplying data.

using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace APPLICATION.Models 
{
    public class ProductFactory 
    {
        public static List<ProductModel> Products {get; set;} = ProductsReload();

        //Create data to the application
        //Execute only when the application starts.
        //With this way, it is possible to alter data because everything is in list collection.
        public static List<ProductModel> ProductsReload() 
        {
            ProductFactory productFactory = new ProductFactory();

            return productFactory.GetProducts();         
        }


        private List<ProductModel> GetProducts()
        {
            Task<string> result = GetResponseStringAsync();
            var stringResult =  result.Result.ToString();
            List<ProductModel> Products = JsonConvert.DeserializeObject<List<ProductModel>>(stringResult);

            //Add a Primary Key in the list
            int Counter = 1;

            foreach (ProductModel Product in Products)
                Product.Row = Counter++; 
            
            return Products;
        }

        //Get data from the source
        private async Task<string> GetResponseStringAsync()
        {
            var httpClient = new HttpClient();

            var response = await httpClient.GetAsync("https://demo.stylearcade.com.au/api/demo/client/data");
            var contents = await response.Content.ReadAsStringAsync();

            return contents;
        }
    }
}
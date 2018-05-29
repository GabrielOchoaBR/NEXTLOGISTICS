//Gabriel Ochoa - 27/05/2018
//Type of Product data that this system will have.
namespace APPLICATION.Models
{
    public class ProductModel {
        public int Row {get;set;}
        public string ImagePath {get;set;}
        public string ProductCode {get;set;}
        public string Product {get;set;}
        public string Season {get;set;}
        public string Category1 {get;set;}
        public string Category2 {get;set;}
        public string Category3 {get;set;}
        public string Category4 {get;set;}
        public string Category5 {get;set;}
        public decimal OriginalSell {get;set;}
        public decimal PerformanceRank {get;set;}
        public string PerformanceRating {get;set;}
        public decimal ConversionRate {get;set;}
        public decimal ReturnRate {get;set;}
        public decimal ClickThroughRate {get;set;}
        public decimal Impression {get;set;}
        public decimal CostPrice{get;set;}
        public string FPMD {get;set;}
        public decimal TDSales {get;set;}
        public decimal TDRcvdUnits {get;set;}
        public decimal SOH {get;set;}
        public decimal WOS {get;set;}
        public decimal TDST {get;set;}
        public int WeeksInStore {get;set;}
        public string ImagePathThumbnail {get;set;}
        public string ImagePathTile {get;set;}
        public int _Count {get;set;}
        public int PreviousWos {get;set;}
        public string Details {get;set;}
    }
}
/*  {
        "Row": 0,
        "ImagePath": "https://maxwell.blob.core.windows.net:443/productimages/ddfcccf1-cd2a-40ce-94b3-9e36d1711fd1",
        "ProductCode": "BFE.35150",
        "Product": "THE DESIGNER T",
        "Season": "S13",
        "Category1": "Brand 3",
        "Category2": "MENS",
        "Category3": "APPAREL",
        "Category4": "TSHIRTS",
        "Category5": null,
        "OriginalSell": 160,
        "PerformanceRank": 1,
        "PerformanceRating": "B.AVG",
        "ConversionRate": 4.2,
        "ReturnRate": 0,
        "ClickThroughRate": 6,
        "Impression": 167,
        "CostPrice": 42,
        "FPMD": "MD",
        "TDSales": 250,
        "TDRcvdUnits": 250,
        "SOH": 0,
        "WOS": 0,
        "TDST": 100,
        "WeeksInStore": 29,
        "ImagePathThumbnail": null,
        "ImagePathTile": "https://maxwell.blob.core.windows.net:443/productimages/ddfcccf1-cd2a-40ce-94b3-9e36d1711fd1",
        "_Count": 30,
        "PreviousWos": 0,
        "Details": null
    }*/ 
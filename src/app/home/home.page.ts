import { Component } from '@angular/core';
import { ProductsForSaleService} from "../services/products-for-sale.service";
import { Product } from "../classes/product";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  AllProducts: Product[]=[];
  constructor(private ProductService: ProductsForSaleService, private router: Router) {}
  
  GetAllProducts() : void {
    this.ProductService.GetAllProducts().subscribe((allproducts)=> {
      this.AllProducts=allproducts;
    })

  }

  GoCategoriesPage(){
    this.router.navigate(['/home/categories']);
  }

  GoSellPage(){
    this.router.navigate(['/home/sell']);
  }
 async doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.GetAllProducts();
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  
  }

}

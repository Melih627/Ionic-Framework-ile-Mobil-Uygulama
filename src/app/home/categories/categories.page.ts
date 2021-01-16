import { Component, OnInit } from '@angular/core';
import { ProductsForSaleService } from "../../services/products-for-sale.service";
import { Product } from "../../classes/product";
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(private router: Router, private ProductService: ProductsForSaleService) { }

  Products: Product[]=[];
  ngOnInit() {
  }
  GoBack(){
    this.router.navigate(['/home']);
  }

  inViewDidLeave(){
    this.Products=[];
  }

  GetProductsByCategory(categoryname: string){
    this.ProductService.GetProductsByCategory(categoryname).subscribe((products)=>{
      this.Products=products;
    })
  }
}

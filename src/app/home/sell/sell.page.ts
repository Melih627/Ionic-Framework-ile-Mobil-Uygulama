import { Component, OnInit } from '@angular/core';
import { Product } from "../../classes/product";
import { Router } from '@angular/router';
import { ProductsForSaleService } from "../../services/products-for-sale.service";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
  
})
export class SellPage implements OnInit {
  newProduct=new  Product();

  CanSale: boolean=false;
  
  constructor(private TService:ToastService,private router: Router, private ProductService: ProductsForSaleService) { }

  ngOnInit() {
  
    
  }
  ShowToast(msg:string){
    this.TService.ShowToast(msg);
  }
  
  HideToast(){
    this.TService.HideToast();
  }
  GoBack(){
    this.router.navigate(['/home']);
  }
  SellNewProduct(){
    
    if(this.CheckModels()){
      this.newProduct.id=Math.floor(Math.random() * 100000)+10;
   this.ProductService.PostNewProduct(this.newProduct)
   .subscribe();
   this.ShowToast('Ürünüzün satış ilanı verildi.');
   this.GoBack();

    }else{
      this.ShowToast('Lütfen bilgileri eksiksiz giriniz!!');
    }
    
  }
  CheckModels(): boolean{
    if(this.newProduct.ProductPrize==0 || this.newProduct.ProductName=="" || this.newProduct.ProductImageURL=="" || this.newProduct.ProductExplain=="" || this.newProduct.ProductOwnerPhoneNumber==""){
      this.CanSale=false;
    }else{
      this.CanSale=true;
    }
    return this.CanSale;
  }


}

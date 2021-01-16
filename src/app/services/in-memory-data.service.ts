import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

 
  constructor() { }
  createDb() {
    const AllProducts = [
      {id:1,ProductName: 'Telefon', ProductOwnerPhoneNumber: '505000', ProductImageURL: 'https://iphoneturka.net/wp-content/uploads/2017/09/iphone-8-ve-iphone-8-plus-1024x767.jpg', ProductPrize: 2000,ProductExplain: 'ürün temiz kullanılmıstır pazarlık yoktur'},
      {id:2,ProductName: 'Bilgisayar', ProductOwnerPhoneNumber: '506000', ProductImageURL: 'https://www.itopya.com/picture430x0/gaming-bilgisayar-89.png', ProductPrize: 4000,ProductExplain: 'oyun canavarı '},
      {id:3,ProductName: 'Saat', ProductOwnerPhoneNumber: '507000', ProductImageURL: 'https://ayb.akinoncdn.com/products/2020/10/07/54174/0469d6b3-4c52-4fa9-a1b0-76e535cd7aad_size780x780_quality60_cropCenter.jpg', ProductPrize: 3000,ProductExplain: 'sadece pili bitmiştir'},
      
      {id:4,ProductName: 'Telefon', ProductOwnerPhoneNumber: '509000', ProductImageURL: 'https://i.gadgets360cdn.com/products/large/oppo-f17-pro-574x800-1599056571.jpg', ProductPrize: 3000,ProductExplain: 'çekilişten kazanılmıstır'},
      {id:5,ProductName: 'Bilgisayar', ProductOwnerPhoneNumber: '508000', ProductImageURL: 'https://yorumbudur.com/content/icerik/big/turbox-trx5015-masaustu-bilgisayar_yorumbudurcom.jpg', ProductPrize: 5000,ProductExplain: 'mining yapılmıstır o yüzden ucuz'},
      {id:6,ProductName: 'Saat', ProductOwnerPhoneNumber: '507500', ProductImageURL: 'https://www.gunkutsaat.com/productimages/116163/big/svck4038g.jpg', ProductPrize: 1000,ProductExplain: 'hatırası bitmiştir'},
     
      {id:7,ProductName: 'Telefon', ProductOwnerPhoneNumber: '555000', ProductImageURL: 'https://www.trendyol.com/assets/product/media/images/20200217/11/3043578/63719450/1/1_org_zoom.jpg', ProductPrize: 9000,ProductExplain: 'iphoneye geciyorum'},
      {id:8,ProductName: 'Bilgisayar', ProductOwnerPhoneNumber: '546000', ProductImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSpEqjUf2XsNygeUsgSJxLwBQ1eKOX12vxbw&usqp=CAU', ProductPrize: 4000,ProductExplain: 'yeni kasa topluyorum o yüzden satıyorum'},
      {id:9,ProductName: 'Saat', ProductOwnerPhoneNumber: '507053', ProductImageURL: 'https://www.kivircik.com.tr/Uploads/UrunResimleri/buyuk/siyah-hasir-miknatisli-kordon-dokunmatik-9294.jpg', ProductPrize: 2000,ProductExplain: 'elde fazladan vardı'},

    ];

    return {AllProducts};
  }
  

}

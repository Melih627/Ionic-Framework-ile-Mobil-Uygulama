import { Component, Input, OnInit } from '@angular/core';
import { Product} from '../../../classes/product';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

  @Input() products: Product[];
  constructor() { }

  ngOnInit() {}


}

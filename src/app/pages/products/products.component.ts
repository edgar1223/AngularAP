import { Component,inject } from '@angular/core';
import{ProductComponent} from './../../components/product/product.component'
import { Product } from './../../modls/product.model';
import { NgOptimizedImage ,CommonModule} from '@angular/common';

import {HttpClient}from '@angular/common/http';


@Component({
  standalone: true,
  imports:[ProductComponent,CommonModule],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  http=inject(HttpClient);
  products: Product[] =[]
  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data)=>{
      this.products=data;
    });
  }
}

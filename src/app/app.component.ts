import { Component, inject } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {NgOptimizedImage} from '@angular/common'
import { Product } from './modls/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto angular';
  http=inject(HttpClient);
  products: Product[] =[]
  changeTitle(){
    this.title="Primer proyecto angular";
  }
  
}

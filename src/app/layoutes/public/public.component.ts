import { products } from './../../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  public products = [];
  constructor() {
    this.products = products;
   }

  ngOnInit() {

  }

  toggleStyle() {
    $('.secoundMenu').stop(true);

    $('.secoundMenu').animate({
        width: 'toggle'
      }
     );


  }

}

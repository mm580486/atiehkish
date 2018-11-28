import { startup } from './../../startup';
import { services } from './../../services';
import { events } from './../../events';
import { products } from './../../products';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  public products = [];
  public startup = [];
  public services = [];
  public events = [];
  constructor() {
    this.products = products;
    this.startup = startup;
    this.services = services;
    this.events = events;
   }

  ngOnInit() {
    $('.nav-mobile a').click ( () => {

      this.toggleMenu();


    });

  }
  toggleMenu() {
    $('#menu-toggle').toggleClass('active');
  }

  toggleStyle() {
    $('.secoundMenu').stop(true);

    $('.secoundMenu').animate({
        width: 'toggle'
      }
     );


  }

}

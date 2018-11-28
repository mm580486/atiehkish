import { services } from './../../services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  public products = [];
  public product: any;
  mySlideOptions: any;

  constructor(private route: Router, private router: ActivatedRoute) {
    this.route.events.subscribe(params => {
      this.products = services;
      this.mySlideOptions = {items: 3, dots: false, nav: true, margin: 10};
      this.product =  services.filter(x => x.permalink === this.router.snapshot.paramMap.get('permalink'))[0];
  });
   }

   ngOnInit(): void {

  }
}

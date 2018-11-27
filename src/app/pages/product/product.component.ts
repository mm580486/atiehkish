import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products = [];
  public product: any;
  mySlideOptions: any;

  constructor(private route: ActivatedRoute) {

    this.products = products;
    this.mySlideOptions = {items: 3, dots: false, nav: true, margin: 10};


   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.product =  products.filter(x => x.permalink === this.route.snapshot.paramMap.get('permalink'))[0];
  });
  }

}

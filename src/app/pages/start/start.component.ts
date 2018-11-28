import { startup } from './../../startup';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public products = [];
  public product: any;
  mySlideOptions: any;

  constructor(private route: Router, private router: ActivatedRoute) {
    this.route.events.subscribe(params => {
      this.products = startup;
      this.mySlideOptions = {items: 3, dots: false, nav: true, margin: 10};
      this.product =  startup.filter(x => x.permalink === this.router.snapshot.paramMap.get('permalink'))[0];
  });
   }

  ngOnInit() {

  }
}

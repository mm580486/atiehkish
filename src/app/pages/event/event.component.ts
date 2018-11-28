import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { events } from './../../events';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public products = [];
  public product: any;
  mySlideOptions: any;

  constructor(private route: Router, private router: ActivatedRoute) {
    this.route.events.subscribe(params => {
      this.products = events;
      this.mySlideOptions = {items: 3, dots: false, nav: true, margin: 10};
      this.product =  events.filter(x => x.permalink === this.router.snapshot.paramMap.get('permalink'))[0];
  });
   }

  ngOnInit() {

  }
}

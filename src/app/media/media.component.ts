import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayHoverPause:true,
    margin:0,
    navSpeed: 700,
    navText: [ '', '' ],
    responsive: {
      0: {
        items: 4
      },
      480: {
        items: 5
      },
      767: {
        items: 6
      },
      1024: {
        items: 9
      }
    },
    nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}

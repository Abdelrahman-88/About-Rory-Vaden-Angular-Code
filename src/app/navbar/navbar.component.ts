import { Component, OnInit } from '@angular/core';
import {trigger, transition, animate, style, state} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('slideUp', [
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
close:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  closeAdd(){
    this.close = true
  }

  scrollToElement(target:any,event:any): void {
    document.querySelectorAll(".nav-link").forEach((ele:any)=>ele.classList.remove("active"))
    const element = document.querySelector(target)
    event.target.classList.add("active")    
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}

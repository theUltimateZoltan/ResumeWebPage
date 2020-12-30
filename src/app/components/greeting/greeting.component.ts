import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  greetingDivID: string;
  titleImgID: string;
  titleImgSrc: string;

  constructor() { }

  ngOnInit(): void {
    this.greetingDivID = 'greeting';
    const imagesPathPrefix = 'assets/images/';
    this.titleImgSrc = imagesPathPrefix + 'intel.jpg';
  }

}

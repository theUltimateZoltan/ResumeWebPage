import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-placeholder',
  templateUrl: './content-placeholder.component.html',
  styleUrls: ['./content-placeholder.component.css']
})
export class ContentPlaceholderComponent implements OnInit {
  placeholderText: string;

  constructor() { }

  ngOnInit(): void {
    this.placeholderText = 'But first, let\'s get to know each other.';
  }

}

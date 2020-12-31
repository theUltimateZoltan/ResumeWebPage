import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-links',
  templateUrl: './external-links.component.html',
  styleUrls: ['./external-links.component.css']
})
export class ExternalLinksComponent implements OnInit {
  links: string[][];
  constructor() { }

  ngOnInit(): void {
    this.links = [
      ['LinkedIn', 'https://www.linkedin.com/in/eladtheprogrammer/'],
      ['GitHub', 'https://github.com/theUltimateZoltan'],
      ['Gmail', 'mailto:eladlevypersonal@gmail.com']
    ];

  }

}

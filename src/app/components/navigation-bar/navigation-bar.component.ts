import { Component, OnInit } from '@angular/core';
import { Section } from '../../models/Section';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  sections: Section[];
  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.sections = this.sectionService.getSections();
  }

}

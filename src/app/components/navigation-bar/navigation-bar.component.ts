import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Section } from '../../models/Section';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  sections: Section[];
  selected: Section;
  @Output() switchSectionRequest: EventEmitter<Section> = new EventEmitter<Section>(true);

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.sections = this.sectionService.getSections();
  }

  onSectionSelect(section): void{
    this.selected = section;
    this.switchSectionRequest.emit(this.selected);
  }

}

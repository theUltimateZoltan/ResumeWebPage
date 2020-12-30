import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Section} from '../../models/Section';

@Component({
  selector: 'app-section-viewer',
  templateUrl: './section-viewer.component.html',
  styleUrls: ['./section-viewer.component.css']
})
export class SectionViewerComponent implements OnInit{
  showImg: boolean;
  contentImgID: string;
  sectionContentID: string;
  sectionContent: string;
  displayedSection: Section;
  displayedImagePath: string;
  imagesPrefix = 'assets/images/';

  @Input()
  set section(changeSection) {
    this.displayedSection = changeSection;
    this.showImg = this.displayedSection.image !== undefined;
    this.displayedImagePath = this.showImg ? this.imagesPrefix + this.displayedSection.image : '';
    this.sectionContent = this.displayedSection.content;
  }
  constructor() { }
  ngOnInit(): void {
  }

}

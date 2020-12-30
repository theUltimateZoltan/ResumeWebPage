import { Component } from '@angular/core';
import {Section} from './models/Section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResumeWebPage';
  currentDisplayedSection: Section;

  replaceSectionViewerContent(section: Section): void{
    this.currentDisplayedSection = section;
  }
}



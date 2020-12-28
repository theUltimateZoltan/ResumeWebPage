import { Injectable } from '@angular/core';
import { Section } from '../models/Section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  url: string;

  constructor() {
    this.url = '';
  }

  getSections(): Section[] {
    return [
      {title: 'title1', content: 'content1'},
      {title: 'title2', content: 'content2'}
    ];
  }
}

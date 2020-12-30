import { Injectable } from '@angular/core';
import { Section } from '../models/Section';
import { Data } from '../../assets/mock_data/Data';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  url: string;

  constructor() {
    this.url = '';
  }

  getSections(): Section[] {
    // on a real app this will be replaced with database/REST api
    return Data.getSectionsMockData();
  }
}

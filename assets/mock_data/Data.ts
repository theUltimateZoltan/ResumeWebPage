import {Section} from '../../app/models/Section';

export class Data{
  static getSectionsMockData(): Section[] {
    return [
      {
        title: 'step 1',
        content: 'content 1 oh content 1....'
      },
      {
        title: 'step 2',
        content: 'content 2 oh content 2....'
      }
    ];
  }
}

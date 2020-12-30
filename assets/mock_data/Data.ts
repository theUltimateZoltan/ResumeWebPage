import {Section} from '../../app/models/Section';

export class Data{
  static getSectionsMockData(): Section[] {
    return [
      {
        title: 'Nice to meet you!',
        content: 'My name is Elad Levy, I am 24 years old, and have been learning web development for the past 10' +
          ' years. I am currently a second year student at the Hebrew university, pursuing a Bsc in computer' +
          ' science. I am a very capable programmer with fast learning skills, dedication and work ethics. I know' +
          ' everyone says that, but just fyi - I had no knowledge in Angular before building this application, which' +
          ' took me approximately 3 days to learn and build.',
        image: 'park.jpeg'
      },
      {
        title: 'Ewise marketing',
        content: 'Between January 2013 and March 2015 (2 years, 2 months) I was a web developer for Ewise marketing' +
          ' - a role requiring construction and maintenance of wordpress and C#.NET .com websites and landing' +
          ' pages. In this position I have gained experience with HTML, css, Jquery and windows/linux server' +
          ' interfaces including mysql data management. The job often required rapid customer service and technical' +
          ' support to a variety of immediate and ongoing issues. also, I learned how to pilot a motorized' +
          ' parachute :)',
        image: 'ppc.jpeg'
      },
      {
        title: 'Military service',
        content: 'I served in the logistics corps between march 2015 and march 2019, being an officer from august' +
          ' 2017. During my officer roles I have managed the implementation of britanicca\'s "fox" information' +
          ' system in the logistics school (bahad 6) overseeing over four soldiers over the course of five months,' +
          ' after which I was promoted to command the control and supervision (shob) department, in charge of' +
          ' instructing the various information systems used by the logistics corps (Beacon, SAP ERP), commanding up' +
          ' to ten instructors.',
        image: 'army.jpeg'
      },
      {
        title: 'Education & Skills',
        content: 'from October of 2019 until now I have been studying computer science in the Hebrew university. My' +
          ' current GPA is 85. I have gained a good understanding of conceptual subjects (e.g OOP, functional' +
          ' programming) along practical tools and a variety of programming languages (e.g Python, Java, C, C++).' +
          ' From my time as a web developer I am proficient in HTML, css and Javascript.'
      },
      {
        title: 'Summary',
        content: 'Programming, and specifically web design, is a passion of mine from a very young age. If' +
          ' recruited, I am driven to take any project, learn and analyze it to the core, and maximize it\'s' +
          ' potential.',
        image: 'beach.jpeg'
      }
    ];
  }
}

import { Job } from '../interfaces/job.interface';

const self: Job = {
  institution: 'Self Inc',
  location: 'Austin, TX',
  positions: [
    {
      title: 'Senior Frontend Software Engineer',
      start: { label: 'February 2022', date: 'February 28, 2022' },
      end: { label: 'Present', date: null },
      description: '',
    },
  ],
};

const capitalOne: Job = {
  institution: 'Capital One',
  location: 'Plano, TX',
  positions: [
    {
      start: { label: 'July 2020', date: 'July 1, 2020' },
      end: { label: 'February 2022', date: 'February 21, 2022' },
      title: 'Software Engineer',
      description: `
      <ul>
        <li>Front end lead working in the compliance innovation space.</li>
        <li>Line of business subject matter expert on Web Components.</li>
        <li>Building new ways for compliance advisors to easily consume the data they need.</li>
      </ul>`,
    },
    {
      start: { label: 'August 2019', date: 'August 1, 2019' },
      end: { label: 'July 2020', date: 'July, 1 2020' },
      title: 'Associate Software Engineer',
      description: `
      <ul>
        <li>Front End Software engineer working on 
          <a href="https://autorefi.capitalone.com" target="_blank" rel="noopener noreferrer"
            >Auto Refinance</a
          >.
        </li>
      </ul>`,
    },
  ],
};

const tamuInfoLab: Job = {
  institution: 'Texas A&M University (InfoLab)',
  location: 'College Station, TX',
  positions: [
    {
      start: { label: 'January 2017', date: 'January 1, 2017' },
      end: { label: 'May 2019', date: 'May 1, 2019' },
      title: 'Research Assistant',
      description: `
        <ul>
          <li>Research Assistant for the Center for the Study of Digital Libraries: InfoLab.</li>
          <li>Advised by Dr. James Caverlee.</li>
          <li>Researched user misbehavior on social media.</li>
        </ul>`,
    },
  ],
};

const education: Job = {
  institution: 'Texas A&M University',
  location: 'College Station, TX',
  positions: [
    {
      start: { label: 'August 2015', date: 'August 1, 2015' },
      end: { label: 'May 2019', date: 'May 1, 2019' },
      title: 'Bachelor of Science, Computer Science',
      description: `
      <ul>
        <li>Graduated from Texas A&M University Spring 2019.</li>
        <li>BS in Computer Science</li> 
        <li>Minor in Economics</li>
      </ul>`,
    },
  ],
};

const capitalOneInternship: Job = {
  institution: 'Capital One',
  location: 'Plano, TX',
  positions: [
    {
      start: { label: 'May 2018', date: 'May 1, 2018' },
      end: { label: 'August 2018', date: 'August 1, 2018' },
      title: 'Data Engineer Intern',
      description: `
      <ul>
        <li>During the course of my internship I built a Natural Language Understanding engine for vehicle searching.</li>
        <li>The system accepts any natural input and recommends vehicles based on the input.</li>
        <li>I wrote a 
          <a href="https://arxiv.org/pdf/2002.02070.pdf" target="_blank" rel="noopener noreferrer"
            >paper describing the concept</a
          >.
        </li>
      </ul>`,
    },
  ],
};

const blueChasm: Job = {
  institution: 'BlueChasm',
  location: 'Austin, TX',
  positions: [
    {
      start: { label: 'May  2016', date: 'May 1, 2016' },
      end: { label: 'August 2016', date: 'August 1, 2016' },
      title: 'Developer Intern',
      description: '',
    },
  ],
};

const outreachStrategists: Job = {
  institution: 'Outreach Strategists, LLC',
  location: 'Houston, TX',
  positions: [
    {
      start: { label: 'June 2014', date: 'June 1, 2014' },
      end: { label: 'January 2015', date: 'January 1, 2015' },
      title: 'Data Analyst Intern',
      description: '',
    },
  ],
};

export const career: Array<Job> = [
  self,
  capitalOne,
  education,
  tamuInfoLab,
  capitalOneInternship,
  blueChasm,
  outreachStrategists,
];

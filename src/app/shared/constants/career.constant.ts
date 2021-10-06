import { Job } from '../interfaces/job.interface';

const capitalOne: Job = {
  institution: 'Capital One',
  location: 'Plano, TX',
  positions: [
    {
      start: { label: 'July 2020', date: 'July 1, 2020' },
      end: { label: 'Present', date: null },
      title: 'Software Engineer',
      description:
        'Front end lead working in the compliance innovation space. Working on new ways for compliance advisors to easily consume the data they need. Building UIs in Web Components using Lit.',
    },
    {
      start: { label: 'August 2019', date: 'August 1, 2019' },
      end: { label: 'July 2020', date: 'July, 1 2020' },
      title: 'Associate Software Engineer',
      description:
        'Front End Software engineer working on the consumer facing auto-refinancing application and pre-qualification process.',
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
      description:
        'Research Assistant for the Center for the Study of Digital Libraries: InfoLab. Advised by Dr. James Caverlee.',
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
      description:
        'I graduated from Texas A&M University Spring 2019 with a BS in Computer Science and a Minor in Economics',
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
      description:
        'During the course of my internship I built a Natural Language Understanding engine for vehicle searching. The system accepts any natural input and recommends vehicles based on the input.',
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
    },
  ],
};

export const career: Array<Job> = [
  capitalOne,
  education,
  tamuInfoLab,
  capitalOneInternship,
  blueChasm,
  outreachStrategists,
];

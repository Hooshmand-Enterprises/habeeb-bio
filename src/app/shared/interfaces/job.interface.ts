import { Position } from './position.interface';

export interface Job {
  institution: string;
  location: string;
  positions: Array<Position>;
  skills?: Array<string>;
}

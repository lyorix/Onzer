import {Track} from './track.model';

export interface PlaylistInfo {
  title: string;
  cover: string;
  /** playlist duration in milliseconds */
  duration: number;
  author: string;
  tracks?: Array<Track>
}

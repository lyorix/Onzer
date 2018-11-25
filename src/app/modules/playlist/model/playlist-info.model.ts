import { Track } from "./track.model";

export interface PlaylistInfo {
    title: string;
    cover: string;
    duration: number;
    author: string;
    tracks?: Array<Track>
}
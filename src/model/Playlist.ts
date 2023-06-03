import { v4 as uuid } from 'uuid';
import Song from "./Song";

export class Playlist {
    readonly id: string = uuid()

    name: string
    desc: string
    songs: Song[] = []

    constructor(name: string, desc : string) {
        this.name = name
        this.desc = desc
    }
}

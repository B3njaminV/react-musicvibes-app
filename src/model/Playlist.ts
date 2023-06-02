import { v4 as uuid } from 'uuid';
import Song from "./Song";

export class Playlist {
    readonly id: string = uuid()

    name: string
    songs: Song[] = []

    constructor(name: string) {
        this.name = name
    }
}

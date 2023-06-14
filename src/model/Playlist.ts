import Song from "./Song";

export class Playlist {
    readonly id: string

    name: string
    desc: string
    songs: Song[] = []

    constructor(id: string, name: string, desc : string) {
        this.id = id
        this.name = name
        this.desc = desc
    }
}

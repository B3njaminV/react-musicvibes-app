import { v4 as uuid } from 'uuid';

export default class Album {
    readonly id: string;
    title: string;
    cover: string;
    artistName: string;

    constructor(title: string, cover: string, artistName: string) {
        this.id = uuid();
        this.title = title;
        this.cover = cover;
        this.artistName  = artistName;
    }
}



export default class Album {
    readonly id: string;
    title: string;
    cover: string;
    artistName: string;

    constructor(id: string, title: string, cover: string, artistName: string) {
        this.id = id;
        this.title = title;
        this.cover = cover;
        this.artistName  = artistName;
    }
}

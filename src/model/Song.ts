export default class Song {
    readonly id: string;

    name: string
    duration: number

    constructor(id : string, name: string, duration: number) {
        this.id = id;
        this.name = name;
        this.duration = duration
    }
}

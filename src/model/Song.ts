import { v4 as uuid } from 'uuid';

export default class Song {
    readonly id: string = uuid();

    name: string
    duration: number

    constructor(name: string, duration: number) {
        this.name = name;
        this.duration = duration
    }
}

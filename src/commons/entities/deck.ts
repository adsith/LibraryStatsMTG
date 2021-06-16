import { Card } from "./card";

export class Deck {
    id: string;
    main: Array<Card>;

    constructor(id: string, main: Array<Card>) {
        this.id = id;
        this.main = main;
    }
}
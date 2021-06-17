export class Card {
    name: string;

    constructor(jsonCard: any) {
        this.name = jsonCard.card.name;
    }
}
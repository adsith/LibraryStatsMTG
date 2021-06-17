import { Card } from "./card";

export class Deck {
	id: string;
	name: string;
	format: string;
	publicId: string;
	commanders: Array<Card> = [];

	constructor(jsonDeckObject: any) {
		this.id = jsonDeckObject.id;
		this.name = jsonDeckObject.name;
		this.format = jsonDeckObject.format;
		this.publicId = jsonDeckObject.publicId;
		this.MapCommanders(jsonDeckObject);
	}

	MapCommanders(jsonDeckObject: any): void {
		if(jsonDeckObject.commanders) {
			Object.keys(jsonDeckObject.commanders).forEach((key: any) => {
				this.commanders.push(new Card(jsonDeckObject.commanders[key]));
			});
		}
	}
}
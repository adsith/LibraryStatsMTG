export class Deck {
	id: string;
	name: string;
	format: string;
	publicId: string;

	constructor(jsonDeckObject: any) {
		this.id = jsonDeckObject.id;
		this.name = jsonDeckObject.name;
		this.format = jsonDeckObject.format;
		this.publicId = jsonDeckObject.publicId;
	}
}
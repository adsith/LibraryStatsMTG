import { Deck } from './deck';

export class Profile {
	userName: string;
	decks: Array<Deck>

	constructor(userName: string, jsonResponse: any) {
		this.userName = userName;
		this.decks = [];
		jsonResponse.data.forEach((deck: any) => {
			this.decks.push(new Deck(deck));
		});
	}
}
export interface Profile {
	userName: string;
	decks: Array<Deck>
}

export interface Deck {
	id: string;
	name: string;
	format: string;
	publicId: string;
	commanders?: Board;
	mainboard?: Board;
}

export interface Board {
    [cardName: string]: Playset;
}

export interface Playset {
	card: CardDetails;
}

export interface CardDetails {
	name: string;
}
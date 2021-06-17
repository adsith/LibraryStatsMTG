import { Deck } from './../entities/deck';

export interface IDeckService {
    getDeckIds(userName: string) : Promise<Array<string>>;

    getDeck(userName: string, deckId: string): Promise<Deck>;
}
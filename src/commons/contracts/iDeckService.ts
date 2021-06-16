import { Deck } from './../entities/deck';

export interface IDeckService {
    GetDeckIds(userName: string) : Promise<Array<string>>;

    GetDeck(userName: string, deckId: string): Promise<Deck>;
}
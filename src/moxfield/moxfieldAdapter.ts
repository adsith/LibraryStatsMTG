import { Board } from './types';
import { MoxfieldService } from './moxfieldService';
import { IDeckService } from './../commons/contracts/iDeckService';
import { Deck, Card } from '../commons/types';

export class MoxfieldAdapter implements IDeckService {
    service: MoxfieldService;

    constructor() {
        this.service = new MoxfieldService();
    }

    async getDeckIds(userName: string): Promise<string[]> {
        const profile = await this.service.getProfile(userName);
        return profile.decks.map(x => x.publicId);
    }

    async getDeck(userName: string, deckId: string): Promise<Deck> {
        const result = await this.service.getDeck(deckId);
        const cards = result.commanders ? this.mapBoardToCards(result.commanders) : [];
        const deck : Deck = {
            id : result.publicId,
            main : cards
        } 
        return deck;
    }

    private mapBoardToCards(board: Board) : Array<Card> {
        const cards : Array<Card> = [];
        for (const key of Object.keys(board)) {
            cards.push({ name: board[key].card.name });
        }

        return cards;
    }

}
import { MoxfieldService } from './moxfieldService';
import { Deck } from '../commons/entities/deck';
import { Card } from '../commons/entities/card';
import { IDeckService } from './../commons/contracts/iDeckService';

export class MoxfieldAdapter implements IDeckService {
    service: MoxfieldService;

    constructor() {
        this.service = new MoxfieldService();
    }

    async getDeckIds(userName: string): Promise<string[]> {
        const Profile = await this.service.getProfile(userName);
        return Profile.decks.map(x => x.publicId);
    }

    async getDeck(userName: string, deckId: string): Promise<Deck> {
        const Result = await this.service.getDeck(deckId);
        return new Deck(Result.name, Result.commanders.map(x => new Card(x.name)));
    }

}
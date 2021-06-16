import { MoxfieldService } from './moxfieldService';
import { Deck } from '../commons/entities/deck';
import { IDeckService } from './../commons/contracts/iDeckService';

export class MoxfieldAdapter implements IDeckService {
    service: MoxfieldService;

    constructor() {
        this.service = new MoxfieldService();
    }

    async GetDeckIds(userName: string): Promise<string[]> {
        const Profile = await this.service.getProfile(userName);
        return Profile.decks.map(x => x.id);
    }

    GetDeck(userName: string, deckId: string): Promise<Deck> {
        throw new Error('Method not implemented.');
    }

}
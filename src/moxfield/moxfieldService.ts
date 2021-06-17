import axios from 'axios';
import { Deck } from './entities/deck';
import { Profile } from './entities/profile';

export class MoxfieldService {
    async getProfile(userName: string) : Promise<Profile> {
        const response = await axios.get(`https://api.moxfield.com/v2/users/${userName}/decks?pageNumber=1&pageSize=12`);
        if(response.status == 200) {
            return new Profile(userName, response.data);
        }

        throw new Error(`Request failed with code ${response.status}`);
    }

    async getDeck(deckId: string) : Promise<Deck> {
        const response = await axios.get(`https://api.moxfield.com/v2/decks/all/${deckId}`);
        if(response.status == 200) {
            return new Deck(response.data);
        }

        throw new Error(`Request failed with code ${response.status}`);
    }
}
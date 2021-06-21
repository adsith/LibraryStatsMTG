import axios from 'axios';
import { Deck, Profile } from './types';

export class MoxfieldService {
    async getProfile(userName: string) : Promise<Profile> {
        const response = await axios.get(`https://api.moxfield.com/v2/users/${userName}/decks?pageNumber=1&pageSize=12`);
        if(response.status == 200) {
            const profile : Profile = {
                userName : userName,
                decks : response.data.data
            };

            return profile;
        }

        throw new Error(`Request failed with code ${response.status}`);
    }

    async getDeck(deckId: string) : Promise<Deck> {
        const response = await axios.get<Deck>(`https://api.moxfield.com/v2/decks/all/${deckId}`);
        if(response.status == 200) {
            return response.data;
        }

        throw new Error(`Request failed with code ${response.status}`);
    }
}
import axios from 'axios';
import { Profile } from './entities/profile';

export class MoxfieldService {
    async getProfile(userName: string) : Promise<Profile> {
        const response = await axios.get('https://api.moxfield.com/v2/users/PhyrexianDecorator/decks?pageNumber=1&pageSize=12');
        if(response.status == 200) {
            return new Profile(userName, response.data);
        }

        throw new Error(`Request failed with code ${response.status}`);
    }
}
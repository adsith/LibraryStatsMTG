import { MoxfieldAdapter } from './moxfield/moxfieldAdapter';

const serv = new MoxfieldAdapter();
serv.GetDeckIds('adsith').then(x => console.log(x));
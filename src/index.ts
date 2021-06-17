import { MoxfieldAdapter } from './moxfield/moxfieldAdapter';

const serv = new MoxfieldAdapter();
serv.getDeckIds('phyrexiandecorator')
.then(ids => ids.forEach(id => serv.getDeck('', id).then(x => console.log(x.main)))
);

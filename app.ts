import { Personagem } from './Personagem';
import { GuerreiroCorpoACorpo } from './GuerreiroCorpoACorpo';
import { GuerreiroLongoAlcance } from './GuerreiroLongoAlcance';
import { Guilda } from './Guilda';


const personagem1 = new Personagem(50, 30, 'Personagem 1');
const personagem2 = new GuerreiroCorpoACorpo(70, 20, 'Personagem 2');
const personagem3 = new GuerreiroLongoAlcance(60, 40, 'Personagem 3');


const guilda = new Guilda('Guilda A');


guilda.addMembros(personagem1);
guilda.addMembros(personagem2);
guilda.addMembros(personagem3);


console.log(`Nome do Personagem 1: ${personagem1.getNome()}`);
console.log(`Nome do Personagem 2: ${personagem2.getNome()}`);
console.log(`Nome do Personagem 3: ${personagem3.getNome()}`);


console.log(`Nome da Guilda: ${guilda.getNomeGuilda()}`);
console.log(`Membros da Guilda: ${guilda.membros.map(membro => membro.getNome()).join(', ')}`);


guilda.removeMembro(personagem2);


console.log(`Membros da Guilda: ${guilda.membros.map(membro => membro.getNome()).join(', ')}`);



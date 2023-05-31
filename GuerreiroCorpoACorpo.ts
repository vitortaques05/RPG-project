
import { Personagem } from './Personagem';

export class GuerreiroCorpoACorpo extends Personagem {

    constructor(ataque: number, cura: number, nome: string) {
        super(ataque, cura, nome);
        this.alcance = 2
    }
}

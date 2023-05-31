import { Personagem } from './Personagem';

export class GuerreiroLongoAlcance extends Personagem {

    constructor(ataque: number, cura: number, nome: string) {
        super(ataque, cura, nome);
        this.alcance = 20
    }
}

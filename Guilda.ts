import { Personagem } from "./Personagem";


export class Guilda {
    private nome: string;
    membros: Personagem [] = []


    constructor (nome: string){
        this.nome = nome
    }


    getNomeGuilda(): string{
        return this.nome
    }

    addMembros(membro: Personagem): void{
        this.membros.push(membro)
        membro.guildas.push(this.nome)
    }

    removeMembro(membro: Personagem): void {
        for (let i = 0; i < this.membros.length; i++) {
            if (this.membros[i].getNome() === membro.getNome()) {
                this.membros.splice(i, 1);
                break;
            }
        }
        for (let i = 0; i < membro.guildas.length; i++) {
            if (membro.guildas[i] === this.nome) {
                membro.guildas.splice(i, 1);
                break;
            }
        }
    }


}


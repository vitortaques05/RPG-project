export class Coisa {
    protected nome: string;
    protected vida: number;
    protected vivo: boolean = true;


    constructor (nome: string, vida: number){
        this.nome = nome;
        this.vida = vida;
    }


    // personagem extende coisa
    // personagem utiliza atributos da coisa
    // personagem usa construtor da coisa (super)
    // machucar chama danifica coisa
    // remover o "_classe" dos atributos


    getnome():string{
        return this.nome
    }


    getVida (): number{
        return this.vida
    }


    getCoisaViva (): boolean {
        return this.vivo
    }


 setVida (num: number){
        this.vida = num;
    }
 setCoisaViva (valor: boolean){
        this.vivo = valor;
    }

    isVivo(){
        return this.vivo
    }
}

import { Animal } from './Animal';


class Recinto {
    constructor(biomas, tamanhoTotal, animais ) {
        if (!Array.isArray(biomas)) {
            return {
                erro: "O Bioma deve ser um array"
            }
        }
        if (!Array.isArray(animais)) {
            return {
                erro:"Animais deve ser um array"
            }
        }

        this._biomas = biomas;
        this._animais = animais;
        this._tamanhoTotal = tamanhoTotal
        this._tamanhoUtilizado = 0;
    }
    adicionaAnimal(animal, quantidade) {
        var validador = 0;
        if (!animal instanceof Animal) {
            return {
                erro: "O animal deve ser uma instância da classe Animal"
            }
        }
        if (this._animais.length != null) {
            for (var i = 0; i < this._animais.length; i++) {
                if (this._animais[i] == animal._nome) {
                    this._animais[i]._tamanhoUtilizado += quantidade * animal._valorQueOcupa;

                    validador = 1;
                }
            }    
        }
        if (validador != 1) {
            this._animais.push(animal)
        }
        
    }
}

export { Recinto as Recinto };
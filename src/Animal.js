class Animal {
    constructor(nome, valorOcupado, tipoAnimal, biomas) {
        this._nome = nome;
        this._valorQueOcupa = valorOcupado;
        this._tipoAnimal = tipoAnimal;

        if (Array.isArray(biomas)) {
            this._biomas = biomas
        } else {
            throw new Error("O pârametro biomas deve ser um array");
        }
    }
}

export {Animal as Animal}
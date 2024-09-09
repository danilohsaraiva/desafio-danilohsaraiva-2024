class Recinto {
    constructor(biomas, tamanhoTotal) {
        if (!Array.isArray(biomas)) {
            return {
                erro: "O Bioma deve ser um array"
            }
        }

        this._biomas = biomas;
        this._tamanhoTotal = tamanhoTotal
        this._tipoAnimaisNoRecinto = null;
        this._tamanhoUtilizado = 0;
    }
}

export { Recinto as Recinto };
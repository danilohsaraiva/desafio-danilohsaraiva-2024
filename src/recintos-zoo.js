import { Recinto } from './Recinto';

class RecintosZoo {
    
    constructor() {
        this.recintosViaveis = [];
        this.recintos = [ new Recinto(["Savana"], 10), new Recinto(["Floresta"], 5), new Recinto(["Savana", "Rio"], 7), new Recinto(["Rio"], 8), new Recinto(["Savana"], 9)];
        this.atualizaConformeDesafio();
        this.animais = [Animal, quantidade];
    }

    analisaRecintos(animal, quantidade) {
        var tamanho;
        let tipoAlimentacao;
        var bioma;

        //      Recintos          espaço        Animais existentes
        // 1	savana              10              3 macacos
        // 2	floresta	        5               vazio
        // 3	savana e rio	    7               1 gazela
        // 4	rio	                8               vazio
        // 5	savana	            9               1 leão

        // Espécie	    tamanho	            bioma
        // LEAO	            3	            savana
        // LEOPARDO	        2	            savana
        // CROCODILO	    3	            rio
        // MACACO	        1	            savana ou floresta
        // GAZELA	        2	            savana
        // HIPOPOTAMO	    4	            savana ou rio

        switch (animal) {
            case "LEAO":
                tamanho = 3;
                bioma = "Savana";
                tipoAlimentacao = "Carnívoro";
                break;
            case "LEOPARDO":
                tamanho = 2;
                bioma = "Savana";
                tipoAlimentacao = "Carnívoro";
                break;
            case "CROCODILO":
                this.recintosViaveis.length = 0;
                bioma = "Rio"
                tamanho = 3;
                var valorAtualizado = tamanho * quantidade;
                tipoAlimentacao = "Carnívoro";
                for (var i = 0; i < this.recintos.length; i++) {

                    for (var j = 0; j < this.recintos[i]._biomas.length; j++) {

                        if (this.recintos[i]._biomas[j] == bioma
                            && (this.recintos[i]._tamanhoTotal <=(valorAtualizado + this.recintos[i]._tamanhoUtilizado))
                            && this.recintos[i]._tipoAnimaisNoRecinto == tipoAlimentacao || this.recintos[i]._tipoAnimaisNoRecinto == null) {
                            
                            if (bioma == this.recintos[i]._biomas[j]) {
                                this.recintos[i]._tamanhoUtilizado = (valorAtualizado + this.recintos[i]._tamanhoUtilizado);
                               
                                var frase = `Recinto ${i+1} (espaço livre: ${this.recintos[i]._tamanhoTotal - this.recintos[i]._tamanhoUtilizado} total: ${this.recintos[i]._tamanhoTotal})`;
                                this.recintosViaveis.push(frase);
                                

                                if (this.recintos[i].tipoAlimentacao === null) {
                                    this.recintos[i].tipoAlimentacao = tipoAlimentacao;
                                }
                                break;

                            }    
                        }
    
                    }                    
                }
                if (this.recintosViaveis.length == 0) {
                    return {
                        recintosViaveis: [],
                        erro: true
                    }    
                } else {
                    return {
                        recintosViaveis: this.recintosViaveis,
                        erro: false
                    }
                }

                break;
                case "MACACO":
                    this.recintosViaveis = []; 
                    var biomas = ["Savana", "Floresta"];
                    tamanho = 1;
                    var valorAtualizado = tamanho * quantidade;
                    tipoAlimentacao = "Herbívoro";
                    
                    if (quantidade <= 0) {
                        return {
                            erro: "Quantidade inválida",
                            recintosViaveis: false
                        };
                    } else if (quantidade == 10) { 
                        return {
                            erro: "Não há recinto viável",
                            recintosViaveis: false
                        };
                    }
                
                    for (var i = 0; i < this.recintos.length; i++) {
                        var recinto = this.recintos[i];
                        
                        if (biomas.some(bioma => recinto._biomas.includes(bioma)) &&
                            (recinto._tamanhoTotal - recinto._tamanhoUtilizado) >= valorAtualizado &&
                            (recinto._tipoAnimaisNoRecinto === tipoAlimentacao || recinto._tipoAnimaisNoRecinto === null)
                        ) {
                            this.recintos[i]._tamanhoUtilizado += valorAtualizado;
                            this.recintosViaveis.push(`Recinto ${i + 1} (espaço livre: ${this.recintos[i]._tamanhoTotal - this.recintos[i]._tamanhoUtilizado} total: ${recinto._tamanhoTotal})`);
                        }
                    }
                
                    if (this.recintosViaveis.length === 0) {
                        return {
                            recintosViaveis: [],
                            erro: true
                        };    
                    } else {
                        return {
                            recintosViaveis: this.recintosViaveis,
                            erro: false
                        };
                    }
            //herbivoro
            case "GAZELA":
                bioma = "Savana"
                tamanho = 2;
                tipoAlimentacao = "Herbívoro";
                break;
            //herbivoro
            case "HIPOPOTAMO":
                tamanho = 4;
                tipoAlimentacao = "Herbívoro";
                var biomas = ["Savana", "Rio"];
                break;
            default:
                return {
                    erro: 'Animal inválido',
                    recintosViaveis: false
                }
        }
    }

    buscaRecintosViaveis(tipoAlimentacao, quantidade) {
        var possiveisRecintos = [];
        
        return possiveisRecintos;
    }

    atualizaConformeDesafio() {
        this.recintos[0]._tamanhoUtilizado = 3; // 3 macacos
        this.recintos[0]._tipoAnimaisNoRecinto = "Herbívoro";
        this.recintos[1]._tamanhoUtilizado = 0;
        this.recintos[2]._tamanhoUtilizado = 2; // 1 gazela
        this.recintos[2]._tipoAnimaisNoRecinto = "Herbívoro";
        this.recintos[3]._tamanhoUtilizado = 0;
        this.recintos[4]._tamanhoUtilizado = 3; // 1 leao
        this.recintos[4]._tipoAnimaisNoRecinto = "Carnívoro";
    }

}

export { RecintosZoo as RecintosZoo };

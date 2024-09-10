import { Recinto } from './Recinto';
import { Animal } from './Animal';

class RecintosZoo {
    
    constructor() {
        this.recintosViaveis = [];

        this.recintos = [new Recinto(["Savana"], 10,[new Animal("Macaco", 1, "Herbívoro", 3)]),
            new Recinto(["Floresta"], 5, []),
            new Recinto(["Savana", "Rio"], 7, [new Animal("Gazela", 2, "Herbívoro", 1)]),
            new Recinto(["Rio"], 8, []),
            new Recinto(["Savana"], 9, [new Animal("Leão", 3, "Carnívoro",1)])];
        
    }

    analisaRecintos(animal, quantidade) {
        var tamanho;
        let tipoAlimentacao;
        var bioma;

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

}

export { RecintosZoo as RecintosZoo };

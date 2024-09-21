import { Recinto } from './Recinto';
import { Animal } from './Animal';

class RecintosZoo {

    constructor() {
        this.recintosViaveis = [];

        this.recintos = [new Recinto(["Savana"], 10, [new Animal("Macaco", 1, "Herbívoro", 3)]),
        new Recinto(["Floresta"], 5, []),
        new Recinto(["Savana", "Rio"], 7, [new Animal("Gazela", 2, "Herbívoro", 1)]),
        new Recinto(["Rio"], 8, []),
        new Recinto(["Savana"], 9, [new Animal("Leão", 3, "Carnívoro", 1)])];

    }

    analisaRecintos(animal, quantidade) {


        switch (animal) {
            case "LEAO":
                const biomasLeao = ["Savana"];
                const leao = new Animal("LEAO", 3, "Carnívoro", biomasLeao);
                break;

            case "LEOPARDO":
                const biomasLeopardo = ["Savana"];
                const leopardo = new Animal("LEOPARDO", 2, "Carnívoro", biomasLeopardo);
                break;
            
            case "CROCODILO":
                this.recintosViaveis.length = 0;
                const biomasCrocodilo = ["Rio"];
                const crocodilo = new Animal("CROCODIOLO", 3, "Carnívoro", biomasCrocodilo);

                tamanho = 3;
                var valorAtualizado = tamanho * quantidade;
                tipoAlimentacao = "Carnívoro";

                for (var i = 0; i < this.recintos.length; i++) {

                    for (var j = 0; j < this.recintos[i]._biomas.length; j++) {

                        if (this.recintos[i]._biomas[j] == bioma) {
                            var crocodiloBusca = this.recintos[i]._animais.find(animal => animal._nome = "Crocodilo");
                            if (crocodiloBusca) {
                                for (var k = 0; k < this.recintos[i]._animais.length; k++) {
                                    if (this.recintos[i]._animais[k]._tipoAnimaisNoRecinto != tipoAlimentacao) {

                                    }
                                }
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
                //so fica confortável caso haja outro animal no recinto

                this.recintosViaveis = [];
                quantidade = 1;
                const biomasMacaco = ["Savana", "Floresta"];
                const macaco = new Animal("MACACO", 1, "Herbívoro", biomasMacaco);

                var valorAtualizado = tamanho * quantidade;
                tipoAlimentacao = "Herbívoro";

                if (this.validaQuantidade(quantidade)) {
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
            case "GAZELA":
                const biomaGazela = ["Savana"];
                const gazela = new Animal("GAZELA", 2, "Herbívoro", biomaGazela);
                
                break;
            case "HIPOPOTAMO":
                //tolera outra especie se estiver no habitat Savana e Rio
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

    //válida qquantidade

    validaQuantidade(quantidade) {
        if (quantidade <= 0) {
            return false;
        } else {
            return true;
        }
    }

    buscaRecintosViaveis(tipoAlimentacao, quantidade) {
        var possiveisRecintos = [];

        return possiveisRecintos;
    }

    //adionando métodos necessários

    //retorna boolean    
    verificandoCompatibilidadeDoTipoDeAlimentacao(arrayAnimais1, arrayAnimais2) {

    }
    //retorna um boolean
    temEspacoNecessario(recinto, valorAdicionado) {

    }

    //adiciona animal no recinto
    //caso haja mais de uma especie adiciona o valor +1 a quantidade
    adicionaAnimalAoRecinto(recinto, quantidade) {

    }


}

export { RecintosZoo as RecintosZoo };

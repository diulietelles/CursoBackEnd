import * as leitor from "readline-sync"

function main(){
    let adulto = leitor.questionInt("Insira a quantidade de adultos que existem na festa: ")
    let crianca = leitor.questionInt("Insira a quantidade de criancas qu e exostem na festa: ")
    console.log(" The total paty size is:", calcula(adulto, crianca));
}

function calcula(adulto, crianca): Number { 
     return adulto + crianca 

}
main()

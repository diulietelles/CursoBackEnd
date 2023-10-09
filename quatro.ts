import * as leitor from "readline-sync"

function main() {
    //bloco de variaveis
    let salarioBruto: Number;
    let salarioINSS: Number;
    let salarioLiquido: Number;

    salarioBruto = leitor.questionFloap("Insira o valor do seu salario bruto");

    salarioINSS = INSS(salarioBruto)
    salarioLiquido = IRRF(salarioINSS)

    console.log(`Seu salario é: ${salarioBruto}`);
    console.log()
    
}

// funcao para calculo de inss com base no salario bruto
function INSS(salario: Number): Number {
    if(salario <= 1320){
        return salario * 0.925

    } else if (salario > 1319 && salario < 2.572){
        return salario*0.91
    } else if(salario > 2572 && salario < 3856){
        return salario * 0.88
    } else if(salario 2826 && salario < 3751){
        return salario * 0.85
    } else if(salario > 3856){

    }

}   


function soma(num1=0, num2=0){//se o parametro não for passado será = a 0
    let numero1 = num1;
    let numero2 = num2;

    let soma = numero1 + numero2

    return soma

    //ou simplesmente
    //return num1 + num2
}

let resultado = soma(11, 4)

console.log(resultado)
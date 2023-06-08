let num = [1,2,9]

num[3] = 4 // num na posição 3

num [0] = 0 //substitui o valor da posicão 0

num.push(5) //empurra o valor no final do vetor

//console.log(num)

//console.log(num.length)


//console.log(num.sort())
//elementos em ordem crescente

//console.log(num[1])

for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

//para cada posição em num:
for (let i in num) {
    console.log(num[i]) 
}


//Buscar o indice de certo valor
console.log(num.indexOf(5))
//se não tiver retorna -1

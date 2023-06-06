var horaAtual = new Date()

var dia = horaAtual.getDay()

switch(dia) {
    case 0:
        console.log('Domingo')
        break //o uso do break é obrigatório
    case 1: 
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3: 
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5: 
        console.log('Sexta')
        break
    case 6: 
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] dia inválido')
}
//exemplo simples de uma condição
/*var vel = 35
if (vel > 60) {
    console.log('Você ultrapassou a velocidade permitida!')
}
else {
    console.log('Você não passou da velocidade permitida, continue assim e lembre-se de usar o cinto de segurança!')
}*/

//outro exemplo
/*var país = 'Brasil'
console.log(`Nascido no ${país},`)
if (país == 'Brasil') {
    console.log('Você é Brasileiro!')
} else {
    console.log('Você é Estrangeiro!')
}*/

// exemplo condição aninhada
/*
var idade = 67
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
  console.log("Não vota")
} else if (idade < 18 || idade > 65) {
  console.log("Voto opcional")
} else {
  console.log("Voto obrigatório")
}
*/

/*
var agora = new Date() //pra pegar a hora ou dia, ano etc
var hora = agora.getHours() //aqui pega a hora do sistema
console.log(`Agora são exatamente ${hora} horas.`)
if(hora < 12) {
    console.log('Bom dia!')
} else if(hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
*/

//exemplo de condição composta, usando switch
var agora = new Date()
var diaSemana = agora.getDay()
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta 
4 = quinta
5 = sexta
6 = sábado
*/

console.log(diaSemana)

switch(diaSemana) {
    case 0: 
    console.log('Domingo')
        break
    case 1 : 
    console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3: 
    console.log('Quarta-feira')
        break
    case 4: 
    console.log('Quinta-feira')
        break
    case 5: 
    console.log('Sexta-feira')
        break
    case 6: 
    console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}
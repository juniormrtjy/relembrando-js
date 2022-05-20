// =============== OPERADORES COMPARATIVOS

var opcomp = document.querySelector('#opcomp .content aside')

opcomp.innerHTML +=
  '<p> 5 === "5"' + '. Essa comparação é: ' + (5 === '5') + '</p>' + '<br>'
opcomp.innerHTML +=
  '<p> 5 == "5"' + '. Essa comparação é: ' + (5 == '5') + '</p>' + '<br>'
opcomp.innerHTML +=
  '<p> 6 != "6"' + '. Essa comparação é: ' + (6 != '6') + '</p>' + '<br>'
opcomp.innerHTML +=
  '<p> 6 !== "6"' + '. Essa comparação é: ' + (6 !== '6') + '</p>' + '<br>'
opcomp.innerHTML +=
  '<p> 10 > 5?' + '. Essa comparação é: ' + (10 > 5) + '</p>' + '<br>'
opcomp.innerHTML +=
  '<p> 10 < 5?' + '. Essa comparação é: ' + (10 < 5) + '</p>' + '<br>'
opcomp.innerHTML +=
  '<p> 10 <= 10?' + '. Essa comparação é: ' + (10 <= 10) + '</p>' + '<br>'

// =============== OPERADORES LÓGICOS

{
  let dom = document.querySelector('#oplog .content aside')
  let idade = 20
  let maior20 = idade >= 20
  let menor30 = idade <= 30
  let entre = maior20 && menor30

  dom.innerHTML +=
    '<p> <span>let</span> idade = ' +
    idade +
    ' ~~ <span>let</span> maior20 = idade >= 20; ~~ <span>let</span> menor30 = idade <= 30; ~~ <span>let</span> entre = maior20 && menor30 </p>' +
    '<br>'
  dom.innerHTML +=
    '<p>Se a idade for maior que 20: ' + maior20 + '</p>' + '<br>'
  dom.innerHTML +=
    '<p>Se a idade for menor que 30: ' + menor30 + '</p>' + '<br>'

  dom.innerHTML +=
    '<p>Se a idade estiver entre 20 e 30: ' + entre + '</p>' + '<br>'
}
{
  // EXEMPLO DA GRATUIDADE
  let dom = document.querySelector('#oplog .content .a-2')
  let idade = 9
  let menor10 = idade <= 10
  let maior65 = idade >= 65
  let gratuidade = menor10 || maior65

  dom.innerHTML +=
    '<p>Se a pessoa tiver 10 anos ou menos, terá direito a gratuidade. Se tiver 65 anos ou mais, também terá direito a gratuidade. <br> <span>let</span> gratuidade = menor10 || maior65; <span>let</span> idade = ' +
    idade +
    '; </p> <br>'
  dom.innerHTML += '<p> Você tem direito a gratuidade? ' + gratuidade + '</p>'
}
{
  // NEGAÇÃO
  let dom = document.querySelector('#oplog .content .a-3')
  let idade = 19
  let maior20 = idade >= 20
  let menor20 = !maior20 // ! indica a negação

  dom.innerHTML +=
    '<p>Imprimindo a variável "maior20": ' + maior20 + '</p> <br>'
  dom.innerHTML +=
    '<p>Imprimindo a variável "menor20": ' + menor20 + '</p> <br>'
}

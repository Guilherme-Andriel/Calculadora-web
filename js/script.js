// ---------------- Interatividade ---------------------


function calculo(tipo,valor){
  if (tipo === 'acao') {
    if (valor === 'c') {
      document.getElementById('resultado').value = ''
    }
    if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){
      document.getElementById('resultado').value +=' '+valor+' '
    }
    

    if (valor === '=' ) {

      var valor_campo = eval(document.getElementById('resultado').value)
      console.log(valor_campo) //eval funciona como oprerações aritméticas no console.
      document.getElementById('resultado').value = valor_campo
    }
  }
  else if(tipo === 'valor'){
      document.getElementById('resultado').value += valor
  }
}
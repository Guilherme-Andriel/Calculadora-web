// ---------------- Interatividade ---------------------


function calculo(tipo, objeto){
  if (tipo === 'acao') {
    
    if (objeto === 'c') {
      document.getElementById('resultado').value = ''
    }
    if(objeto === '+' || objeto === '-' || objeto === '/' || objeto === '*' || objeto === '.'){
      document.getElementById('resultado').value +=' '+objeto+' '
    }
    

    if (objeto === '=' ) {

      var valor_campo = eval(document.getElementById('resultado').value)
      console.log(valor_campo) //eval funciona como oprerações aritméticas no console.
      document.getElementById('resultado').value = valor_campo
    }

    
  }

  else if(tipo === 'valor'){

      document.getElementById('resultado').value += objeto
  }
}
'use strict'

function BinarioADecimal(num) {

  var arr = num.split('')

  arr = arr.reverse()
  var resultado = 0;

 for (let index = 0; index < arr.length; index++) {
   
  resultado += arr[index] * (Math.pow(2,[index]))
     
   
 }
 return resultado;
}

function DecimalABinario(num) {
  
  // recibo un decimal
  // divido por 2
  // me quedo con el resto
  // repito 
  // armo un array y lo doy vuelta 
   var resultado = ""
    
    while (num > 0) 
    {
      resultado = (num  % 2) + resultado 
      num = Math.floor(num / 2);
       
    }
    
    return resultado
    
  
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
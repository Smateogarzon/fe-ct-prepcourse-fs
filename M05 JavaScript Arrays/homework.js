/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   var elemento=array[0];
   return(elemento)
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var elemento=array[array.length-1];
   return(elemento)
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return (array.length)
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray=array.map(num=>{return num+1})
   return(nuevoArray);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento)
return(array)
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return(array)
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // ncon u espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabrasN=palabras.join(" ")
  return(palabrasN)
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var cont=array.includes(elemento)
   return(cont)
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var numero=arrayOfNums.reduce((acu,number)=>{return(acu+number)},0)
   return(numero)
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var acu=0;
   var tamaño=resultadosTest.length-1;
   for(var a=0;a<resultadosTest.length;a++){
      var sum=resultadosTest[a];
      acu= acu+sum;
       }
   var prom=acu/tamaño;    
       return(prom);
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var tamaño=arrayOfNums.length-1
   var may=arrayOfNums[0]
   for(a=0;a<arrayOfNums.length;a++){
      var pos1=arrayOfNums[a]
      var pos2=arrayOfNums[a-1]
      if(a===tamaño){
         var pos3=arrayOfNums[a-1]
if(pos1>pos3&&may<pos1){
   may=arrayOfNums[a]
   
}
     }else{
      
      if((pos1>pos2)&&may<pos1){
         may=arrayOfNums[a]
       
      }
   }
   }
   return(may);
}

function multiplicarArgumentos(arguments) {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multiplo=1
   if(arguments.length===0){
      return(0)
   }else if(arguments.length===1){
      var uno=arguments[0]
      return(uno)
   }else{
      for(var a=0;a<arguments.length;a++){
var num=arguments[a]
         multiplo=multiplo*num

      }
   }
   return(multiplo)
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cont=0;
   for(var a=0;a<array.length;a++){
      if(array[a]>18){
         cont++;
      }
   }
return cont;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:


}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if(num.charAt(0)==="9"){
      return(true)
   }else return(false)
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var igual=array.every((val)=>val===array[0]);
  return(igual)
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var meses=[]
   for(var a=0;a<array.length;a++){
      var status=array[a]
      if(status=="Enero"||status=="Marzo"||status=="Noviembre"){
meses.push(status)


      }
   }
   if(meses.length===0){
      return("No se encontraron los meses pedidos")
   }
   return(meses)
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var seis=0
   var multiplo=[];
   for(var a=0;a<=60;a++){
seis=a*6;
multiplo.push(seis)
   }
   return(multiplo);
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayCien=[]
   var memoria=0
   for(var a=0;a<array.length;a++){
memoria=array[a]
if (memoria>100){
   mayCien.push([array[a]])
}

   }
  return(mayCien)
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arraySuma=[]
   var nul=false;
   for(var a=0;a<10;a++){
      num+=2;
      if(num===a){
         nul=true;
         return("Se interrumpió la ejecución");
break;
      }else {arraySuma.push(num);}

   }
if(nul===false){
   return(arraySuma);
}

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arraySuma=[]
   
   for(var a=0;a<10;a++){
      if(a===5){
         continue;
      }else{
      num+=2;
      arraySuma.push(num);}
       } 
       return(arraySuma);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

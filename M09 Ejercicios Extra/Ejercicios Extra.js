/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   //solo con el metodo entires puede salir en una linea
   // Tu código:
   var klaveValor = [];
   for (var key in objeto) {
      if (objeto.hasOwnProperty(key)) {
         klaveValor.push([key, objeto[key]]);
      }
   }
   return klaveValor;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arrString= string.split("").sort();
   var letras={}
   for(var elemento of arrString){
      if(letras[elemento]){
   letras[elemento]++
      }else{letras[elemento]=1}
   }
  return letras
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayus=string.match(/[A-Z]/g);
   var minus=string.match(/[a-z]/g);
var rstring=mayus.concat(minus).join("");
return(rstring)
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arrfrase=[...frase]
    
   var newfrase=[],meroria=[];
  for(var i=0;i<arrfrase.length;i++){
if(arrfrase[i]!==" "){
   meroria.unshift(arrfrase[i])
}else{
   newfrase=newfrase.concat(meroria); newfrase.push(" ");
   meroria=[]
  
};
  } 
   newfrase=newfrase.concat(meroria);
   var string=newfrase.join("")
   return(string)
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var string=numero.toString()
   var invernum=[...string].reverse().join("")
  if(string===invernum) {return("Es capicua") }
  else return("No es capicua");
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newstring=string.replace(/[abc]/g,"");
   return newstring
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var memoria=[]
  var nerarr=arrayOfStrings.slice()
  for(var a=0;a<nerarr.length-1;a++)
  for(var i=0;i<nerarr.length-1-a;i++){
 if(nerarr[i].length>nerarr[i+1].length){
  memoria=nerarr[i]
  nerarr[i]=nerarr[i+1]
  nerarr[i+1]=memoria
  
 }
  }
 return(nerarr)
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   // puede acortace mucho utilizando un filter y un inclue comparando el mas peq filtrado en el mas grande
   var masGrande
   var arrEnComun=[]
   if(array1.length>array2.length||array1.length===array2.length){
 masGrande=array1; var masPeq=array2;
   }else {masGrande=array2; var masPeq=array1}
 for(var a=0;a<masPeq.length;a++){
   for(var b=0;b<masGrande.length;b++){
     if(masPeq[a]===masGrande[b]){
       if(arrEnComun.includes(masPeq[a])===false)
       arrEnComun.push(masGrande[b]);
     }
   }
 }
 return(arrEnComun)
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

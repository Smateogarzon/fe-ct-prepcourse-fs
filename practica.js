function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
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
console.log(arrEnComun)
}buscoInterseccion([1,2,3,4,7,3,2,8,4,2,4,4,7],[2,3,4,7,1,2,3,4,7,3,2,8,4,2,4,4,7])

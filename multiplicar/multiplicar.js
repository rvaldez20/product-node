/*
   SE PIDE: Crear una tabla de multipliacación usando la bas d ela siguiente forma:

   2 *  1 = 2
   2 *  2 = 4
   2 *  3 = 6
   ...
   2 * 10 = 20

   -> Se hace mediante un ciclo for y usando string literals
*/

// Requireds// requerimos el modulo FileSystem de node
const fs = require('fs');
const colors = require('colors');

// creamos la función listar
let listarTabla = (base, limite = 10) => {

   console.log('=================================='.yellow)
   console.log(`==========Tabla del ${ base }============`.cyan)
   console.log('=================================='.yellow)


   // generamos la tabla de multiplicar con la base y el limite
   for(let i = 1; i <= limite; i++){
      if( (i % 2) === 0 ) {
         console.log(` ${base} * ${i} = ${base * i}`.red)
      } else {
         console.log(` ${base} * ${i} = ${base * i}`.blue)
      }
   }
}


// Creamos la funcion crear
let crearArchivo = ( base, limite = 10 ) => {

   // creamos una promesa
   return new Promise( (resolve, reject) => {
      let data = '';

      // validamo la base
      if( !Number(base) ){
         reject(`El valor introducido ${ base } no es número`);
         return;
      }
      
      // generamos la tabla de multiplicar con la base
      for(let i = 1; i <= limite; i++){
         data += ` ${base} * ${i} = ${base * i}\n`;
      }
      
      // la guardmaos en un archivo
      fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
         if (err)  
            reject(err)
         else
            resolve(`tabla-${ base }-al-${ limite }.txt`)
         // console.log(`El archivo tabla-${ base }.txt a sido creado!`);

       });
   });
}

// vamos a exportar la función que retorna la promesa
module.exports = {
   // crearArchivo: crearArchivo gracias a ES6 si son iguales solo se escribe una sola vez
   crearArchivo,
   listarTabla
}
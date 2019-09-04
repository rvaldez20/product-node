

// Requireds
const argv = require('./config/yargs').argv;
// para camnbiar el color del texto y forndo en la terminal
const colors = require('colors/safe');


// asi estamos requiriendo todo el archivo
const multiplicar = require('./multiplicar/multiplicar');
// con destructuracion podemos requerir solo el nombre del metodo o fiuncion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



//console.log(argv);
let comando = argv._[0];

switch( comando ) {
  case 'listar': 
    listarTabla(argv.base, argv.limite);
    break

  case 'crear': 
    crearArchivo(argv.base, argv.limite)
      .then( archivo => console.log(`Archivo creado:`, colors.yellow(archivo)))
      .catch( e => console.log(e));
      break

  default:
    console.log('Comando no reconocido');
}



 // ahora hay que hacer mas funcional nuestra aplicaciond emultiplicar



 // VAmos a configurar para pasar parametros por consola se hace mediante process.argv

// console.log(module);
// console.log(multiplicar);
//console.log(process.argv);
//console.log(base);

/* 

    YA NO SE UTILIZARAN

 let argv2 = process.argv;
 console.log(argv2);
 let parametro =  argv[2];
 let base = parametro.split('=')[1]


 */
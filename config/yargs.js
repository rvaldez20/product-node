
// opcione
const opts = {
   base: {
      demand: true,
      alias: 'b'
   },
   limite: {
      alias: 'l',
      default: 10
   }
}


// requerimos el paquete yargs y lo guardamos en la variable argv
const argv = require('yargs')
    .command('listar','Imprimee en consola la tabla de multiplicar',opts)
    .command('crear','Genera un archivo con la tabla de multiplicar',opts)
    .help()
    .argv

module.exports = {
   argv
}
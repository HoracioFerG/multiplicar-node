const opt = {
	base: {
		demand: true,
		alias:'b'
	},
	limite: {
		alias:'l',
		default: 10
	}
}


const argv = require('yargs')
					.command('listar','Imprimir en consola tabla de multiplicar', opt)
					.command('crear','Crea un archivo con tabla de multiplicar', opt)
					.help()
					.argv;

module.exports = {
	argv
}
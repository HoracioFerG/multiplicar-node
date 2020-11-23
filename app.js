const argv = require('./config/yargs').argv;
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch(comando){
	case 'listar':
		listarTabla(argv.base,argv.limite);
	break;
	case 'crear':		
		crearArchivo(argv.base,argv.limite)
			.then(archivo => console.log(`Archivo creado: ${archivo}`.green))
			.catch(err=>console.log(err));
		
	break;
	default:
		console.log('Comando no reconocido');
}

// console.log(argv);


// console.log(argv.base, argv.limite);

// let param = argv[2];
// let base = param.split('=')[1];
// console.log(base);


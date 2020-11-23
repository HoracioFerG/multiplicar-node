const fs = require('fs');
const colors = require('colors');

let listarTabla= (base, limite=10) =>{
	console.log('=============='.green);
	console.log(`==tabla de ${base}==`.green);
	console.log('=============='.green);
	for (let i = 1; i <=limite; i++) {
			console.log(`${base} * ${i} = ${base*i} \n`);
		}
}

let crearArchivo = (base,limite) =>{

	return new Promise((resolve, reject)=>{
		let data = '';
		for (let i = 1; i <=limite; i++) {
			data+=`${base} * ${i} = ${base*i} \n`;
		}



		fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
		  if (err){
		  	reject(err);
		  }else{
		  	resolve(`El archivo fue creado`.green);	
		  }
		  
		});
	});
	

}


module.exports={
	crearArchivo,
	listarTabla
}

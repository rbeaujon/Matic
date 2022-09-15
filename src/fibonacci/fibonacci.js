const fibonacci = (num) => {

	let numeros = []

	if(num === 0) {
		numeros[0] = 0		
	}
	if(num === 1){
		numeros = [0,1]
	}
	if(num>1){
		numeros[0] = 0
		numeros[1] = 1
		
		for(let i = 2; i<num; i++){
			numeros[i] = numeros[i-1] + numeros[i-2]
		}
	}

return numeros
	

}

module.exports = fibonacci
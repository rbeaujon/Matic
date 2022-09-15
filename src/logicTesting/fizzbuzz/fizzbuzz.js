
const cal = (num) => {

	if(num%3 === 0 && num%5 === 0){    
	  return "fizzbuzz"
	}
	  if(num%3 === 0){
		return "fizz"
	  }
	  if(num%5 === 0){
		return "buzz"
	  }
  
  return num
  
  }
  
  const fizzbuzz = (x) => {
	const num = x==="" ? "" : Math.abs(Number(x))
	if(num !==""){	
		const numbers = num === 0 || num === 1 ? [0] : [0,1]
		for(let i=1; i<=num; i++){
		numbers.push(cal(i))
		}
		return numbers.toString()
	}else{
		return "Should be a valid number"
	}
  
	
  }
 
  
  module.exports = fizzbuzz
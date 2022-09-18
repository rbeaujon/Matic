import React, { useState } from 'react';
import './logic.style.scss';
import Menu from '../menu/menu';;


const fibonacci = require('../../logicTesting/fibonacci/fibonacci')
const repeatedWords = require('../../logicTesting/repeatedWords/repeatedWords')
const fizzbuzz = require('../../logicTesting/fizzbuzz/fizzbuzz')

function Logic() {


  const [calFibo, setCalFibo] = useState('')
  const fibo = (e) => {
    const resp = fibonacci(e).toString().replaceAll(',', ', ')
    
    document.getElementById('repeated').value = "";
    document.getElementById('fizzbuzz').value = "";
  
    setWords(''); 
    setFizzbuzz('')
    setCalFibo(resp)
  }

  const [words, setWords] = useState('')
  const repeated = (e) => {
    const resp =JSON.stringify(repeatedWords(e)).replace(/[{}"]/g, "").replaceAll(',', ', ')
    
    document.getElementById("fibonacci").value = "";
    document.getElementById('fizzbuzz').value = "";

    setCalFibo('')
    setFizzbuzz('')
    setWords(resp)
    
  }

  const [calFizzbuzz, setFizzbuzz] = useState('')
  const fizz = (e) => {
    const resp = fizzbuzz(e).replaceAll(',', ', ')
    
    document.getElementById("fibonacci").value = "";
    document.getElementById('repeated').value = "";

    setCalFibo('')
    setWords('')
    setFizzbuzz(resp)

  }

  return (
    <div className="Logic">        
      <div className='menu'>
          <Menu />
        </div>
      <div className='container'>

        <div className='item'>
          <h1>Fibonacci</h1>
          <input type="text" id="fibonacci"  placeholder="write a number"/>
          <div>
            <button onClick={() => fibo(document.getElementById('fibonacci').value)}>Calculate Fibonacci</button>
          </div>
        </div>
        <div className='item'>
          <h1>Repeated Words</h1>
          <textarea  id="repeated"  placeholder="write a phrase"/>
          <div>
            <button className='words' onClick={() => repeated(document.getElementById('repeated').value)}>Check Repeated Words</button>
          </div>
        </div>
        <div className='item'>
          <h1>FizzBuzz</h1>
          <input type="text" id="fizzbuzz"  placeholder="insert a number"/>
          <div >
            <button onClick={() => fizz(document.getElementById('fizzbuzz').value)}>Show FizzBuzz</button>
          </div>
          
        </div>
      </div>
      <div className='result'> 
          <div>
            {calFizzbuzz}
            {calFibo}  
            {words} 
          </div>
      </div>

    </div>
  );
}

export default Logic;

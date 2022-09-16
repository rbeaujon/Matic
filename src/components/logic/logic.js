import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './logic.style.scss';
import Menu from '../menu/menu';;


const fibonacci = require('../../logicTesting/fibonacci/fibonacci')
const repeatedWords = require('../../logicTesting/repeatedWords/repeatedWords')
const fizzbuzz = require('../../logicTesting/fizzbuzz/fizzbuzz')

function Logic() {

  const navigate = useNavigate();

  const [calFibo, setCalFibo] = useState('')
  const fibo = (e) => {
    const resp = fibonacci(e).toString()
    setWords('')
    setFizzbuzz('')
    setCalFibo(resp)
  }

  const [words, setWords] = useState('')
  const repeated = (e) => {
    const resp = JSON.stringify(repeatedWords(e))
    setCalFibo('')
    setFizzbuzz('')
    setWords(resp)
    
  }

  const [calFizzbuzz, setFizzbuzz] = useState('')
  const fizz = (e) => {
    const resp = fizzbuzz(e)
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
          <div>{calFizzbuzz}</div>
          <div> {calFibo} </div> 
          <div> {words} </div>
      </div>

    </div>
  );
}

export default Logic;

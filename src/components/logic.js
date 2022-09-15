import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'



const fibonacci = require('../logicTesting/fibonacci/fibonacci')
const repeatedWords = require('../logicTesting/repeatedWords/repeatedWords')
const fizzbuzz = require('../logicTesting/fizzbuzz/fizzbuzz')

function Logic() {

  const navigate = useNavigate();

  const [calFibo, setCalFibo] = useState('')
  const fibo = (e) => {
    const resp = fibonacci(e).toString()
    setCalFibo(resp)
  }

  const [words, setWords] = useState('')
  const repeated = (e) => {
    const resp = JSON.stringify(repeatedWords(e))
    setWords(resp)
  }

  const [calFizzbuzz, setFizzbuzz] = useState('')
  const fizz = (e) => {
    const resp = fizzbuzz(e)
    setFizzbuzz(resp)
  }

  return (
    <div className="App">
      <div>
        <h1>Fibonacci</h1>
        <input type="text" id="fibonacci"  placeholder="write a number"/>
        <div>
          <button onClick={() => fibo(document.getElementById('fibonacci').value)}>Calculate Fibonacci</button>
        </div>
        <div> {calFibo} </div>
      </div>
      <div>
        <h1>Repeated Words</h1>
        <input type="text" id="repeated"  placeholder="write a phrase"/>
        <div>
          <button onClick={() => repeated(document.getElementById('repeated').value)}>Check Repeated Words</button>
        </div>
        <div> {words} </div>
      </div>
      <div>
        <h1>FizzBuzz</h1>
        <input type="text" id="fizzbuzz"  placeholder="write a phrase"/>
        <div>
          <button onClick={() => fizz(document.getElementById('fizzbuzz').value)}>Check Repeated Words</button>
        </div>
        <div> {calFizzbuzz} </div>
      </div>
      <div>
        <button onClick={()=>navigate("/dashboard")}>Dashboard</button>
		<button onClick={()=>navigate("/")}>Main menu</button>
      </div>
    </div>
  );
}

export default Logic;

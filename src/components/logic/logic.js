import React, { useState } from 'react';
import './logic.style.scss';
import Menu from '../menu/menu';
import fiboImg from '../../assets/icons/fibonacci.jpg';
import wordsImg from '../../assets/icons/words.jpg';
import fizzbuzzImg from '../../assets/icons/fizzbuzz.jpg'


const fibonacci = require('../../logicTesting/fibonacci/fibonacci')
const repeatedWords = require('../../logicTesting/repeatedWords/repeatedWords')
const fizzbuzz = require('../../logicTesting/fizzbuzz/fizzbuzz')

function Logic() {
  
  const [showFibo, setShowFibo] = useState("hidden");
  const [showWords, setShowWords] = useState("hidden");
  const [showFizz, setShowFizz] = useState("hidden");
  const [calFibo, setCalFibo] = useState('')

  const handleShowGames = (game) => {
    setWords(''); 
    setFizzbuzz('')
    setCalFibo('')
    
    if(game === "fibo") {
      setShowFibo("show")
      setShowWords("hidden")
      setShowFizz("hidden")
   

    }
    if(game === "words") {
      setShowFibo("hidden")
      setShowWords("show")
      setShowFizz("hidden")
    }
    if(game === "fizz") {
      setShowFibo("hidden")
      setShowWords("hidden")
      setShowFizz("show")
    }
  }
  
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
            <h1 onClick={() => handleShowGames("fibo")}>Fibonacci</h1>
            <img src={fiboImg} alt="Fibonacci" onClick={() => handleShowGames("fibo")}/>
          </div>       
          <div className='item'>
            <h1 onClick={() => handleShowGames("words")}>Repeated Words</h1>
            <img src={wordsImg} alt="Fibonacci" onClick={() => handleShowGames("words")}/>
          </div>
          <div className='item'>
            <h1 onClick={() => handleShowGames("fizz")}>FizzBuzz</h1>
            <img src={fizzbuzzImg} alt="Fibonacci" onClick={() => handleShowGames("fizz")}/>
          </div>
      </div>
      <div className='gameInputs'>
        <div  className={showFibo}>
          <input type="text" id="fibonacci"  placeholder="write a number"/>
          <button  onClick={() => fibo(document.getElementById('fibonacci').value)}>Calculate Fibonacci</button>
        </div>
        <div  className={showWords}>
          <textarea  id="repeated"  placeholder="write a phrase"/>
            <button className='words' onClick={() => repeated(document.getElementById('repeated').value)}>Check Repeated Words</button>
        </div>
        <div  className={showFizz}>
          <input type="text" id="fizzbuzz"  placeholder="insert a number"/>
            <button onClick={() => fizz(document.getElementById('fizzbuzz').value)}>Show FizzBuzz</button>
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

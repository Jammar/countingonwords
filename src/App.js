import React, { useState, useEffect } from 'react'
import Counts from './Counts'
import Footer from './Footer'

const App = () => {
  const [characters, setCharacters] = useState(0)
  const [words, setWords] = useState(0)
  const [textValue, setTextValue] = useState(
    'This should be 41 characters and 8 words.'
  )

  // lägg in callback...?
  useEffect(() => {
    setCharacters(textValue.length)
    setWords(countWords(textValue))
  }, [characters, words, textValue])

  const changed = event => {
    setTextValue(event.target.value)
  }

  function countWords(str) {
    return str.split(' ').filter(function(n) {
      return n !== ''
    }).length
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Counting onwords</h1>
        <Counts chars={characters} words={words} />
      </div>
      <textarea onChange={changed} type="text" text="" value={textValue} />
      <Footer />
    </div>
  )
}

export default App

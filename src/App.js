import React, { useState, useEffect } from 'react'
import Counts from './Counts'
import Footer from './Footer'

const App = () => {
  const [characters, setCharacters] = useState(0)
  const [words, setWords] = useState(0)
  const [textValue, setTextValue] = useState(
    'This should be 117 characters and 21 words. Paste your entire exam in here to make sure you fulfill the requirements!'
  )

  useEffect(() => {
    setCharacters(textValue.length)
    setWords(countWords(textValue))
  }, [textValue])

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
      <textarea
        onChange={changed}
        type="text"
        text=""
        value={textValue}
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
      />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'

export default function Key({
  letter,
  setOutput
}) {

  function handleKeyPress(e) {
    setOutput(oldArray => [...oldArray, e.key.toUpperCase()])
    console.log(e.key)
  }

  return (
    <div className='key' onKeyPress={(e) => console.log(e)} onClick={() => setOutput(oldArray => [...oldArray, letter])}>{letter}</div>
  )
}

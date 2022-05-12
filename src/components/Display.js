import React from 'react'

export default function Display({
  output,
  setOutput
}) {
  return (
    <div className='display'>{output}</div>
  )
}

import React, { useState, useEffect } from 'react'

import Key from './Key'

export default function Board() {
  const [output, setOutput] = useState([])

  return (
    <div className='board-container'>
      <div className='display'>{output}</div>
      <div className='board'>
        <Key
          letter={'A'}
          setOutput={setOutput}
        />
        <Key
          letter={'B'}
          setOutput={setOutput}
        />
        <Key
          letter={'C'}
          setOutput={setOutput}
        />
        <Key
          letter={'D'}
          setOutput={setOutput}
        />
        <Key
          letter={'E'}
          setOutput={setOutput}
        />
        <Key
          letter={'F'}
          setOutput={setOutput}
        />
        <Key
          letter={'G'}
          setOutput={setOutput}
        />
        <Key
          letter={'H'}
          setOutput={setOutput}
        />
        <Key
          letter={'I'}
          setOutput={setOutput}
        />
        <Key
          letter={'J'}
          setOutput={setOutput}
        />
        <Key
          letter={'K'}
          setOutput={setOutput}
        />
        <Key
          letter={'L'}
          setOutput={setOutput}
        />
        <Key
          letter={'M'}
          setOutput={setOutput}
        />
        <Key
          letter={'N'}
          setOutput={setOutput}
        />
        <Key
          letter={'O'}
          setOutput={setOutput}
        />
        <Key
          letter={'P'}
          setOutput={setOutput}
        />
        <Key
          letter={'Q'}
          setOutput={setOutput}
        />
        <Key
          letter={'R'}
          setOutput={setOutput}
        />
        <Key
          letter={'S'}
          setOutput={setOutput}
        />
        <Key
          letter={'T'}
          setOutput={setOutput}
        />
        <Key
          letter={'U'}
          setOutput={setOutput}
        />
        <Key
          letter={'V'}
          setOutput={setOutput}
        />
        <Key
          letter={'W'}
          setOutput={setOutput}
        />
        <Key
          letter={'X'}
          setOutput={setOutput}
        />
        <Key
          letter={'Y'}
          setOutput={setOutput}
        />
        <Key
          letter={'Z'}
          setOutput={setOutput}
        />
        <div className='spacebar' onClick={() => setOutput([...output, ' '])}>SPACE</div>
        <div className='backspace' onClick={() => setOutput([...output].slice(0, -1))}>&#8592;</div>
        <div className='enter'>&#8629;</div>
      </div>
    </div>
  )
}

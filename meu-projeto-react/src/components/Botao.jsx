import React from 'react'

function Botao({ text, fu }) {
  return (
    <button className='btn' onClick={fu}>{text}</button>
  )
}

export default Botao
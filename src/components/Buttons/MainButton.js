import React from 'react'

const MainButton = ({ onClick, type, style, text }) => (
  <button onClick={onClick} type={type} style={style}>
    {text}
  </button>
)

export default MainButton

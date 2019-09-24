import React from 'react'

const MainButton = ({ onClick, style, text, type }) => (
  <button onClick={onClick} type={type} style={style}>
    {text}
  </button>
)

export default MainButton

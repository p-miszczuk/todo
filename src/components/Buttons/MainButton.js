import React from 'react'

const MainButton = ({ onClick, style, text }) => (
  <button onClick={onClick} style={style}>
    {text}
  </button>
)

export default MainButton

import React from 'react'
import { Button } from 'react-bootstrap'

const MainButton = ({
  onClick,
  type,
  style,
  text,
  button = 'primary',
}) => (
  <Button
    onClick={onClick}
    type={type}
    style={style}
    variant={button}
  >
    {text}
  </Button>
)

export default MainButton

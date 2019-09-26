import React from 'react'
import { Button } from 'react-bootstrap'

const MainButton = ({
  onClick,
  type,
  text,
  button = 'primary',
  size = 'sm',
}) => (
  <Button onClick={onClick} type={type} variant={button} size={size}>
    {text}
  </Button>
)

export default MainButton

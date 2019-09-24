import React from 'react'

const Input = ({
  label,
  type,
  name,
  onChange,
  value,
  className,
  required = false,
}) => (
  <label>
    {type === 'text' && label}
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      required={required}
    />
    {type === 'radio' && label}
  </label>
)

export default Input

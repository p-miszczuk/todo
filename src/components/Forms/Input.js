import React from 'react'

const Input = ({
  label,
  type,
  name,
  onChange,
  value,
  className,
  checked,
  required = false,
  defaultChecked,
}) => (
  <label>
    {(type === 'text' || type === 'textarea') && label}
    {type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        required={required}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        defaultChecked={!!defaultChecked}
        onChange={onChange}
        className={className}
        checked={checked}
        required={required}
      />
    )}
    {type === 'radio' && label}
  </label>
)

export default Input

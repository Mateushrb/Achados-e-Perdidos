import React from 'react'
import './InputStyles.css'


const Input = ({ label, name, type, value, onChange, error, onBlur }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input className='input__container'
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur} />
      {error && <p className='input__error'>{error}</p>}
    </div>
  )
}

export default Input

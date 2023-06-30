import React from 'react'
import './InputSearch'

const InputSearch = ({ label, name, type, value, onChange, error, onBlur, placeholder }) => {
  return (
    <div>
      <input className='input__container'
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder} />
      {error && <p className='input__error'>{error}</p>}
    </div>
  )
}

export default InputSearch
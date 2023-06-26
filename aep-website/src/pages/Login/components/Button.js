import React from 'react'
import './ButtonStyles.css'

const Button = ({ children, ...props}) => {
  return (
    <button className='button__container' {...props} >{children}</button>
  )
}

export default Button

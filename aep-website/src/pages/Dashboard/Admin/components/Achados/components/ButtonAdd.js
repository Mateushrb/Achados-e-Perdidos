import React from 'react'

const ButtonAdd = ({ children, ...props}) => {
  return (
    <button className='button__container' {...props} >{children}</button>
  )
}

export default ButtonAdd

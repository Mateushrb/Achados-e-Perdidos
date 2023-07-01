import React from 'react'

const ModalCadastrarPerdidos = ( { closeModal, children }) => {

  return (
    <div className="modal__table">
      <div className="modal__content">
        {children}
      </div>
    </div>
  )
}

export default ModalCadastrarPerdidos
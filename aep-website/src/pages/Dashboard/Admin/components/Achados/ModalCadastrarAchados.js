import React from 'react'

const ModalCadastrarAchados = ( { closeModal, children }) => {

  return (
    <div className="modal__table">
      <div className="modal__content">
        {children}
      </div>
    </div>
  )
}

export default ModalCadastrarAchados
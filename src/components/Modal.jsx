import { useState } from 'react'

import CloseModalIcon from '../img/close.svg'

function Modal( { setModal, animateModal, setAnimateModal } ) {

  const hideModal = () => {
    setAnimateModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  return (
    <div
      className="modal"
    >
      <div className="close-modal">
        <img 
          src={ CloseModalIcon }
          alt="Close Modal Icon"
          onClick={ hideModal }
        />
      </div>

      <form
        className={`form ${animateModal ? 'animate' : 'close'}`}
      >
        <legend>New Budget</legend>
      </form>

    </div>
  )
}

export default Modal

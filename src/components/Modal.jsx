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
    <div className="modal">
      <div className="close-modal">
        <img 
          src={ CloseModalIcon }
          alt="Close Modal Icon"
          onClick={ hideModal }
        />
      </div>

      <form className={`form ${animateModal ? 'animate' : 'close'}`}>
        <legend>New Budget</legend>

        <div className="field">
          <label htmlFor="budget-name">Budget name</label>
          <input
            id="budget-name"
            type="text"
            placeholder="Enter the budget name"
          />
        </div>

        <div className="field">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter the budget amount"
          />
        </div>

        <div className="field">
          <label htmlFor="category">Category</label>
          <select id="category">
            <option value="">-- Select one --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="various-expenses">Various expenses</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>

        <input 
          type="submit"
          value="Add Budget"
        />

      </form>

    </div>
  )
}

export default Modal

import { useState } from 'react'

import Message from '../components/Message'
import CloseModalIcon from '../img/close.svg'

function Modal( { 
  setModal, 
  animateModal, 
  setAnimateModal,
  addBudget
} ) {

  const [message, setMessage] = useState('')

  const [budgetName, setBudgetname] = useState('')
  const [budgetAmount, setBudgetamount] = useState('')
  const [budgetCategory, setBudgetCategory] = useState('')

  const hideModal = () => {
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if( [budgetName, budgetAmount, budgetCategory].includes('') ){
      setMessage('Please fill all the fields!')

      setTimeout(() => {
        setMessage('')
      }, 3000)
      return
    }

    addBudget({
      name: budgetName,
      amount: budgetAmount,
      category: budgetCategory
    })

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

      <form 
        className={`form ${animateModal ? 'animate' : 'close'}`}
        onSubmit={ handleSubmit }
      >
        <legend>New Budget</legend>

        { message && <Message type="error">{ message }</Message> }

        <div className="field">
          <label htmlFor="budget-name">Budget name</label>
          <input
            id="budget-name"
            type="text"
            placeholder="Enter the budget name"
            value={ budgetName }
            onChange={ (e) => setBudgetname(e.target.value) }
          />
        </div>

        <div className="field">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter the budget amount"
            value={ budgetAmount }
            onChange={ (e) => setBudgetamount(Number(e.target.value)) }
          />
        </div>

        <div className="field">
          <label htmlFor="category">Category</label>
          <select 
            id="category"
            value={ budgetCategory }
            onChange={ (e) => setBudgetCategory(e.target.value)}
          >
            <option value="">-- Select one --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="various">Various expenses</option>
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

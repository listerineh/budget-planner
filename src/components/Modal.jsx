import { object } from 'prop-types'
import { useState, useEffect } from 'react'

import Message from '../components/Message'
import CloseModalIcon from '../img/close.svg'

function Modal( { 
  setModal, 
  animateModal, 
  setAnimateModal,
  addExpense,
  editExpense,
  setEditExpense
} ) {

  const [message, setMessage] = useState('')

  const [budgetName, setBudgetName] = useState('')
  const [budgetAmount, setBudgetAmount] = useState('')
  const [budgetCategory, setBudgetCategory] = useState('')
  const [budgetDate, setBudgetDate] = useState('')
  const [budgetId, setBudgetId] = useState('')

  useEffect( () => {
    if( Object.keys(editExpense).length > 0 ) {
      setBudgetName(editExpense.name)
      setBudgetAmount(editExpense.amount)
      setBudgetCategory(editExpense.category)
      setBudgetDate(editExpense.date)
      setBudgetId(editExpense.id)
    }
  }, [])

  const hideModal = () => {
    setAnimateModal(false)
    setEditExpense({})
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

    addExpense({
      name: budgetName,
      amount: budgetAmount,
      category: budgetCategory,
      date: budgetDate,
      id: budgetId
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
        <legend>{editExpense.name ? 'Edit Expense' : 'New Expense'}</legend>

        { message && <Message type="error">{ message }</Message> }

        <div className="field">
          <label htmlFor="budget-name">Budget name</label>
          <input
            id="budget-name"
            type="text"
            placeholder="Enter the budget name"
            value={ budgetName }
            onChange={ (e) => setBudgetName(e.target.value) }
          />
        </div>

        <div className="field">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter the budget amount"
            value={ budgetAmount }
            onChange={ (e) => setBudgetAmount(Number(e.target.value)) }
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
          value={ editExpense.name ? 'Save changes': 'Add Budget' }
        />

      </form>

    </div>
  )
}

export default Modal

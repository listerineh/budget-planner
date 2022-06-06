import { useState, useEffect } from 'react'

import Header from './components/Header'
import Listing from './components/Listing'
import Modal from './components/Modal'

import { generateId } from './helpers'
import NewExpenseIcon from './img/new_expense.svg'

function App() {

  const [expenses, setExpenses] = useState([])

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [editExpense, setEditExpense] = useState({})

  useEffect(() => {
    if( Object.keys(editExpense).length > 0 ) {
      setModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      }, 500)
    }
  }, [editExpense])

  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})
    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const addExpense = (expense) => {
    if( expense.id ) {
      const updatedExpenses = expenses.map( state => state.id === expense.id ? expense : state)
      setExpenses(updatedExpenses)
    } else {
      expense.id = generateId()
      expense.date = Date.now()
      setExpenses([...expenses, expense])
      setEditExpense({})
    }

    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter( expense => expense.id !== id)
    setExpenses(updatedExpenses)
  }

  return (
    <div className={ modal ? 'pinup' : '' }>
      <Header 
        expenses={ expenses }
        budget={ budget }
        isValidBudget={ isValidBudget }
        setBudget={ setBudget }
        setIsValidBudget={ setIsValidBudget }
      />

      {
        isValidBudget &&
        (
          <>
            <main>
              <Listing 
                expenses={ expenses }
                setEditExpense={ setEditExpense }
                deleteExpense={ deleteExpense }
              />
            </main>
            <div className="new-expense">
              <img 
                src={ NewExpenseIcon }
                alt='New Expense Icon'
                onClick={ handleNewExpense }
              />
            </div>
          </>
        )
      }

      {
        modal && 
        (
          <Modal
            setModal={ setModal }
            animateModal={ animateModal }
            setAnimateModal={ setAnimateModal }
            addExpense={ addExpense }
            editExpense={ editExpense }
            setEditExpense={ setEditExpense }
          />
        )
      }

    </div>
  )
}

export default App

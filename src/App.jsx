import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Header from './components/Header'
import Listing from './components/Listing'
import Modal from './components/Modal'

import { generateId } from './helpers'
import NewExpenseIcon from './img/new_expense.svg'

function App() {

  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  )

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  )

  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [editExpense, setEditExpense] = useState({})

  const [filter, setFilter] = useState('')
  const [filteredExpenses, setFilteredExpenses] = useState([])

  useEffect(() => {
    if( Object.keys(editExpense).length > 0 ) {
      setModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      }, 500)
    }
  }, [editExpense])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])

  useEffect(() => {
    const localStorageBudget = Number(localStorage.getItem('budget'))

    if( localStorageBudget > 0 ) {
      setIsValidBudget(true)
    }
  }, [])

  useEffect(() => {
    if( filter ) {
      const _filteredExpenses = expenses.filter(expense => expense.category === filter)
      setFilteredExpenses(_filteredExpenses)
    }
  }, [filter])

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
              <Filter 
                filter={ filter }
                setFilter={ setFilter }
              />
              <Listing 
                expenses={ expenses }
                setEditExpense={ setEditExpense }
                deleteExpense={ deleteExpense }
                filter={ filter }
                filteredExpenses={ filteredExpenses }
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

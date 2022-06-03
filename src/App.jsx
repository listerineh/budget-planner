import { useState } from 'react'

import Header from './components/Header'
import Listing from './components/Listing'
import Modal from './components/Modal'

import { generateId } from './helpers'
import NewExpenseIcon from './img/new_expense.svg'

function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [expenses, setExpenses] = useState([])

  const handleNewExpense = () => {
    setModal(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const addBudget = (objBudget) => {
    objBudget.id = generateId()
    objBudget.date = Date.now()
    setExpenses([...expenses, objBudget])

    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  return (
    <div>
      <Header 
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
            addBudget={ addBudget }
          />
        )
      }

    </div>
  )
}

export default App

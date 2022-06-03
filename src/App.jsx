import { useState } from 'react'

import Header from './components/Header'
import NewExpenseIcon from './img/new_expense.svg'

function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  return (
    <div>
      <Header 
        budget={ budget }
        isValidBudget={ isValidBudget }
        setBudget={ setBudget }
        setIsValidBudget={ setIsValidBudget }
      />

      {
        isValidBudget ?
        (
          <div
            className="new-expense"
          >
            <img 
              src={ NewExpenseIcon }
              alt='New Expense Icon'
            />
          </div>
        )
        : null
      }
    </div>
  )
}

export default App

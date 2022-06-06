import { useState, useEffect } from "react";

function BudgetAdmin( { budget, expenses } ) {

  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)

  useEffect(() => {
    const totalSpent = expenses.reduce( (total, expense) => expense.amount + total, 0 )
    const totalAvailable = budget - totalSpent

    setSpent(totalSpent)
    setAvailable(totalAvailable)
  }, [expenses])

  const formatBudget = ( value ) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }
  
  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <p>Graphics</p>
      </div>

      <div className="content-budget">
        <p>
          <span>Budget: </span> { formatBudget(budget) }
        </p>

        <p>
          <span>Available: </span> { formatBudget(available) }
        </p>

        <p>
          <span>Spent: </span> { formatBudget(spent) }
        </p>

      </div>
    </div>
  )
}

export default BudgetAdmin

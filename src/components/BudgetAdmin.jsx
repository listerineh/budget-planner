import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function BudgetAdmin( { budget, expenses } ) {

  const [percent, setPercent] = useState(0)
  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)

  useEffect(() => {
    const totalSpent = expenses.reduce( (total, expense) => expense.amount + total, 0 )
    const totalAvailable = budget - totalSpent

    const newPercent = (((budget - totalAvailable) / budget) * 100 ).toFixed(2)

    setSpent(totalSpent)
    setAvailable(totalAvailable)

    setTimeout(() => {
      setPercent(newPercent)
    }, 1500)
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
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#205f0d',
            trailColor: '#f5f5f5',
            textColor: '#205f0d',
          })}
          value={ percent }
          text={`${percent}% spent`}
        />
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

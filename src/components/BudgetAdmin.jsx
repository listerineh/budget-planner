import { useState } from "react";

function BudgetAdmin( { budget } ) {

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
          <span>Available: </span> { formatBudget(0) }
        </p>

        <p>
          <span>Spent: </span> { formatBudget(0) }
        </p>

      </div>
    </div>
  )
}

export default BudgetAdmin

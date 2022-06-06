import { useState } from "react"

import Expense from "./Expense"

function Listing({ expenses, setEditExpense, deleteExpense }) {

  return (
    <div className="listing-expenses container">
      <h2>{expenses.length ? "Expenses" : "There are no expenses yet :)"}</h2>

      {expenses.map( (expense) => (
        <Expense 
          key={ expense.id }
          expense={ expense }
          setEditExpense={ setEditExpense }
          deleteExpense={ deleteExpense }
        />
      ))}
    </div>
  )
}

export default Listing

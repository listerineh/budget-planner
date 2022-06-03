import NewBudget from "./NewBudget"
import BudgetAdmin from "./BudgetAdmin"

function Header({ 
  budget, 
  isValidBudget, 
  setBudget, 
  setIsValidBudget }) {

  return (
    <header>
      <h1>Budget Planner</h1>

      { 
        isValidBudget ? 
        (
          <BudgetAdmin 
            budget={ budget }
          />
        ) 
        : 
        (
          <NewBudget 
            budget={ budget } 
            setBudget={ setBudget } 
            setIsValidBudget={ setIsValidBudget }
          />
        ) 
      }

    </header>
  )
}

export default Header

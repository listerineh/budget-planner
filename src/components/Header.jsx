import NewBudget from "./NewBudget"
import BudgetAdmin from "./BudgetAdmin"

function Header({ 
  expenses,
  setExpenses,
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget }) {

  return (
    <header>
      <h1>iTeam <span style={{ color: "#2567F9"}}>Jobs</span></h1>

      { 
        isValidBudget ? 
        (
          <BudgetAdmin 
            budget={ budget }
            setBudget={ setBudget }
            expenses={ expenses }
            setExpenses={ setExpenses }
            setIsValidBudget={ setIsValidBudget }
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

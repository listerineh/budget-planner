import NewBudget from "./NewBudget";

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
          <p>Budget Administration</p>
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

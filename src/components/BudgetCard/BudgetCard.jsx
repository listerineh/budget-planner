import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import Elipse from '../icons/Elipse'
import './BudgetCard.css'

const BudgetCard = ({budget, expensesValue, savingsValue, investmentsValue}) => {
  const getPercentage = (value) => {
    return value * 100 / budget
  }

  return (
    <div className='budget-card-container'>
      <div className='budget-card-text-layout'>
        <p>Presupuesto</p>
        <p>$ {budget}</p>
      </div>

      <div className='budget-card-bar-container'>
        <div className='budget-card-bar'>
          <CircularProgressbarWithChildren
            value={getPercentage(investmentsValue + savingsValue + expensesValue)}
            strokeWidth={12}
            styles={buildStyles({
              pathColor: "#FF3C82",
              trailColor: "#eee",
            })}
          >
            <CircularProgressbarWithChildren
              value={getPercentage(savingsValue + expensesValue)}
              strokeWidth={12}
              styles={buildStyles({
                pathColor: "#8F3CFF",
                trailColor: "transparent",
              })}
            >
              <CircularProgressbarWithChildren
                value={getPercentage(expensesValue)}
                strokeWidth={12}
                styles={buildStyles({
                  pathColor: "#FF2567F93C82",
                  trailColor: "transparent",
                })}
              >
                <h3 className='budget-card-percentage'>{`${getPercentage(investmentsValue + expensesValue + savingsValue)}%`}</h3>
              </CircularProgressbarWithChildren>
            </CircularProgressbarWithChildren>
          </CircularProgressbarWithChildren>
        </div>
      </div>

      <div className='budget-card-text-layout'>
        <p><Elipse color="#2567F9"/> Inversion</p>
        <p>$ {investmentsValue}</p>
      </div>
      <div className='budget-card-text-layout'>
        <p><Elipse color="#8F3CFF"/> Ahorro</p>
        <p>$ {savingsValue}</p>
      </div>
      <div className='budget-card-text-layout'>
        <p><Elipse color="#FF3C82"/> Gastos</p>
        <p>$ {expensesValue}</p>
      </div>
    </div>
  )
}

export default BudgetCard

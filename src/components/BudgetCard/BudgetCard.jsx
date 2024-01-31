import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import Elipse from '../icons/Elipse'
import './BudgetCard.css'

const BudgetCard = () => {
  return (
    <div className='budget-card-container'>
      <div className='budget-card-text-layout'>
        <p>Presupuesto</p>
        <p>$ 2,000</p>
      </div>

      <div className='budget-card-bar-container'>
        <div className='budget-card-bar'>
          <CircularProgressbarWithChildren
            value={84}
            strokeWidth={12}
            styles={buildStyles({
              pathColor: "#FF3C82",
              trailColor: "#eee",
            })}
          >
            <CircularProgressbarWithChildren
              value={70}
              strokeWidth={12}
              styles={buildStyles({
                pathColor: "#8F3CFF",
                trailColor: "transparent",
              })}
            >
              <CircularProgressbarWithChildren
                value={50}
                strokeWidth={12}
                styles={buildStyles({
                  pathColor: "#FF2567F93C82",
                  trailColor: "transparent",
                })}
              >
                <h3 className='budget-card-percentage'>{`${84}%`}</h3>
              </CircularProgressbarWithChildren>
            </CircularProgressbarWithChildren>
          </CircularProgressbarWithChildren>
        </div>
      </div>

      <div className='budget-card-text-layout'>
        <p><Elipse color="#2567F9"/> Inversion</p>
        <p>$ 1,753.92</p>
      </div>
      <div className='budget-card-text-layout'>
        <p><Elipse color="#8F3CFF"/> Ahorro</p>
        <p>$ 1,019.68</p>
      </div>
      <div className='budget-card-text-layout'>
        <p><Elipse color="#FF3C82"/> Gastos</p>
        <p>$ 952.68</p>
      </div>
    </div>
  )
}

export default BudgetCard

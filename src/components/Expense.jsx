import { 
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
 } from 'react-swipeable-list'
 import 'react-swipeable-list/dist/styles.css'

import { useState } from 'react'

import { getFormatedDate } from '../helpers'
import SavindIcon from '../img/icon_saving.svg'
import HomeIcon from '../img/icon_home.svg'
import FoodIcon from '../img/icon_food.svg'
import ExpensesIcon from '../img/icon_expenses.svg'
import LeisureIcon from '../img/icon_leisure.svg'
import HealthIcon from '../img/icon_health.svg'
import SubsIcon from '../img/icon_subs.svg'

const iconDictionary = {
  saving        : SavindIcon,
  food          : FoodIcon,
  home          : HomeIcon,
  various       : ExpensesIcon,
  leisure       : LeisureIcon,
  health        : HealthIcon,
  subscriptions : SubsIcon,
}

function Expense( { expense, setEditExpense, deleteExpense }) {

  const { category, name, amount, date, id } = expense

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={ () => setEditExpense(expense) }
      >
        Edit
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={ () => deleteExpense(id) }
        destructive={ true }
      >
        Delete
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={ leadingActions() }
        trailingActions={ trailingActions() }
      >
        <div className="expense shadow">

          <div className="content-expense">

            <img 
              src={ iconDictionary[category] }
              alt="Expense Icon"
            />

            <div className="description-expense">
              <p className="category">{ category }</p>
              <p className="name-expense">{ name }</p>
              <p className="date-expense">
                Added on {''}
                <span>
                  { getFormatedDate(date) }
                </span>
              </p>
            </div>
          </div>

          <p className="amount-expense">${ amount }</p>

        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense

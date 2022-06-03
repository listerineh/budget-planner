import { useState } from 'react'

import Message from './Message'

function NewBudget( { budget, setBudget } ) {

  const [message, setMessage] = useState('')

  const handleBudget = (e) => {
    e.preventDefault()

    if(!Number(budget) || Number(budget) < 0) {
      setMessage('Invalid budget!')
    } else {
      setMessage('')
    }
  }

  return (
    <div 
      className="container-budget container shadow"
    >
      <form 
        className="form"
        onSubmit={ handleBudget }
      >
        <div 
          className="field"
        >
          <label>Define Budget</label>
          <input 
            className="new-budget"
            type="text"
            placeholder="Enter your budget"
            value={ budget }
            onChange={ (e) => setBudget(e.target.value) }
          />
        </div>

        <input 
          type="submit"
          value="Enter"
        />

        { 
          message && 
          <Message
            type="error"
          >
            {message}
          </Message> 
        }

      </form>
    </div>
  )
}

export default NewBudget

import { useState } from 'react'

import Message from './Message'

function NewBudget( { 
  budget, 
  setBudget, 
  setIsValidBudget
} ) {

  const [message, setMessage] = useState('')

  const handleBudget = (e) => {
    e.preventDefault()

    if( !budget || budget < 0 ) {
      setMessage('Invalid budget!')
      return
    }

    setMessage('')
    setIsValidBudget(true)

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
            type="number"
            placeholder="Enter your budget"
            value={ budget }
            onChange={ (e) => setBudget(Number(e.target.value)) }
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

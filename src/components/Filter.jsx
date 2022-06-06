import { useState, useEffect } from 'react'

function Filter( { filter, setFilter } ) {

  return (
    <div className='filters shadow container'>
      <form>
        <div className='field'>
          <label>Apply filter</label>
          <select
            value={ filter }
            onChange={ (e) => setFilter(e.target.value) }
          >
            <option value="">All categories</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="various">Various expenses</option>
            <option value="leisure">Leisure</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filter

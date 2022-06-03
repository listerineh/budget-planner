function NewBudget() {

  return (
    <div className="container-budget container shadow">
      <form className="form">
        <div className="field">
          <label>Define Budget</label>
          <input 
            className="new-budget"
            type="text"
            placeholder="Enter your budget"
          />
        </div>

        <input 
          type="submit"
          value="Enter"
        />
      </form>
    </div>
  )
}

export default NewBudget

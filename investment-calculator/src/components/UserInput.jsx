// import {useState} from 'react'

export default function UserInput({userInputs, onCalculate}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input 
            type="number" 
            id="initial-investment" 
            value={userInputs.initialInvestment}
            required 
            onChange={(event) => onCalculate('initialInvestment', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input 
            type="number" 
            id="annual-investment" 
            value={userInputs.annualInvestment}
            required 
            onChange={(event) => onCalculate('annualInvestment', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input 
            type="number" 
            id="expected-return" 
            value={userInputs.expectedReturn}
            required 
            onChange={(event) => onCalculate('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input 
            type="number" 
            id="duration"
            value={userInputs.duration} 
            required 
            onChange={(event) => onCalculate('duration', event.target.value)}  
          />
        </p>
      </div>
    </section>
  )
}

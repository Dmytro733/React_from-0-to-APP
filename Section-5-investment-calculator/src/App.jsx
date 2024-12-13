import {useState} from 'react'
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

const USER_INPUTS = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [userInputs, setUsetInputs] = useState(USER_INPUTS);
  const isValidInput = userInputs.duration >= 1;

  function handleCalculate(inputIdentefier, newValue) {
    setUsetInputs(previusUserInput => {
      return {
        ...previusUserInput,
        [inputIdentefier]: +newValue
      }
    })
  }

  return (
    <div>
      <Header />
      <UserInput 
        userInputs={userInputs} 
        onCalculate={handleCalculate} 
      />
      {!isValidInput && <p className='center'>Please enter a duration greater than zero</p>}
      {isValidInput && <Results inputs={userInputs} />}
    </div>
  )
}

export default App

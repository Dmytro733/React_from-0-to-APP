import { useState } from 'react';

import { StyledControlContainer, TextButton, RectangleButton } from './general-styled-components';
import Input from './Input';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <StyledControlContainer>
        <Input
          label="Email"
          type="email"
          $invalid={emailNotValid}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />

        <Input
          label="Password"
          type="password"
          $invalid={passwordNotValid}
          onChange={(event) => handleInputChange('password', event.target.value)}
        />
      </StyledControlContainer>
      <div className="actions">
        <TextButton type="button" className="text-button">
          Create a new account
        </TextButton>
        <RectangleButton className='button' onClick={handleLogin}>Sign In</RectangleButton>
      </div>
    </div>
  );
}

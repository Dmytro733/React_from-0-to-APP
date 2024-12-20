import { useState } from 'react';
import { styled } from 'styled-components'

import Input from './Input';
import Button from './Button';

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
    <div id="auth-inputs" className='w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800 '>
      <div className="flex flex-col gap-2 mb-5">
        <Input
          label="Email"
          type="email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange('email', event.target.value)}
        />

        <Input
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) => handleInputChange('password', event.target.value)}
        />
      </div>
      <div className="flex justify-end gap-4">
        <Button type="button" viewAs="secondary" className="">
          Create a new account
        </Button>
        <Button className='button' viewAs="primary" onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

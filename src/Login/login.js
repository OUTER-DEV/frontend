import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./login.css"
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [pin, setPin] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePinChange = (e) => {
    const inputPin = e.target.value;
    if (/^\d{0,4}$/.test(inputPin)) {
      setPin(inputPin);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pin.length === 4) {
      
/**
 * data posting
 */

      /*try {
        const user = await login(email, password);
        console.log('Connexion réussie:', user);

        history.push('/main');
      } catch (error) {
        console.error('Erreur:', error);
      }*/
      history.push('/main');
      window.location.reload();
    } else {
      console.error('Le PIN doit contenir exactement 4 chiffres.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen">
      <div className='_mainContainer'>
        <div className="flex flex-cole">
          <label className='_icon'>
            <FaUser/>
          </label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleUserNameChange}
            className="_input"
            placeholder='Username'
          />
        </div>
        <div className="flex flex-cole">
          <label className='_icon'>
            <FaLock/>
          </label>
          <input
            type="text"
            id="pin"
            value={pin}
            onChange={handlePinChange}
            className="_input"
            placeholder='PIN (4 digits)'
            maxLength={4}
          />
        </div>
        <button
          type="submit"
          className="_button"
        >
          Se connecter
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
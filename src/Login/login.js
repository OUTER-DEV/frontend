import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./login.css"
import { FaUser, FaLock } from 'react-icons/fa';



const LoginForm = () => {
  const history = useHistory();
  const [userName, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*try {
      const user = await login(email, password);
      console.log('Connexion réussie:', user);

      history.push('/main');
    } catch (error) {
      console.error('Erreur:', error);
    }*/
    history.push('/main');
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen">
      <div className='_mainContainer'>
<div className="flex flex-cole ">
  <label className='_icon'>
    <FaUser/>
  </label>

      <input
        type="text"
        id="userName"
        value={userName}
        onChange={handleEmailChange}
        className="_input"
        placeholder='Username'
      />
    </div>
    <div className="flex flex-cole">
      <label className='_icon'>
        <FaLock/>
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        className="_input"
        placeholder='Password'
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
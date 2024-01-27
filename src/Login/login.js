import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login, update } from '../api/api_login';

const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
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
    <form onSubmit={handleSubmit} className="">
    <div className="">
      <label htmlFor="email" className="">
        Email:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        className=""
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="">
        Mot de passe:
      </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        className=""
      />
    </div>
    <button
      type="submit"
      className=""
    >
      Se connecter
    </button>
  </form>
  );
};

export default LoginForm;
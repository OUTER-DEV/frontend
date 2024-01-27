import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';
import Loading from '../components/loading';
import { FaUser, FaLock } from 'react-icons/fa';
import MainPage from '../Main/main';

const LoginForm = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

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
    setButtonClicked(true);
    e.preventDefault();

    if (pin.length === 4) {
      setLoading(true);
      /**
       * Data posting
       */
      /*try {
        const user = await login(email, password);
        console.log('Connexion réussie:', user);

        setLoading(false);
        history.push('/main');
      } catch (error) {
        console.error('Erreur:', error);
        setLoading(false);
      }*/

      setTimeout(() => {
        setLoading(false);
        history.push('/main');
      }, 2000);
    } else {
      console.error('Le PIN doit contenir exactement 4 chiffres!');
    }
  };

  return (
    <>
      {buttonClicked ? (
        loading ? (
          <Loading />
        ) : (
          <MainPage />
        )
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <div className="_mainContainer">
            <div className="flex flex-cole">
              <label className="flex justify-center items-center h-full sm:w-10 _icon">
                <FaUser />
              </label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={handleUserNameChange}
                className="_input"
                placeholder="Username"
              />
            </div>
            <div className="flex flex-cole">
              <label className="flex justify-center items-center h-full sm:w-10 _icon">
                <FaLock />
              </label>
              <input
                type="text"
                id="pin"
                value={pin}
                onChange={handlePinChange}
                className="_input"
                placeholder="PIN (4 digits)"
                maxLength={4}
              />
            </div>
            <button type="submit" className="_button">
              Connect
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default LoginForm;
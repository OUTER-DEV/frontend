import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './login.css';
import Loading from '../components/loading';
import { FaUser, FaLock } from 'react-icons/fa';
import MainPage from '../Main/main';
import Form from '../components/form';

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

      // Simulating a loading state
      setTimeout(() => {
        setLoading(false);
        history.push('/main');
      }, 2000);
    } else {
      console.error('Le PIN doit contenir exactement 4 chiffres!');
    }
  };

  const renderContent = () => {
    if (buttonClicked) {
      if (loading) {
        return <Loading />;
      } else {
        return <MainPage />;
      }
    } else {
      return (
        <>
        <Form
          onSubmit={handleSubmit}
          buttonText="Connect"
          fields={[
            {
              id: 'userName',
              type: 'text',
              value: userName,
              onChange: handleUserNameChange,
              placeholder: 'Username',
              icon: <FaUser />,
            },
            {
              id: 'pin',
              type: 'text',
              value: pin,
              onChange: handlePinChange,
              placeholder: 'PIN (4 digits)',
              maxLength: 4,
              icon: <FaLock />,
            },
          ]}
          buttonDisabled={pin.length !== 4}
        >
          
        </Form>
        <div className="mt-4">
            <p className="text-center test">
              Pas encore inscrit ? <Link to="/register">S'inscrire</Link>
            </p>
          </div>
        </>
      );
    }
  };

  return <>{renderContent()}</>;
};

export default LoginForm;
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';
import Loading from '../components/loading';
import { FaUser, FaLock } from 'react-icons/fa';
import MainPage from '../Main/main';
import Form from '../components/form';
import { login } from '../api/api_login';

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

      try {
        const responseData = await login(userName, pin);
        setUserName(responseData.user);
        setTimeout(() => {
          setLoading(false);
          history.push('/main');
        }, 2000);
      } catch (error) {
        console.error('Error during login:', error.message);
        setLoading(false); 
      }
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
                type: 'number',
                value: pin,
                onChange: handlePinChange,
                placeholder: 'PIN (4 digits)',
                maxLength: 4,
                icon: <FaLock />,
              },
            ]}
            buttonDisabled={pin.length !== 4}
            customDiv={
              <div className="mt-4 i">
                <p className="text-center test">
                  Pas encore inscrit ?{' '}
                  <span
                    onClick={() => {
                      history.push("/register")
                      window.location.reload();
                    }}
                    style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
                  >
                    S'inscrire
                  </span>
                </p>
              </div>
            }
          />

        </>
      
      );
    }
  };
    return <>{renderContent()}</>;
};

export default LoginForm;

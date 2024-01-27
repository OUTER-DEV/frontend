import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './login.css';
import Loading from '../components/loading';
import { FaUser, FaLock } from 'react-icons/fa';
import MainPage from '../Main/main';
import Form from '../components/form';
import { createAccount } from '../api/api_sign_up';

const RegisterForm = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handlePinChange = (e) => {
    const inputPin = e.target.value;
    if (/^\d{0,4}$/.test(inputPin)) {
      setPin(inputPin);
    }
  };

  const handleConfirmPinChange = (e) => {
    const inputConfirmPin = e.target.value;
    if (/^\d{0,4}$/.test(inputConfirmPin)) {
      setConfirmPin(inputConfirmPin);
    }
  };

  const handleSubmit = async (e) => {
    setButtonClicked(true);
    e.preventDefault();

    if (pin.length === 4 && pin === confirmPin) {
      setLoading(true);
  
      try {
        await createAccount(userName, firstName, lastName, pin, confirmPin);

        setTimeout(() => {
          setLoading(false);
          history.push('/main');
        }, 2000);
      } catch (error) {
        console.error('Erreur lors de la création du compte:', error.message);
        setLoading(false);
      }
    } else {
      console.error('Le PIN doit contenir exactement 4 chiffres et les deux PIN doivent correspondre !');
    }
  };;

  let content;
  if (buttonClicked) {
    if (loading) {
      content = <Loading />;
    } else {
      content = <MainPage />;
    }
  } else {
    content = (
      <Form
        onSubmit={handleSubmit}
        buttonText="Register"
        fields={[
          {
            id: 'username',
            type: 'text',
            value: userName,
            onChange: handleUserNameChange,
            placeholder: "User name",
            icon: <FaUser />,
          }, {
            id: 'firstname',
            type: 'text',
            value: firstName,
            onChange: handleFirstNameChange,
            placeholder: "First Name",
            icon: <FaUser />,
          }, {
            id: 'lastname',
            type: 'text',
            value: lastName,
            onChange: handleLastNameChange,
            placeholder: "Last name",
            icon: <FaUser />,
          },
          {
            id: 'pin',
            type: 'password',
            value: pin,
            onChange: handlePinChange,
            placeholder: 'PIN',
            icon: <FaLock />,
          },
          {
            id: 'confirmPin',
            type: 'password',
            value: confirmPin,
            onChange: handleConfirmPinChange,
            placeholder: 'Confirmez le PIN',
            icon: <FaLock />,
          },
        ]}
        customDiv={
          <div className="mt-4">
            <p className="text-center test">
              Déjà inscrit ?{' '}
              <span
                onClick={() => {
                  history.push('/login');
                  window.location.reload();
                }}
                style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}
              >
                Se connecter
              </span>
            </p>
          </div>
        }
      />
    );
  }

  return <>{content}</>;
};

export default RegisterForm;
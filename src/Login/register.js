import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './login.css';
import Loading from '../components/loading';
import { FaUser, FaLock } from 'react-icons/fa';
import MainPage from '../Main/main';
import Form from '../components/form';

const RegisterForm = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
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

      // Simulating a loading state
      setTimeout(() => {
        setLoading(false);
        history.push('/main');
      }, 2000);
    } else {
      console.error(
        'Le PIN doit contenir exactement 4 chiffres et les deux PIN doivent correspondre !'
      );
    }
  };

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
            id: 'userName',
            type: 'text',
            value: userName,
            onChange: handleUserNameChange,
            placeholder: "Nom d'utilisateur",
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
          <div>
            <h2>Inscription</h2>
            <p className='test'>
              Déjà inscrit ? <Link to="/login">Se connecter</Link>
            </p>
          </div>
        }
      />
    );
  }

  return <>{content}</>;
};

export default RegisterForm;
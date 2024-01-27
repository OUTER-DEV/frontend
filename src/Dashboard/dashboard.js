import React, { useState } from 'react';

const MessageA = () => {
  return <p>Hello from A</p>;
};

const MessageB = () => {
  return <p>Hello from B</p>;
};

const Dashboard = () => {
  const [message, setMessage] = useState('');

  const handleClickA = () => {
    setMessage('A');
  };

  const handleClickB = () => {
    setMessage('B');
  };

  return (
    <div>
      <h1>Tableau de bord</h1>
      <button onClick={handleClickA}>Cliquez pour A</button>
      <button onClick={handleClickB}>Cliquez pour B</button>
      {message === 'A' && <MessageA />}
      {message === 'B' && <MessageB />}
    </div>
  );
};

export default Dashboard;
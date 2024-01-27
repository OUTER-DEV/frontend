import React, { useState } from 'react';
import "./dashboard.css"
import { FaHome, FaPlus } from 'react-icons/fa';


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
    <div className=' _container'>
      <div className='left'>
        <h1 className=''>Tableau de bord</h1>
        <div className='btn_cnt'>
          <div className='cont-btn'>
               <label className='icon'><FaHome/></label>
             <button
            className='btn'
            onClick={handleClickA}
          >
            Cliquez pour A
          </button>
          </div>
          <div className='cont-btn'>
              <label className='icon'><FaPlus/></label>
          <button
            className='btn'
            onClick={handleClickB}
          >
            Cliquez pour B
          </button>
          </div>
       
        </div>
      
      </div>

      <div className='right'>
        {message === 'A' && <MessageA />}
        {message === 'B' && <MessageB />}
      </div>
    </div>
  );
};

export default Dashboard;
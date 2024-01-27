import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    width: '800px',
    height: '430px',
    margin: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
};

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-blue-500 p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white" onClick={openModal}>
          {/* Remplacez l'icône ci-dessous par l'icône que vous souhaitez utiliser */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        <div className="text-white text-3xl font-extrabold tracking-wide">BABY EARN</div>

        <div className="text-white" onClick={openModal}>
          {/* Remplacez l'icône ci-dessous par l'icône que vous souhaitez utiliser */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l-1 2h2l-1-2zm0-7V7m0-4a7 7 0 00-7 7h14a7 a7 0 00-7-7z"
            />
          </svg>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Options Modal"
          style={customStyles}
        >
          <div className="flex flex-col items-center p-8">
            <div className="flex flex-row justify-center items-center mb-8">
              {/* Icône Dépôt */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-12 w-12 mr-2 text-green-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-2xl font-bold">Dépôt</span>
            </div>

            <div className="flex flex-row justify-center items-center mb-8">
              {/* Icône Retrait */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-12 w-12 mr-2 text-red-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
              <span className="text-2xl font-bold">Retrait</span>
            </div>

            <div className="flex flex-row justify-center items-center mb-8">
              {/* Icône Cadeau */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-12 w-12 mr-2 text-blue-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-2xl font-bold">Cadeau</span>
            </div>

            <div className="flex flex-row justify-center items-center mb-8">
              {/* Icône Dashbord */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-12 w-12 mr-2 text-indigo-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16v-2m0-6h.01m0-6v.01M12 18a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <span className="text-2xl font-bold">Dashbord</span>
            </div>
          </div>
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;

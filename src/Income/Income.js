// DepotForm.jsx
import React, { useState } from 'react';

const DepotForm = ({ onSubmit }) => {
  const [montant, setMontant] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (montant.trim() !== '' && !isNaN(montant)) {
      onSubmit(parseFloat(montant));
      setMontant('');
    }
  };

  return (
    <div className="bg-white bg-opacity-90 rounded-md shadow-md p-6 mx-auto mt-20 w-96 h-64">
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <div className="mb-4">
          <label htmlFor="montant" className="block text-gray-700 text-sm font-bold mb-2">
            Montant du dépôt :
          </label>
          <input
            type="text"
            id="montant"
            name="montant"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Entrez le montant du dépôt"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Valider le dépôt
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepotForm;

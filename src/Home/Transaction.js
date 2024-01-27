import React, { useState } from 'react';
import 'animate.css';

const Transactions = () => {
  // Données fictives pour les transactions
  const initialTransactions = [
    { id: 1, title: 'Achat en ligne', amount: -25.99, date: '2024-02-15' },
    { id: 2, title: 'Dépôt', amount: 50.0, date: '2024-02-14' },
    { id: 3, title: 'Retrait au distributeur', amount: -30.0, date: '2024-02-12' },
    { id: 4, title: 'Remboursement', amount: 15.0, date: '2024-02-10' },
    { id: 5, title: 'Cadeau d', amount: 20.0, date: '2024-02-08' },
    { id: 6, title: 'Achat de jouets', amount: -15.0, date: '2024-02-05' },
    { id: 7, title: 'Argent de poche', amount: 10.0, date: '2024-02-03' },
    { id: 8, title: 'Dépense mystérieuse', amount: -5.0, date: '2024-02-01' },
    { id: 9, title: 'Vente de vieux jouets', amount: 25.0, date: '2024-01-30' },
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [visibleTransactions, setVisibleTransactions] = useState(4);

  const handleSeeMore = () => {
    setVisibleTransactions((prevCount) => prevCount + 5);
  };

  const handleSeeLess = () => {
    setVisibleTransactions((prevCount) => Math.max(prevCount - 5, 4));
  };

  return (
    <div className="container mx-auto mt-8 p-8 animate__animated animate__slideInLeft">
      <h2 className="text-3xl font-bold mb-4">Dernières transactions</h2>

      {/* Tableau des transactions (visible sur les écrans de taille moyenne et plus grands) */}
      <div className="md:block hidden">
        <table className="w-full border-collapse border-b border-blue-500 shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">Montant</th>
              <th className="p-3">Description</th>
              <th className="p-3">Date du transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, visibleTransactions).map((transaction) => (
              <tr key={transaction.id} className="bg-white hover:bg-gray-100">
                <td className="p-3">{transaction.amount} EUR</td>
                <td className="p-3">{transaction.title}</td>
                <td className="p-3">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Boutons "Voir plus" et "Voir moins" pour la version tableau */}
        <div className="text-center mt-4">
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full mr-4"
            onClick={handleSeeMore}
          >
            Voir plus
          </button>
          {visibleTransactions > 4 && (
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleSeeLess}
            >
              Voir moins
            </button>
          )}
        </div>
      </div>

      {/* Affichage des transactions (visible sur les écrans plus petits) */}
      <div className="md:hidden">
        <div className="grid gap-4">
          {transactions.slice(0, visibleTransactions).map((transaction) => (
            <div
              key={transaction.id}
              className="bg-blue-400 text-white p-4 rounded-md"
            >
              <p className="text-lg font-semibold mb-2">{transaction.title}</p>
              <p className="text-xl">{transaction.amount} EUR</p>
            </div>
          ))}
        </div>
        {/* Boutons "Voir plus" et "Voir moins" pour la version mobile */}
        <div className="text-center mt-4">
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full mr-4"
            onClick={handleSeeMore}
          >
            Voir plus
          </button>
          {visibleTransactions > 4 && (
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleSeeLess}
            >
              Voir moins
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;

// Transactions.jsx
import React from 'react';

const Transactions = () => {
  // Données fictives pour les transactions
  const transactions = [
    { id: 1, title: 'Achat en ligne', amount: -25.99, date: '2024-02-15' },
    { id: 2, title: 'Dépôt', amount: 50.0, date: '2024-02-14' },
    { id: 3, title: 'Retrait au distributeur', amount: -30.0, date: '2024-02-12' },
    { id: 4, title: 'Remboursement', amount: 15.0, date: '2024-02-10' },
  ];

  return (
    <div className="container mx-auto mt-8 p-8">
      <h2 className="text-3xl font-bold mb-4">Dernières transactions</h2>

      {/* Affichage des transactions (visible sur les écrans plus petits) */}
      <div className="md:hidden">
        {/* Style adapté pour la liste mobile avec des couleurs enfantines */}
        <div className="grid gap-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="bg-blue-400 text-white p-4 rounded-md shadow-md"
            >
              <p className="text-lg font-semibold mb-2">{transaction.title}</p>
              <p className="text-xl">{transaction.amount} EUR</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tableau des transactions (visible sur les écrans de taille moyenne et plus grands) */}
      <div className="md:block hidden">
        {/* Style amélioré pour le tableau */}
        <table className="w-full border-collapse border-b border-blue-500 shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">Montant</th>
              <th className="p-3">Description</th>
              <th className="p-3">Date du transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="bg-white hover:bg-gray-100 text-center">
                <td className="p-3">{transaction.amount} EUR</td>
                <td className="p-3 tetx-center">{transaction.title}</td>
                <td className="p-3 text-center">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;

import React from 'react';

const Transactions = () => {
  const transactions = [
    { id: 1, title: 'Achat en ligne', amount: -25.99 },
    { id: 2, title: 'Dépôt', amount: 50.0 },
    { id: 3, title: 'Retrait au distributeur', amount: -30.0 },
    { id: 4, title: 'Remboursement', amount: 15.0 },
  ];

  return (
    <div className="container mx-auto mt-8 p-8">
      <h2 className="text-3xl font-bold mb-4">Dernières transactions</h2>

      {/* Liste des transactions */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-blue-500 text-white p-4 rounded-md shadow-md"
          >
            <p className="text-lg font-semibold mb-2">{transaction.title}</p>
            <p className="text-xl">{transaction.amount} EUR</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;

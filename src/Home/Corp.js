import React, { useState } from 'react';
import "./style.css"

const Corps = () => {
  return (
    <div className="container mx-auto mt-8 p-8">
      <h1 className="text-2xl text-center font-bold mb-4 _text">Bienvenue dans l'application de gestion de budget</h1>

      {/* Affichage du solde actuel dans un cercle (visible uniquement sur mobile) */}
      <div className=" text-white p-8 rounded-full text-center md:hidden _solde">
        <p className="text-lg font-semibold mb-2 ">Solde actuel</p>
        <p className="text-4xl">00 EUR</p>
      </div>

      {/* Affichage du solde actuel dans un cercle (visible uniquement sur les écrans plus grands que mobile) */}
      <div className=" text-white p-8 rounded-full text-center hidden md:block _solde">
        <p className="text-lg font-semibold mb-2">Solde actuel</p>
        <p className="text-4xl">00 EUR</p>
      </div>
    </div>
  );
};

export default Corps;

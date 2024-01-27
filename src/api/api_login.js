import dotenv from 'dotenv';
dotenv.config();

export const login = async (username, password) => {
  const baseURL = process.env.REACT_APP_BASE_URL;

    try {
      const response = await fetch('{baseURL/login}', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Identifiants invalides');
      }
    } catch (error) {
      throw new Error('Erreur de connexion');
    }
  };
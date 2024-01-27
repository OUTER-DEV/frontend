export const login = async (username, password) => {
    try {
      const response = await fetch('{URL}', {
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
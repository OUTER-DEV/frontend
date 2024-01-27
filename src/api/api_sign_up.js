

export const createAccount = async (username, firstname, lastname, pin, confirmPin) => {
  const baseURL = process.env.REACT_APP_BASE_URL;

  try {
    if (pin !== confirmPin) {
      throw new Error('Les codes PIN ne correspondent pas');
    }

    const response = await fetch(`${baseURL}/create-account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, firstname, lastname, pin }),
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erreur lors de la création du compte');
    }
  } catch (error) {
    throw new Error(error.message || 'Erreur inconnue');
  }
};

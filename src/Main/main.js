import React, { useState, useEffect } from 'react';

const MainPage = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    setImageURL('');

    const API_URL = 'https://picsum.photos/1200/800';

    fetch(API_URL)
      .then(response => {
        const imageUrl = response.url;
        setImageURL(imageUrl);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de l\'image:', error);
      });
  };

  return (
    <div>
      {imageURL && <img src={imageURL} alt="Image" />}
    </div>
  );
};

export default MainPage;
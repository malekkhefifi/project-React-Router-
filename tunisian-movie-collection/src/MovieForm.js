import React, { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');
  const [trailerUrl, setTrailerUrl] = useState('');

  // Gérer l'envoi du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    // Valider si tous les champs sont remplis
    if (!title || !description || !posterURL || !rating || !trailerUrl) {
      alert('Tous les champs doivent être remplis');
      return;
    }

    // Ajouter un nouveau film
    onAddMovie({
      title,
      description,
      posterURL,
      rating: parseFloat(rating),  // Convertir la note en nombre
      trailerUrl
    });

    // Réinitialiser les champs après l'ajout du film
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
    setTrailerUrl('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '5px', marginBottom: '10px', width: '200px' }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '5px', marginBottom: '10px', width: '200px' }}
      />
      <input
        type="text"
        placeholder="URL du Poster"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        style={{ padding: '5px', marginBottom: '10px', width: '200px' }}
      />
      <input
        type="number"
        placeholder="Note (1-10)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ padding: '5px', marginBottom: '10px', width: '200px' }}
        min="1"
        max="10"
      />
      <input
        type="text"
        placeholder="URL de la Bande-Annonce"
        value={trailerUrl}
        onChange={(e) => setTrailerUrl(e.target.value)}
        style={{ padding: '5px', marginBottom: '10px', width: '200px' }}
      />
      <button type="submit" style={{ padding: '5px 10px' }}>
        Ajouter un Film
      </button>
    </form>
  );
};

export default MovieForm;


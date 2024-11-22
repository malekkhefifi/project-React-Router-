import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import Filter from './Filter';
import MovieForm from './MovieForm';  // Importer MovieForm
import './App.css';
function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Dachra',
      description: 'Un thriller psychologique tunisien qui suit une jeune étudiante enquêtant sur une légende urbaine.',
      posterURL: 'https://www.middleeasteye.net/sites/default/files/styles/wysiwyg_large/public/images/affiche_dachra_0.jpg?itok=Se9kuLO2', 
      rating: 7.5,
      trailerUrl: 'https://www.youtube.com/watch?v=APXHWbbWVxU'  // Exemple de bande-annonce
    },
    {
      id: 2,
      title: 'Boulis',
      description: 'Une comédie dramatique tunisienne qui raconte l’histoire d’un jeune homme tiraillé entre ses racines et sa quête d\'indépendance.',
      posterURL: 'https://media.pathe.tn/movie/alex/HO00000604/poster/lg/1/movie&uuid=988ABB81-3BCE-44CB-ABC1-43BEF99CEF98',
      rating: 6.9,
      trailerUrl: 'https://www.youtube.com/watch?v=l_wyg8Vd1IA'  // Exemple de bande-annonce
    },
    
    {
      id: 3,
      title: 'Super Tunsi',
      description: 'Une comédie tunisienne avec une touche de satire sociale, racontant l’histoire d’un super-héros tunisien improbable qui lutte contre les injustices.',
      posterURL: 'https://th.bing.com/th/id/OIP.d7VSbgA_b6u1Ts23l8sbfQAAAA?rs=1&pid=ImgDetMain',
      rating: 7.3,
      trailerUrl: 'https://www.youtube.com/watch?v=nt8yOBic55c'  // Exemple de bande-annonce
    },
    {
      id: 4,
      title: 'Sabak Lkir',
      description: 'Un film tunisien intense sur la lutte de personnages face aux défis sociaux et personnels dans la Tunisie contemporaine.',
      posterURL: 'https://media.pathe.tn/movie/alex/HO00000082/poster/lg/4/movie&uuid=2E782AE0-61A3-4855-A6BD-44C76126E7AB',  // Remplacez par l\'URL de l\'affiche réelle
      rating: 7.8,
      trailerUrl: 'https://www.youtube.com/watch?v=2X8Rdw9lcbg&t=12s'  // Remplacez par le lien de la bande-annonce réelle
    }
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    // Ajouter le nouveau film en tête de liste
    const updatedMovies = [newMovie, ...movies];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);  // Mettre à jour la liste filtrée
  };

  const handleFilterChange = (title, rating) => {
    const filtered = movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(title.toLowerCase());
      const matchesRating = rating ? movie.rating >= parseFloat(rating) : true;
      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div className="App">
        <h1>Ma Collection de Films Tunisiens</h1>
        <MovieForm onAddMovie={handleAddMovie} />  {/* Ajouter le formulaire avant la liste */}
        <Filter onFilterChange={handleFilterChange} />
        <Routes>
          <Route
            path="/"
            element={<MovieList movies={filteredMovies} />}
          />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




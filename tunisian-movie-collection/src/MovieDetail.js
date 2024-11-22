import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();  // Récupérer l'ID du film depuis l'URL
  const movie = movies.find((m) => m.id === parseInt(id));  // Trouver le film avec cet ID

  if (!movie) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <p><strong>Rating: </strong>{movie.rating}</p>
      <div>
        <h3>Bande-annonce</h3>
        <iframe
          width="560"
          height="315"
          src={movie.trailerUrl.replace('watch?v=', 'embed/')}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default MovieDetail;

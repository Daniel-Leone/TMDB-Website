import React, { useEffect, useState } from 'react'
import Paginacion from './Paginacion'
import Movie from './Movie'

const MovieList = () => {
    const [pagina, setPagina] = useState(1);
    const totalPorPagina = 5;
    const [peliculas, setPeliculas] = useState([]);
  
    useEffect(() => {
      const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=a9b5c9d7e530ae7246596ee7ac01b435`;
  
      fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
          if (data.status_code !== 34) {
            setPeliculas(data.results);
          }
        });
    }, []);
  
  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculas.length;
    return Math.ceil(cantidadTotalDePeliculas / totalPorPagina);
  }
  
  let peliculasPorPagina = peliculas.slice(
      (pagina - 1) * totalPorPagina,
      pagina * totalPorPagina
    );

    return (
      <div className='body'>
  
  <div className="movieContainer">
            {
                peliculasPorPagina.map((pelicula) => {
                    return <Movie
                      key={pelicula.id}
                      img={
                        'https://image.tmdb.org/t/p/original/' +
                        pelicula.poster_path
                      }
                      titulo={pelicula.original_title}
                      descripcion={pelicula.overview}
                      fecha={pelicula.release_date}
                      duracion={pelicula.runtime}
                      calificacion={pelicula.vote_average}
                      votos={pelicula.vote_count}
                    />
                })
            }
        </div>
  
      <Paginacion paginaActual={pagina} total={getTotalPaginas()} onChange={ (valor)=>{
        setPagina(valor)
      } }/>
      </div>
    )
}

export default MovieList
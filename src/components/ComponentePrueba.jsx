import React, { useEffect, useState } from 'react'
import Paginacion from './Paginacion'
import Movie from './Movie'
import SelectCategory from './SelectCategory';
import { firebaseConfig } from './FirebaseUtil';

const ComponentePrueba = () => {
    const [pagina, setPagina] = useState(1);
    const totalPorPagina = 5;
    const [peliculas, setPeliculas] = useState([]);
    const [url, setUrl] = useState(1)

    firebaseConfig()

    const FEATURED_API = `https://api.themoviedb.org/4/list/${url}?page=1&api_key=a9b5c9d7e530ae7246596ee7ac01b435`;

    useEffect(() => {
      
  
        fetch(FEATURED_API)
          .then((res) => res.json())
          .then((data) => {
            if (data.status_code !== 34) {
                setPeliculas(data.results);
            }
          });

    }, [FEATURED_API]);

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
      {
          <div style={{display: 'flex', flexDirection: 'row'}}>

            <SelectCategory api={url} setApi={setUrl} labelAndSelect='Sagas'
            op1Val='1' op1Name='Marvel Movies'
            op2Val='3' op2Name='DC Comics Movies'
            op3Val='32' op3Name='Star Trek'
            op4Val='33' op4Name='Alien'
            op5Val='34' op5Name='Lord Of The Rings'
            op6Val='34' op6Name='Star Wars'
            op7Val='36' op7Name='Matrix'
            />

            <SelectCategory api={url} setApi={setUrl} labelAndSelect='Oscars'
            op1Val='27' op1Name='2008 Oscar Nominations'
            op2Val='9' op2Name='2009 Oscar Nominations'
            op3Val='8' op3Name='2010 Oscar Nominations'
            op4Val='4' op4Name='2011 Oscar Nominations'
            op5Val='2' op5Name='2012 Oscar Nominations'
            op6Val='28' op6Name='Best Picture Winners'
            op7Val='122' op7Name='Best Movie 1960-1969'
            />

          </div>
      }
  
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

export default ComponentePrueba
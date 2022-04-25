import React from 'react'
import Heart from './Heart'

const Movie = ({img, titulo, calificacion, fecha, duracion, descripcion, votos}) => {
  return (
    <div className='movie'>  
        <div>
          <Heart/>
        </div>
        <div className='movieImgContainer'> 
          <img src={img} alt={titulo}/> 
        </div>
        <div className='infoMovie'>
            <h3 style={{color: '#f1f1f1'}}>{titulo}</h3>
            <p style={{color: '#f1f1f1'}}>⭐ {calificacion} - 👨‍👩‍👧‍👦 {votos} - 📅 {fecha}</p>
            <p style={{color: '#f1f1f1'}}>{descripcion}</p>
        </div>
        
    </div>
  )
}

export default Movie
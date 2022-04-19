import React from 'react'

const Paginacion = ({paginaActual, total, onChange}) => {

  const getPaginas = ()=>{
    const resultado = []
    for(let i= 0; i < total; i++){
      let pagina = i + 1
      resultado.push(
        <a
        onClick = { ()=> onChange(pagina) }
        className = {paginaActual === pagina ? 'active' : ''}>
          {pagina}
        </a>
      );
    }
    return resultado;
  }

  return (
    <>
    <div className='divisorBar'></div>
    <div className='paginacionContainer'>
        <p style={{color: '#ccc'}}>Página {paginaActual} de {total}:</p>

        <div className='paginacion'> {getPaginas()} </div>
    </div>
    <div className='divisorBar' style={{marginBottom: '1rem'}}></div>
    </>
  )
}

export default Paginacion
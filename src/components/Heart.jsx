import React, { useState } from 'react'

const Heart = () => {

    const [corazon, setCorazon] = useState(false)

  return (
    <div className='corazonContainer' onClick={()=> setCorazon(!corazon) }>
        <div className={corazon ? 'favorito' : 'corazon'}></div>
    </div>
  )
}

export default Heart
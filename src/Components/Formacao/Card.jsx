import React from 'react'
import './Card.css'

const Card = ({tipoCurso, curso, instituicao, periodo, tecnologias }) => {
  return (
    <div className='card'>
        <div className='card-formacao'>
        <p className='card-tecnologias-tipoCurso'>{tipoCurso}</p>
            <p className='card-tecnologias-curso'>{curso}</p>
            <p className='card-tecnologias-instituicao'>{instituicao}</p>
            <p className='card-tecnologias-periodo'>{periodo}</p>
        </div>
        <ul className='card-tecnologias'>
          {tecnologias.map( (tecnologia, index) => (
            <li key={index}>{tecnologia}</li>
          ))}
        </ul>
    </div>
  )
}

export default Card
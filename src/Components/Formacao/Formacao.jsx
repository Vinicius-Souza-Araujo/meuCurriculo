import React from 'react'
import './Formacao.css'
import Card from './Card'

const Formacao = () => {
  return (
    <section id='formacao' className='formacao' aria-label='Formação'>
      <h2>Formação</h2>
      <div className='formacao-cards'>
        <Card
          tipoCurso='TECNÓLOGO'
          curso='Análise e Desenv. de Sistemas'
          instituicao='SENAC-SP'
          periodo='02/2022 - 08/2024'
          tecnologias={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Java', 'MySQL']}
        />
        <Card
          tipoCurso='TÉCNICO'
          curso='Desenvolvimento de Sistemas'
          instituicao='SENAI SUIÇO'
          periodo='07/2021 - 12/2022'
          tecnologias={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Node', 'MySQL']}
        />
        <Card
          tipoCurso='BOOTCAMP'
          curso='Academia DOTNET'
          instituicao='UFN / ATOS'
          periodo='04/2023 - 07/2023'
          tecnologias={['HTML', 'CSS', 'JavaScript', 'React', 'ASP.NET MVC', 'API de ASP.NET para Web', 'Entity Framework', 'SQL Server']}
        />
        <Card
          tipoCurso='BOOTCAMP'
          curso='Academia Infraestrutura'
          instituicao='AVANADE'
          periodo='06/2023 - 07/2023'
          tecnologias={['Field Services', 'Asset', 'Mobilidade', 'Workplace']}
        />
      </div>
    </section>
  )
}

export default Formacao
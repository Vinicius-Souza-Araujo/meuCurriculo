import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header-titulo'>Vinicius Souza</h1>
        <nav>
            <ul className='header-menu'>
                <li><a>Experiência</a></li>
                <li><a href='#formacao'>Formação</a></li>
                <li><a>Contato</a></li>
            </ul>

        </nav>

    </header>
  )
}

export default Header
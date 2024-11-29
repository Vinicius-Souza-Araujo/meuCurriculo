import React from 'react'
import './Footer.css'

const Footer = () => {

    const hoje = new Date();
    const anoAtual = hoje.getFullYear();

  return (
    <footer className='footer' id='contato'>
        <div className='footer-container'>
            <p className='footer-texto'>Atualmente, estou disponível para novos projetos! Entre em contato e vamos agendar uma conversa. Será um prazer colaborar com você! 🙂</p>
            <ul className='footer-contato'>
                <li><a href='mailto:vinicius.araujo8228@gmail.com'>E-mail</a></li>
                <li><a href='https://www.linkedin.com/in/vinicius-souza-araujo/'>Linkedin</a></li>
                <li><a href='https://github.com/Vinicius-Souza-Araujo'>GitHub</a></li>
            </ul>
            <p className='footer-copy'>Vinicius Souza Araujo © {anoAtual}</p>
        </div>

    </footer>
  )
}

export default Footer
import React from 'react'
import './Introducao.css'
import iconCity from '../../assets/icon-city.svg';
import imgVinicius from '../../assets/Group 158.png';



const Introducao = () => {

  const anoNascimento = 2003; 
  const mesNascimento = 7;
  const diaNascimento = 2;
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();

  let idade = anoAtual - anoNascimento;

  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--;
  }
  return (
    <main className='introducao'>
        <img className='introducao-imgVinicius'  src={imgVinicius} alt="Foto de Vinicius" />
        <div>
            <h1 className='introducao-titulo'>Desenvolvedor Full Stack</h1>
            <div className='introducao-infoBasicas'>
                <p>{idade} anos - Embu das Artes, São Paulo</p>
                <img src={iconCity} alt="Ícone de cidade" />
            </div>
        </div>
    </main>
  )
}

export default Introducao
import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://pt-br.reactjs.org">
        <img src="https://www.alura.com.br/assets/img/imersoes/react/logo-horizontal.1595623271.svg" alt="Logo React" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;

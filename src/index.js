import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

const Pagina404 = ( )=> (<div>Página 404</div>);

function CadastroVideo(){
  return(
    <div>
      Página de cadastro de vídeo
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact  />
      <Route path="/cadastro/video" component={CadastroVideo}/> 
      <Route component={Pagina404}/>      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);



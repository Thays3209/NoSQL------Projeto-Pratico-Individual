import React from 'react';
import ReactDOM from 'react-dom';

import Home from './Components/Index/home';
import Menu from '../src/Components/Menu/menu';

import Footer from './Components/footer/footer';
import Lojas from '../src/Components/Lojas/lojas'
import Contatos from '../src/Components/Contatos/contatos'
import FormContatos from './Components/Contatos/formulario'
import Comentarios from '../src/Components/Contatos/comentarios'
import{BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render(
  <Router>
  <React.StrictMode>
    
    <Route exact path="/">
    <Menu />
    <Home/>
    <Footer />
    </Route>

    <Route exact path="/index.php">
    <Menu />
    <Home/>
    <Footer />
    </Route>

    <Route exact path="/lojas.php">
    <Menu />
    <Lojas />
    <Footer />
    </Route>

    <Route exact path="/contato.php">
    <Menu />
    <Contatos />
    <FormContatos />
    <Comentarios />
    <Footer />
    </Route>
</React.StrictMode>
  </Router>,
  document.getElementById('root')
);

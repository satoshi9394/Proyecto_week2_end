import React from 'react';

//importar componentes
import NavBar from './components/NavBar';
import CardBlocH from './components/CardBlocH'
import CardBlocV from './components/CardBlocV'
import Footer from './components/Footer'

import assents from './assents/logo.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar  className="container s"
      imgUrl="./assents/logo.png"
      />
{/*       <CardBlocH
      title='Avance de la inteligencia artificial' 
      date=''
      autor=''
      imgUrl=''
      p="La tecnologia avanza a pasos agigantados de enorme candidad
      de informacion"
      categoria=''
      />
      <div className='container'>
        <h1>categoria1</h1>
        <div className="col s4">
          <CardBlocV
          imgUrl=''
          title=''
          p=''
          date=''
          />
        </div>
        <div className="col s4">
          <CardBlocV
          imgUrl=''
          title=''
          p=''
          date=''          
          />
        </div>
        <div className="col s4">
          <CardBlocV
          imgUrl=''
          title=''
          p=''
          date=''          
          />
        </div>
        <h1>categoria2</h1>
        <div className="col s4">
          <CardBlocV
          imgUrl=''
          title=''
          p=''
          date=''
          />
        </div>
        <div className="col s4">
          <CardBlocV
          imgUrl=''
          title=''
          p=''
          date=''          
          />
        </div>
        <div className="col s4">
          <CardBlocV
          imgUrl=''
          title=''
          p=''
          date=''          
          />
        </div>
        <h1>categoria3</h1>
        <div className="col s4">
          <CardBlocV
          imgUrl=''
          title=''
          p=''
          date=''
          />
        </div>
        <div className="col s4">
          <CardBlocV
          imgUrl=''
          title=''
          p=''
          date=''          
          />
        </div>
        <div className="col s4">
          <CardBlocV
          imgUrl=''
          title=''
          p=''
          date=''          
          />
        </div>
      </div>
      <Footer/> */}
    </div>

  );
}

export default App;

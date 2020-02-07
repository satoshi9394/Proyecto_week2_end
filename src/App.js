import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CardBlocH
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
      <Footer/>
    </div>

  );
}

export default App;

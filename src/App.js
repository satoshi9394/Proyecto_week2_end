import React from 'react';


import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';
import Card from './components/Card';

import mediaData from './utils/mediaData';

import './App.css';



const App=() => {
  const Media = mediaData.map((media,idx) =>
    <Card info={media} key={idx}/>
  );

  return (
    <div className="App">
      <NavBar/>
      <div className="container" id="content">
        <div className="row">
          {Media}
        </div>
      </div>
      <FooterBar/>
    </div>
  );
}

export default App;

import React from 'react';


import NavBar from './components/NavBar';
import FooterBar from './components/FooterBar';
import Card from './components/Card';

import mediaData from './utils/mediaData';





const App=() => {
  const Media = mediaData.map((media,idx) =>
    <Card info={media} key={idx}/>
  );

  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <div className="row">
          {Media}
        </div>
      </div>
      <FooterBar/>
    </div>
  );
}


/* 

      />
      //Post1
      img1='https://i.ytimg.com/vi/sShD4ZE-Wq4/hqdefault.jpg?sqp=
      -oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCoDzNGcSiAa1M8j_hUw-Ksj0Sr3w'
      title1='¿Y si les digo que igual los Agujeros Negros NO EXISTEN?'
      p1='Un gran hito en la historia de la ciencia, captar fotones que orbitaron un agujero 
      negro supermasivo hace más de 50 millones de años. Pero… ¿cómo te quedarías si te digo 
      que al final de todo puede que los agujeros negros no existan?' 
      date1='4/00/2020'
      autor1="Date un Vlog"
      link1='https://www.youtube.com/watch?v=sShD4ZE-Wq4'
      //Post2
      img2='https://i.ytimg.com/vi/lT4OLf4yyuU/hqdefault.jpg?sqp=
      -oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAGNY5buwpcPQHUNFdwripzQvUE1A'
      title2='HOY SÍ que vas a entender la relatividad especial'
      p2='La relatividad especial de Einstein ha cambiado nuestra forma de entender el espacio 
      y el tiempo. Hoy te explico en estas 6 claves cómo entendemos el Universo después de Einstein'
      date2='15/11/2019'
      autor2="Date un Vlog"
      link2='https://www.youtube.com/watch?v=lT4OLf4yyuU'
      //Post3
      img3='https://i.ytimg.com/vi/mTh7PbyyA0I/hqdefault.jpg?sqp
      =-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAeOnpp-Komamuiqk5bEwYrxU8wog'
      title3='Este vídeo SÍ te va a volar la cabeza: ¿Qué es el TIEMPO?'
      p3='En este vídeo viajamos por las teorías modernas de la física intentando encontrar una definición 
      precisa del tiempo y en particular saber si lo que experimentamos como tiempo es algo real o 
      tan solo una ilusión.'
      date3='20/10/2019'      
      autor3='Date un Vlog'
      link3='https://www.youtube.com/watch?v=mTh7PbyyA0I'
      />
      <ColumnSection
      categoria="Musica"
      //Post1
      img1='https://i.ytimg.com/vi/5iadbCIuc8Q/hqdefault.jpg?sqp
      =-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD8jOgHJs1xKWmOygAPdRA-cSt57g'
      title1='DESTRIPANDO LA HISTORIA: ¿Por qué están arrasando? La historia de Pascu y Rodri '
      p1='¿Qué hay detrás de DESTRIPANDO LA HISTORIA? ¿Por qué está arrasando? ¿Cómo trabajan
      sus creadores Pascu y Rodri? ¿Qué hace que Zeus, Hades, Loki, Poseidón, Thanos y
      Hércules sean canciones con tanta identidad?' 
      date1='05/10/2019'
      autor1="Jaime Altozano"
      link1='https://www.youtube.com/watch?v=5iadbCIuc8Q&t=1611s'
      //Post2
      img2='https://i.ytimg.com/an_webp/4GkdTTXdXsk/mqdefault_6s.webp?du
      =3000&sqp=CJid9fEF&rs=AOn4CLA7Ii5vmkZGq0EBI2wTlxnnPKWy8g'
      title2='LOS MISERABLES: la Mejor Fuga de BACH || Jaime Altozano'
      p2='En este vídeo os hablo de mi fuga favorita, y os explico 
      por qué lo es mientras hablamos de Los Miserables
       y Nausicaä del Valle del Viento. '
      date2='09/06/2018'
      autor2="Jaime Altozano"
      link2='https://www.youtube.com/watch?v=4GkdTTXdXsk'
      //Post3
      img3='https://i.ytimg.com/an_webp/Mr8ICnGutYM/mqdefault_6s.webp?du
      =3000&sqp=CJ-59fEF&rs=AOn4CLCE3zVXEiLBbRoJ_F0po20glAtahw'
      title3='De Pokemon a Bach. Una historia de VOCES. || Jaime Altozano'
      p3='Por qué Bach no usaba twitter? La respuesta está un su música, o en las relaciones 
      de su música con Pokemon, los Beatles y la Oreja de Van Gogh.'
      date3='05/06/2018'      
      autor3="Jaime Altozano"
      link3='https://www.youtube.com/watch?v=Mr8ICnGutYM'
      />
      <Footer/>
    </div>

  );
} */

export default App;

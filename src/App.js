import React from 'react';

//importar componentes
import NavBar from './components/NavBar';
import CardBloc from './components/CardBloc'
import ColumnSection from './components/ColumnSection'
import Footer from './components/Footer'



import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar  className="container"
      />
     <CardBloc bloc='bloc'
      title='¡Esta IA juega al ESCONDITE demasiado bien!' 
      date='20/12/2019'
      autor='Dot CSV'
      imgUrl='https://i.ytimg.com/vi/5SkQuT3kZOc/hqdefault.jpg?sqp=
      -oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLChbr0KqVvXe_ITFRpzWWeHuH8ZWw'
      p="Hemos observado agentes que descubren el uso progresivamente más complejo de herramientas 
      mientras juegan un juego simplejuego de escondite. A través de la capacitación en nuestro nuevo
      entorno simulado de escondite, los agentesConstruimos una serie de seis estrategias y 
      contraestrategias distintas, algunas de las cuales no conocíamos Nuestro entorno es compatible. 
      La complejidad emergente auto supervisada en este entorno simplesugiere además que la coadaptación 
      multiagente puede algún día producir un comportamiento extremadamente complejo ycomportamiento inteligente"
      categoria='Inteligencia Artificial'
      orientacion='card horizontal teal darken-1'
      link='https://www.youtube.com/watch?v=5SkQuT3kZOc&t=3s'
      />
      <ColumnSection
      categoria="Inteligencia artificial"
      //Post1
      img1='https://i.ytimg.com/vi/ULh2lXR-6O4/hqdefault.jpg?sqp
      =-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBBqPkKNMoHKJmznglFpzOK6BcyRA'
      title1='BIOBOTS y Algoritmos Evolutivos'
      p1='Los BIOBOTS se han convertido en el descubrimiento más hablado en las últimas semanas, 
      pero... ¿Sabías que se han generado con algoritmos de Inteligencia Artificial?' 
      date1='20/01/2020'
      autor1="Dot CSV"
      link1='https://www.youtube.com/watch?v=ULh2lXR-6O4'
      //Post2
      img2='https://i.ytimg.com/vi/jYWfdx0OKvI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==
      &rs=AOn4CLDZ1dSEd-IqsPW4n00UzXk8FI1MTQ'
      title2='¿Te puede leer la MENTE una IA?'
      p2='Un estudio reciente mostraba cómo una IA podía decodificar la mente 
      de lo que un sujeto estaba viendo. ¿Es esto posible? Te lo explico.'
      date2='10/01/2020'
      autor2="Dot CSV"
      link2='https://www.youtube.com/watch?v=jYWfdx0OKvI'
      //Post3
      img3='https://i.ytimg.com/vi/QaZKKYEvT7s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ=
      =&rs=AOn4CLCHTZavpASuviBplg5ZvbkHXUQClQ'
      title3='¿Dónde está mi coche autonomo?'
      p3='Tesla, Waymo, Ford, Toyota... todas estas compañías llevan años prometiéndonos 
      el coche autónomo. ¿Dónde está? Te lo cuento...'
      date3='25/11/2019'      
      autor3='Dot CSV'
      link3='https://www.youtube.com/watch?v=QaZKKYEvT7s'
      />
      <ColumnSection
      categoria="avances"
      //Post1
      img1='https://i.ytimg.com/vi/ULh2lXR-6O4/hqdefault.jpg?sqp
      =-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBBqPkKNMoHKJmznglFpzOK6BcyRA'
      title1='BIOBOTS y Algoritmos Evolutivos'
      p1='Los BIOBOTS se han convertido en el descubrimiento más hablado en las últimas semanas, 
      pero... ¿Sabías que se han generado con algoritmos de Inteligencia Artificial?' 
      date1='20/01/2020'
      autor1="Dot CSV"
      link1='https://www.youtube.com/watch?v=ULh2lXR-6O4'
      //Post2
      img2='https://i.ytimg.com/vi/jYWfdx0OKvI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==
      &rs=AOn4CLDZ1dSEd-IqsPW4n00UzXk8FI1MTQ'
      title2='¿Te puede leer la MENTE una IA?'
      p2='Un estudio reciente mostraba cómo una IA podía decodificar la mente 
      de lo que un sujeto estaba viendo. ¿Es esto posible? Te lo explico.'
      date2='10/01/2020'
      autor2="Dot CSV"
      link2='https://www.youtube.com/watch?v=jYWfdx0OKvI'
      //Post3
      img3='https://i.ytimg.com/vi/QaZKKYEvT7s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ=
      =&rs=AOn4CLCHTZavpASuviBplg5ZvbkHXUQClQ'
      title3='¿Dónde está mi coche autonomo?'
      p3='Tesla, Waymo, Ford, Toyota... todas estas compañías llevan años prometiéndonos 
      el coche autónomo. ¿Dónde está? Te lo cuento...'
      date3='25/11/2019'      
      autor3='Dot CSV'
      link3='https://www.youtube.com/watch?v=QaZKKYEvT7s'
      />
      <ColumnSection
      categoria="Descubrimientos"
      //Post1
      img1='https://i.ytimg.com/vi/ULh2lXR-6O4/hqdefault.jpg?sqp
      =-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBBqPkKNMoHKJmznglFpzOK6BcyRA'
      title1='BIOBOTS y Algoritmos Evolutivos'
      p1='Los BIOBOTS se han convertido en el descubrimiento más hablado en las últimas semanas, 
      pero... ¿Sabías que se han generado con algoritmos de Inteligencia Artificial?' 
      date1='20/01/2020'
      autor1="Dot CSV"
      link1='https://www.youtube.com/watch?v=ULh2lXR-6O4'
      //Post2
      img2='https://i.ytimg.com/vi/jYWfdx0OKvI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==
      &rs=AOn4CLDZ1dSEd-IqsPW4n00UzXk8FI1MTQ'
      title2='¿Te puede leer la MENTE una IA?'
      p2='Un estudio reciente mostraba cómo una IA podía decodificar la mente 
      de lo que un sujeto estaba viendo. ¿Es esto posible? Te lo explico.'
      date2='10/01/2020'
      autor2="Dot CSV"
      link2='https://www.youtube.com/watch?v=jYWfdx0OKvI'
      //Post3
      img3='https://i.ytimg.com/vi/QaZKKYEvT7s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ=
      =&rs=AOn4CLCHTZavpASuviBplg5ZvbkHXUQClQ'
      title3='¿Dónde está mi coche autonomo?'
      p3='Tesla, Waymo, Ford, Toyota... todas estas compañías llevan años prometiéndonos 
      el coche autónomo. ¿Dónde está? Te lo cuento...'
      date3='25/11/2019'      
      autor3='Dot CSV'
      link3='https://www.youtube.com/watch?v=QaZKKYEvT7s'
      />
      

      <Footer/>
    </div>

  );
}

export default App;

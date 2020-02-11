const media = [
    {
        id: 'Horizontal',
        dimension : 'col s12',
        orientacion: 'card horizontal teal lighten-1',
        title: '¡Esta IA juega al ESCONDITE demasiado bien!',
        date: '20/12/2019',
        autor: 'Dot CSV',
        p: `Hemos observado agentes que descubren el uso progresivamente más complejo de herramientas 
        mientras juegan un juego simplejuego de escondite. A través de la capacitación en nuestro nuevo
        entorno simulado de escondite, los agentesConstruimos una serie de seis estrategias y 
        contraestrategias distintas, algunas de las cuales no conocíamos Nuestro entorno es compatible. 
        La complejidad emergente auto supervisada en este entorno simplesugiere además que la coadaptación 
        multiagente puede algún día producir un comportamiento extremadamente complejo ycomportamiento inteligente`,
        categoria: 'Inteligencia Artificial',
        imgUrl:`https://i.ytimg.com/vi/5SkQuT3kZOc/hqdefault.jpg?sqp=
        -oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLChbr0KqVvXe_ITFRpzWWeHuH8ZWw`,
        link:'https://www.youtube.com/watch?v=ULh2lXR-6O4'

    },
    {
        id: '1',
        dimension : 'col s4',
        orientacion: 'card teal lighten-1',
        title: 'BIOBOTS y Algoritmos Evolutivos',
        date: '20/01/2020',
        autor: 'Dot CSV',
        p: `Los BIOBOTS se han convertido en el descubrimiento más hablado en las últimas semanas, 
        pero... ¿Sabías que se han generado con algoritmos de Inteligencia Artificial?`,
        imgUrl:`https://i.ytimg.com/vi/ULh2lXR-6O4/hqdefault.jpg?sqp
        =-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBBqPkKNMoHKJmznglFpzOK6BcyRA`,
        categoria: 'Inteligencia artificial',
        link:'https://www.youtube.com/watch?v=ULh2lXR-6O4'

    },
    {
        id: '2',
        dimension : 'col s4',
        orientacion: 'card teal lighten-1',
        title: '¿Te puede leer la MENTE una IA?',
        date: '10/01/2020',
        autor: 'Dot CSV',
        p: `Un estudio reciente mostraba cómo una IA podía decodificar la mente 
        de lo que un sujeto estaba viendo. ¿Es esto posible? Te lo explico.`,
        imgUrl:`https://i.ytimg.com/vi/jYWfdx0OKvI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==
        &rs=AOn4CLDZ1dSEd-IqsPW4n00UzXk8FI1MTQ`,
        categoria: 'Inteligencia artificial',
        link:'https://www.youtube.com/watch?v=jYWfdx0OKvI'

    },
    {
        id: '3',
        dimension : 'col s4',
        orientacion: 'card teal lighten-1',
        title: '¿Dónde está mi coche autonomo?',
        date: '25/11/2019',
        autor: 'Dot CSV',
        p: `Tesla, Waymo, Ford, Toyota... todas estas compañías llevan años 
        prometiéndonos el coche autónomo. ¿Dónde está? Te lo cuento y 
        además te explico la tecnología que hace funcionar al futuro de la conducción.`,
        imgUrl:`https://i.ytimg.com/vi/QaZKKYEvT7s/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ=
        =&rs=AOn4CLCHTZavpASuviBplg5ZvbkHXUQClQ`,
        categoria: 'Inteligencia artificial',
        link:'https://www.youtube.com/watch?v=QaZKKYEvT7s'

    },
    {
        id: '4',
        dimension : 'col s4',
        orientacion: 'card teal lighten-1',
        title: '¿Y si les digo que igual los Agujeros Negros NO EXISTEN?',
        date: '4/00/2020',
        autor: 'Date un Vlog',
        p: `Un gran hito en la historia de la ciencia, captar fotones que orbitaron un agujero 
        negro supermasivo hace más de 50 millones de años. Pero… ¿cómo te quedarías si te digo 
        que al final de todo puede que los agujeros negros no existan?`,
        imgUrl:`https://i.ytimg.com/vi/sShD4ZE-Wq4/hqdefault.jpg?sqp=
        -oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCoDzNGcSiAa1M8j_hUw-Ksj0Sr3w`,
        categoria: 'Fisica',
        link:'https://www.youtube.com/watch?v=sShD4ZE-Wq4'

    },
    {
        id: '5',
        dimension : 'col s4',
        orientacion: 'card teal lighten-1',
        title: 'HOY SÍ que vas a entender la relatividad especial',
        date: '15/11/2019',
        autor: 'Date un Vlog',
        p: `'La relatividad especial de Einstein ha cambiado nuestra forma de entender el espacio 
        y el tiempo. Hoy te explico en estas 6 claves cómo entendemos el Universo después de Einstein`,
        imgUrl:`https://i.ytimg.com/vi/lT4OLf4yyuU/hqdefault.jpg?sqp=
        -oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAGNY5buwpcPQHUNFdwripzQvUE1A`,
        categoria: 'Fisica',
        link:'https://www.youtube.com/watch?v=lT4OLf4yyuU'

    },
    {
        id: '6',
        dimension : 'col s4',
        orientacion: 'card teal lighten-1',
        title: 'Este vídeo SÍ te va a volar la cabeza: ¿Qué es el TIEMPO?',
        date: '20/10/2019',
        autor: 'Date un Vlog',
        p: `En este vídeo viajamos por las teorías modernas de la física intentando encontrar una definición 
        precisa del tiempo y en particular saber si lo que experimentamos como tiempo es algo real o 
        tan solo una ilusión.`,
        imgUrl:`https://i.ytimg.com/vi/mTh7PbyyA0I/hqdefault.jpg?sqp
        =-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAeOnpp-Komamuiqk5bEwYrxU8wog`,
        categoria: 'Fisica',
        link:'https://www.youtube.com/watch?v=mTh7PbyyA0I&t=1s'

    },
    {
        id: '7',
        dimension : 'col s4',
        orientacion: 'card teal lighten-1',
        title: 'DESTRIPANDO LA HISTORIA: ¿Por qué están arrasando? La historia de Pascu y Rodri',
        date: '05/10/2019',
        autor: 'Jaime Altozano',
        p: `¿Qué hay detrás de DESTRIPANDO LA HISTORIA? ¿Por qué está arrasando? ¿Cómo trabajan
        sus creadores Pascu y Rodri? ¿Qué hace que Zeus, Hades, Loki, Poseidón, Thanos y
        Hércules sean canciones con tanta identidad?`,
        imgUrl:`https://i.ytimg.com/vi/5iadbCIuc8Q/hqdefault.jpg?sqp
        =-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD8jOgHJs1xKWmOygAPdRA-cSt57g`,
        categoria: 'Musica',
        link:'https://www.youtube.com/watch?v=5iadbCIuc8Q&t=1611s'

    },
    {
        id: '8',
        dimension : 'col s4',
        orientacion: 'card teal lighten-1',
        title: 'LOS MISERABLES: la Mejor Fuga de BACH || Jaime Altozano',
        date: '09/06/2018',
        autor: 'Jaime Altozano',
        p: `En este vídeo os hablo de mi fuga favorita, y os explico 
        por qué lo es mientras hablamos de Los Miserables
         y Nausicaä del Valle del Viento. `,
        imgUrl:`https://i.ytimg.com/vi/4GkdTTXdXsk/hqdefault.jpg`,
        categoria: 'Musica',
        link:'https://www.youtube.com/watch?v=4GkdTTXdXsk'

    },
    {
        id: '9',
        dimension : 'col s4',
        orientacion: 'card teal lighten-1',
        title: 'De Pokemon a Bach. Una historia de VOCES. || Jaime Altozano',
        date: '05/06/2018',
        autor: 'Jaime Altozano',
        p: `Por qué Bach no usaba twitter? La respuesta está un su música, o en las relaciones 
        de su música con Pokemon, los Beatles y la Oreja de Van Gogh.`,
        imgUrl:`https://i.ytimg.com/vi/Mr8ICnGutYM/maxresdefault.jpg`,
        categoria: 'Musica',
        link:'https://www.youtube.com/watch?v=Mr8ICnGutYM'

    },

]

export default media;

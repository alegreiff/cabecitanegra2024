export interface Peliculas {
  id: number;
  desarrollo: number;
  year?: number;
  cast?: string;
  director?: string;
  productor?: string;
  coproductor?: string;
  agenteventas?: string;
  trailer?: string;
  galeria?: Array<number>;
  poster: boolean;
  slug: string;
  dossier?: string;
  ideaoriginal?: string;
  guion?: string;

  es?: Content;
  en?: Content;
}

export interface Content {
  nombre: string;
  temas: string;
  tipo?: string;
  lblProductor?: string;
  lblCoproductor?: string;
  premios?: string;
  sinopsis?: string;
  duracion?: string;
  basadaen?: string;
}

export const contenidos: Peliculas[] = [
  {
    id: 1,
    desarrollo: 1,
    year: 2021,
    cast: "Carolina Mosquera, Carlos Andrés Pérez",
    director: "Alfonso Acosta",
    productor: "Carolina Mosquera",
    coproductor: "Altiplano GPS",
    agenteventas: "Aspect Ratio",

    trailer: "539878177",
    slug: "colera",
    poster: true,
    galeria: [
      3, 4, 7, 8, 13, 14, 15, 16, 18, 19, 20, 24, 25, 27, 29, 30, 31, 34,
    ],
    dossier: "RAGE.pdf",
    es: {
      nombre: "Cólera morbo",
      temas: "Drama / Thriller / Historia real",
      tipo: "Largometraje",
      sinopsis: `Han pasado veinte años desde que le salvó la vida a un extraño. Han sido veinte años en los que los sueños de juventud no se cumplieron.
      Ahora Beatriz cercana a sus 40 pasa sus días entre la construcción donde trabaja, la floristería de su abuela y la nostalgia por el pasado. Escarbando en sus recuerdos encuentra en un viejo rollo fotográfico una imagen que la lleva a cuestionarse lo fútil de su vida, y llevada por un impulso se encamina en un viaje que la reencontrará con Cota, el extraño que salvó.<br />
      A medida que se acerca a él todo se torna siniestro y como en una pesadilla descubre que Cota es un payaso venido a menos que va de pueblo en pueblo dejando una estela de risas, pero también de muerte.<br />
      Sintiéndose responsable por el destino que cree alguna vez torció, Beatriz correrá el riesgo de convertirse en su némesis; no solo tendrá que enfrentarse con el real y monstruoso carácter de Cota, sino que deberá enfrentar el suyo propio.
      <br /><br />
      Este será un viaje interior basado en hechos reales.
      `,
      lblCoproductor: "Coproductor",
      lblProductor: "Productor",

      premios: `
      San Francisco Latino Film Festival. USA. 2022 <br />
      BIFF (Buffalo International Film Festival). USA. 2021 <br />
      Macabro, Festival Internacional de cine de Horror. México. 2021 <br />
      Insólito: Festival Internacional de Cine de Terror y Fantasía. Perú. 2021 <br />
      Festival Fantasmagoria Medellín. Colombia. 2021<br />
      Buenos Aires Rojo Sangre. Argentina. 2021 (Ganador mejor director Iberoamericano)<br />
      GANADORA FDC 2019 POSTPRODUCCIÓN
      
      `,
      duracion: `100'`,
    },
    en: {
      nombre: "Anger",
      temas: "Drama / Thriller / True Story",
      tipo: "Feature Film",
      sinopsis: `It has been twenty years since she saved a stranger’s life. Twenty years during which her teenage dreams were not fulfilled. Now Beatriz is nearly 40 and spends her days between the building site where she works, her grandma’s flower shop, and her nostalgia for the past. Digging through her memories, she finds an image in an old roll film that makes her question the futility of her life, and driven by an impulse, she embarks on a journey that will lead her to Cota, the stranger who she saved.<br />
      As she gets closer to him, everything becomes sinister, and like in a nightmare she discovers that Cota is not the kind of person she expected.
      Feeling responsible for the destiny that she believes she tore, Beatriz will risk becoming her own nemesis; she not only will have to face the very much real and monstrous nature of Cota, but also her own.
      <br /><br />
      This is an existential journey based on real events.`,
      lblCoproductor: "Co-Producer",
      lblProductor: "Producer",
      premios: `
      San Francisco Latino Film Festival. USA. 2022 <br />
      BIFF (Buffalo International Film Festival). USA. 2021 <br />
      Macabro, Festival Internacional de cine de Horror. México. 2021 <br />
      Insólito: Festival Internacional de Cine de Terror y Fantasía. Perú. 2021 <br />
      Festival Fantasmagoria Medellín. Colombia. 2021<br />
      Buenos Aires Rojo Sangre. Argentina. 2021 (Ganador mejor director Iberoamericano)<br />
      WINNER COLOMBIAN FILM FUND 2019`,
      duracion: `100'`,
    },
  },
  {
    id: 2,
    desarrollo: 1,
    year: 2020,
    cast: "Alejandra Ovalle, Diego Rojas",
    slug: "laika",
    poster: true,
    trailer: "416083962",
    galeria: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
    director: "Alfonso Acosta",
    productor: "Carolina Mosquera",
    coproductor: "Altiplano GPS",
    dossier: "LITS_DOSSIER.pdf",
    es: {
      nombre: "Laika en las estrellas",
      temas: "Drama / Coming-of-age / Animalismo",
      tipo: "Serie de tv",
      duracion: `6 capítulos 24'`,
      lblCoproductor: "Coproductor",
      lblProductor: "Productor",
      premios: "GANADORA CONVOCATORIA 2019 ANTV MINTIC",
      sinopsis: `Laura y Sergio son amigos del barrio desde pequeños. Todas las tardes las pasan juntos hablando del futuro incierto y de qué quieren ser y no ser. Ahora, con el colegio recién acabado, deben pasar de la charla a la acción y tomar decisiones reales que afectarán el rumbo de sus vidas. Laura, la buena estudiante, excéntrica, solitaria, amante de la astronomía y la astrología al mismo tiempo, se debate entre quedarse ayudando a su familia o irse a estudiar las estrellas con una beca en el exterior. Sergio, un joven animalista, cada vez más radical e idealista, entra en constante conflicto con su padre por su aparente falta de rumbo y objetivo en la vida y empieza a sentir que solo los animales son dignos de afectos en un mundo cruel y superficial.<br /><br />

      Cuando la perra de Sergio, Laika, desaparece, los chicos descubrirán en su búsqueda una oscura operación de abuso animal que se cierne sobre el barrio. Laika será rescatada sana y salva, pero esto será el génesis de una idea honesta y sin malicia: montar una agencia de detectives para mascotas desaparecidas. <br /><br />

      Llevar adelante la agencia es difícil, pero más es vivir, Laura siempre ha estado enamorada de Sergio y por temor a perderlo nunca se lo ha dicho y ya, y sintiendo que sus vidas van a cambiar irrevocablemente, se ha hecho la promesa de confesarle sus sentimientos antes de alejarse definitivamente. Dramas familiares, angustias y sueños juveniles, la vida cotidiana en un barrio del occidente de Bogotá que se niega a perder su carácter residencial en medio de la gran ciudad. Una idea, absurda, ingenua, y por lo mismo poderosa, que puede cambiar la vida de todos los involucrados: los animales extraviados del mundo y quiénes los buscan.
      `,
    },
    en: {
      nombre: "Laika in the Stars",
      temas: "Drama / Coming-of-age / Animalism",
      tipo: "TV series",
      duracion: `6 episodes 24'`,
      lblCoproductor: "Co-Producer",
      lblProductor: "Producer",
      premios: "WINNER ANTV MINTIC TV FUND 2019",
      sinopsis: `ILaura and Sergio have been friends from the neighborhood since they were kids.
      Every afternoon they spend time together talking about the uncertain future and what they want to be and not be.
      Now, with the school just finished, they must move from talk to action and make real decisions that will affect the direction of their lives.<br /><br />

      Laura, the good student, eccentric, loner, lover of astronomy and astrology at the same time, debates between staying to help her family or going to study the stars with a scholarship abroad. Sergio, a young animalist, increasingly radical and idealistic, enters into constant conflict with his father over his apparent lack of direction and purpose in life and begins to feel that only animals are worthy of affection in a cruel and superficial world.<br /><br />

      When Sergio's dog, Laika, disappears, the boys will discover in their search an obscure animal abuse operation looming over the neighborhood. Laika will be rescued safe and sound, but this will be the genesis of an honest and without malice idea: to set up a detective agency for missing pets.
      Running the agency is difficult, but more is living. Laura has always been in love with Sergio and for fear of losing him she has never told him, and feeling their lives are going to change irrevocably, she has made a promise to confess her feelings to him before leaving for good.<br /><br />

      Family dramas, anguish and youthful dreams, everyday life in a western Bogotá neighborhood that refuses to lose its residential character in the middle of the big city. An absurd, naive, and at the same time powerful idea that can change the lives of everyone involved: the lost animals of the world and those who seek them.`,
    },
  },
  {
    id: 3,
    desarrollo: 1,
    year: 2019,
    slug: "duermevela",
    poster: true,
    cast: "Dominique Forbes",
    galeria: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    director: "Alfonso Acosta",
    productor: "Carolina Mosquera",
    es: {
      nombre: "Duermevela",
      temas: "Niños / Drama",
      tipo: "Cortometraje",
      sinopsis: `Crecer nunca es fácil. Daniel (13), un niño dulce y gentil, sigue las instrucciones remotas de su madre para hacer frente a la difícil situación de su ausencia temporal por motivos de trabajo. Movido por el aburrimiento, la soledad y la presión de sus amigos, Daniel desobedece y se aventura a los peligros de las calles desconocidas donde encontrará apoyo en su nueva amiga de cuatro patas.`,
      premios: `
      Children's Film Festival Seattle 2022<br />
      GIFFONI FILM FESTIVAL (ITALY) 2019 - ELEMENTS+10<br />
      DYTIATKO INTERNATIONAL CHILDREN MEDIA FESTIVAL (UKRAINE) 2019<br />
      CINEKID (NETHERLANDS) 2019 - SCREENING CLUB<br />
      NEW YORK INTERNATIONAL CHILDREN'S FILM FESTIVAL (USA) 2020`,
      lblProductor: "Productor",
      duracion: `7'`,
    },
    en: {
      nombre: "Doze",
      temas: "Children’s / Drama",
      tipo: "Shortfilm",
      sinopsis: `Growing up is never easy. Daniel (13), sweet and gentle, follows the remote instructions of his mother to cope with the difficult situation of her temporary absence for work reasons. Moved by boredom, loneliness and the pressure of his friends, Daniel disobeys and ventures to the dangers of unknown streets where he will find support in his new four-legged friend.`,
      premios: `
      Children's Film Festival Seattle 2022<br />
      GIFFONI FILM FESTIVAL (ITALY) 2019 - ELEMENTS+10<br />
      DYTIATKO INTERNATIONAL CHILDREN MEDIA FESTIVAL (UKRAINE) 2019<br />
      CINEKID (NETHERLANDS) 2019 - SCREENING CLUB<br />
      NEW YORK INTERNATIONAL CHILDREN'S FILM FESTIVAL (USA) 2020`,
      lblProductor: "Producer",
      duracion: `7'`,
    },
  },
  {
    id: 4,
    desarrollo: 1,
    year: 2012,
    cast: "Alan Daicz, Fiona Horsey",
    slug: "resquicio",
    agenteventas: "E-One",
    poster: true,
    galeria: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    trailer: "47170131",
    director: "Alfonso Acosta",
    productor: "Carolina Mosquera, Ricardo Cantor",
    coproductor: "Rizoma (Argentina)",
    es: {
      nombre: "El resquicio",
      temas: "Drama / Misterio",
      tipo: "Largometraje",
      sinopsis: `Una familia viaja a una solitaria casa de campo para olvidar una muerte.
      Un sobrino está enamorado de su tía.
      Una madre no olvida a una hija. Una madre hace de cuenta que nada pasó.
      Unos gemelos de diez años creen que el bosque está embrujado.
      Un hermano tiene un palo en su mano, el otro hermano lo espera en el lago.
      Una madre bañada en barro camina por una carretera desierta.
      Una tía está bañada de sangre; no es de ella.
      Una familia quiere volver a estar unida, quiere sobrevivir. Una familia tal vez se de cuenta que se equivocó totalmente.`,
      premios: `BUSAN INTERNATIONAL FILM FESTIVAL 2012 - FLASHFORWARD - WORLD PREMIER<br />
      SAO PAULO INTERNATIONAL FILM FESTIVAL 2012<br />
      FESTIVAL INT´L DU FILM FANTASTIQUE DE GÉRARDMER 2013<br />
      TAIPEI FILM FESTIVAL 2013<br />
      NEUCHATEL INTERNATIONAL FANTASTIC FILM FESTIVAL 2013 - PRIX DE LA JEUNESSE BLAISE CENDRARS<br />
      BLACK MOVIE GENEVA INTERNATIONAL INDEPENDENT FILM FESTIVAL 2014<br />
      NOCTURNA, FESTIVAL INTERNACIONAL DE CINE FANTÁSTICO DE MADRID 2014<br />
      MARFICI – MAR DE PLATA INDEPENDENT FILM FESTIVAL 2014`,
      duracion: `102'`,
      lblCoproductor: "Coproductor",
      lblProductor: "Productor",
    },
    en: {
      nombre: "The Crack",
      temas: "Drama / Mistery",
      tipo: "Feature Film",
      sinopsis: `A family goes to a lonely country house to put a death behind them.
      A nephew is in love with his aunt.
      A mother cannot forget her daughter. A mother pretends nothing happened.
      Two ten-year old twins believe the woods are haunted.
      A brother is holding a stick; the other brother waits by the lake.
      A mother, covered in mud, walks along a deserted road.
      An aunt is covered in blood; not hers.
      A family wants to be united again, wants to survive.
      A family might find they were completely mistaken.`,
      premios: `BUSAN INTERNATIONAL FILM FESTIVAL 2012 - FLASHFORWARD - WORLD PREMIER<br />
      SAO PAULO INTERNATIONAL FILM FESTIVAL 2012<br />
      FESTIVAL INT´L DU FILM FANTASTIQUE DE GÉRARDMER 2013<br />
      TAIPEI FILM FESTIVAL 2013<br />
      NEUCHATEL INTERNATIONAL FANTASTIC FILM FESTIVAL 2013 - PRIX DE LA JEUNESSE BLAISE CENDRARS<br />
      BLACK MOVIE GENEVA INTERNATIONAL INDEPENDENT FILM FESTIVAL 2014<br />
      NOCTURNA, FESTIVAL INTERNACIONAL DE CINE FANTÁSTICO DE MADRID 2014<br />
      MARFICI – MAR DE PLATA INDEPENDENT FILM FESTIVAL 2014`,
      duracion: `102'`,
      lblCoproductor: "Co-Producer",
      lblProductor: "Producer",
    },
  },
  {
    id: 5,
    desarrollo: 9,
    slug: "cnet",
    poster: true,
    galeria: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    es: {
      nombre: "Casi nunca es tarde",
      temas: "Drama / Thriller histórico / Coming-of-age",
      tipo: "Serie",
      basadaen: "BASADA EN LA NOVELA DE JUAN DAVID CORREA",
      premios: `TORINO FILM LAB EXTENDED. 2019. ITALIA<br />
      PUENTES – EAVE / EUROPE – LATIN AMERICA COPRODUCTION WORKSHOP 2015/2016. URUGUAY Y SUIZA.<br />
      PARIS COPRODUCTION VILLAGE. INDUSTRY WEEK. CHAMPS-ÉLYSÉES FILM FESTIVAL. 2016. FRANCIA.<br />
      XII ENCUENTRO INTERNACIONAL DE PRODUCTORES. FESTIVAL INTERNACIONAL DE CINE DE CARTAGENA. 2016. COLOMBIA.<br />
      PROYECTO FINALISTA DE: FONDO PARA EL DESARROLLO CINEMATOGRÁFICO / MODALIDAD ESTÍMULO INTEGRAL 2015.`,
      sinopsis: `En la ciudad de la lluvia, las bombas y el Rock & RoII, Juan, un chico rebelde, irreverente y frecuente visitante de los bares rock underground, se convierte en el principal sospechoso del asesinato del rector de su colegio progresista.<br /><br />

      Juan no sólo tendrá que enfrentarse a Lizarazo, un derrotado detective a cargo de la investigación que no puede olvidar su oscuro pasado paramiIitar, sino también a Amanda, su lejana madre que ahora duda de la inocencia de su hijo. Durante la investigación Lizarazo descubrirá que Juan es el perfecto chivo expiatorio, y que el asesino del profesor es alguien muy cercano a él, probablemente alguien de la misma oficina gubernamental de inteligencia.<br /><br />

      Una tragedia, una nueva bomba, deja docenas de muertos y destrucción; una mañana sangrienta después de la cual las vidas que se han juntado por el asesinato del profesor nunca serán las mismas. Un día que, a pesar de la devastación, se convertirá en una oportunidad de reconstrucción, de tener una segunda oportunidad en la tierra, porque realmente, nunca es demasiado tarde...
      `,
    },
    en: {
      nombre: "Almost Never Too Late",
      temas: "Drama / Historical Thriller / Coming-of-age",
      tipo: "Serie",
      basadaen: "BASED ON THE NOVEL CASI NUNCA ES TARDE BY JUAN DAVID CORREA",
      premios: `TORINO FILM LAB EXTENDED. 2019. ITALY<br />
      PUENTES – EAVE / EUROPE – LATIN AMERICA COPRODUCTION WORKSHOP 2015/2016. URUGUAY AND SWITZERLAND.<br />
      PARIS COPRODUCTION VILLAGE. INDUSTRY WEEK. CHAMPS-ÉLYSÉES FILM FESTIVAL. 2016. FRANCE.<br />
      XII INTERNATIONAL PRODUCERS MEETING. CARTAGENA INTERNATIONAL FILM FESTIVAL. 2016. COLOMBIA.`,
      sinopsis: `In the  city of rain, bombs and Rock & Roll, Juan a highschool contrarian kid, irreverent, frequent visitor of underground rock bars, becomes the main suspect of the murder of his school principal.<br /><br />

      Juan not only  will have to deal with Lizarazo a run-down detective in charge of the investigation, who cannot forget his dark paramilitar past, but also with Amanda, his distant  mother who now doubts her son’s innocence. During the investigation Lizarazo will discover that Juan is the perfect scapegoat, and the murder of the teacher is someone very  close to him, probably someone from the same inteligence goverment office.<br /><br />

      A tragedy, a new bomb blast leaves dozens dead and destruction; a bloody morning after  which those lives thrown together by the teacher's  murder will never be the same. A day  which, in spite of the devastation, will become a chance to build new lives, have a  second chance on earth,  because really, it is Almost Never Too Late.
      `,
    },
  },
  {
    id: 11,
    desarrollo: 3,
    slug: "senant",
    poster: false,
    ideaoriginal: "Carolina Mosquera",
    director: "Nadia Granados",

    es: {
      nombre: "Señoritas",
      temas: "Arte",
      tipo: "Serie documental",
      sinopsis: `¿Qué tienen en común Jaqueline Nova, Carolina Cárdenas, Feliza Bursztyn o Hena Rodríguez, además de que muchos podríamos no saber quiénes son? Fueron artistas colombianas que se rebelaron a través de su arte y en contra del status-quo patriarcal en un país a medio camino hacia la modernidad, y que a pesar del olvido del tiempo y de las múltiples capas de invisibilización dejaron un importante legado artístico que impulsó las vanguardias artísticas de la primera mitad del siglo XX en nuestro país. Cerámica, dibujo, abstracción geométrica, fotografía experimental, cine, escultura, música electroacústica. Feminismo y una nueva historia del arte.  Es hora de que sus nombres y voces vuelvan a ser escuchados.
      `,
      premios: "SERIE GANADORA MINTIC 2023",
    },
    en: {
      nombre: "Señoritas",
      temas: "Arte",
      tipo: "Serie documental",
      sinopsis: `¿Qué tienen en común Jaqueline Nova, Carolina Cárdenas, Feliza Bursztyn o Hena Rodríguez, además de que muchos podríamos no saber quiénes son? Fueron artistas colombianas que se rebelaron a través de su arte y en contra del status-quo patriarcal en un país a medio camino hacia la modernidad, y que a pesar del olvido del tiempo y de las múltiples capas de invisibilización dejaron un importante legado artístico que impulsó las vanguardias artísticas de la primera mitad del siglo XX en nuestro país. Cerámica, dibujo, abstracción geométrica, fotografía experimental, cine, escultura, música electroacústica. Feminismo y una nueva historia del arte.  Es hora de que sus nombres y voces vuelvan a ser escuchados.
      `,
      premios: "SERIE GANADORA MINTIC 2023",
    },
  },
  {
    id: 12,
    desarrollo: 2,
    slug: "ter",
    poster: false,
    guion: "Alfonso Acosta",

    es: {
      nombre: "Los niños perdidos",
      temas: "Thriller social",
      tipo: "Serie",
      sinopsis: `Internet. Conspiraciones, una secta y un rastro de jóvenes desaparecidos. En el mundo real, lluvia, mucha lluvia. Paula, una periodista de un programa amarillista, investiga la desaparición de un chico a quien Mila, su hermana mayor, busca con total determinación. El chico ha sido reclutado por la secta “Los olvidados”, un grupo conformado por jóvenes de sectores deprimidos con algo en común: todos tuvieron el mismo sueño antes de desaparecer.<br /><br />
      Una periodista frustrada, una joven dispuesta a todo por encontrar a su hermano, una monja trabajadora social de un barrio difícil y un hacker artista desahuciado descenderán hasta lo más intrincado de una peligrosa espiral de esoterismo, política, teorías conspiratorias y los peligros de la inteligencia artificial, para al final descubrir la insondable cara de la soledad y del poder.
      `,
    },
    en: {
      nombre: "The lost children",
      temas: "Thriller",
      tipo: "Tv series",
      sinopsis: `Paula, a journalist for a tabloid show, investigates the disappearance of a boy whom Mila, her older sister, is searching for with total determination. The boy has been recruited by the sect "Los olvidados", a group made up of young people from depressed areas with something in common: they all had the same dream before disappearing.<br ><br />
      A frustrated journalist, a young woman willing to do anything to find her brother, a social worker nun in a tough neighborhood and a terminally ill hacker artist will descend into the deepest intricacies of a dangerous spiral of esotericism, politics, conspiracy theories and the dangers of artificial intelligence, to finally discover the unfathomable face of loneliness and power.
      `,
    },
  },
  {
    id: 13,
    desarrollo: 9,
    slug: "muchacha",
    poster: false,

    es: {
      nombre: "Muchacha no salgas",
      temas: "Drama/ Social en desarrollo",
      tipo: "Cortometraje",
      sinopsis: `María Paula recién graduada de filología tiene una deuda a cuestas, debe unos buenos millones por un préstamo que sacó para estudiar. A pesar de que domina el inglés y va bien con el francés, no logra que sus hojas de vida sean tenidas en cuenta, pero ella decidida a enfrentar la situación y no dejar todo en manos de su mamá se la rebusca a diario paseando perros y ahora como mensajera todoterreno que va y viene en su bicicleta llevando encomiendas.<br /><br />
      Su amiga Pilar tampoco está en el mejor momento, se acaba de pelear con su mamá y su padrastro quienes le reclaman por no estar aportando en la casa.<br /><br />
      Paula camino a la primera entrega del día se cruza con Pilar en el parque del barrio y animadas por el encuentro, las amigas deciden pasar el día en sus bicicletas haciendo todas las vueltas juntas. Recorren la convulsa ciudad, ríen en medio de carros, pitos, grafitis, y contaminación. <br /><br />
      Paula recibe una llamada para que asista a una entrevista de trabajo. La lluvia de Bogotá amenaza con caer. La entrevista, una desilusión más, pero nada que el fuerte abrazo de una amiga no pueda reconfortar. Mañana será otro día.
      `,
    },
    en: {
      nombre: "Muchacha no salgas",
      temas: "Drama/ Social en desarrollo",
      tipo: "Cortometraje",
      sinopsis: `María Paula recién graduada de filología tiene una deuda a cuestas, debe unos buenos millones por un préstamo que sacó para estudiar. A pesar de que domina el inglés y va bien con el francés, no logra que sus hojas de vida sean tenidas en cuenta, pero ella decidida a enfrentar la situación y no dejar todo en manos de su mamá se la rebusca a diario paseando perros y ahora como mensajera todoterreno que va y viene en su bicicleta llevando encomiendas.<br /><br />
      Su amiga Pilar tampoco está en el mejor momento, se acaba de pelear con su mamá y su padrastro quienes le reclaman por no estar aportando en la casa.<br /><br />
      Paula camino a la primera entrega del día se cruza con Pilar en el parque del barrio y animadas por el encuentro, las amigas deciden pasar el día en sus bicicletas haciendo todas las vueltas juntas. Recorren la convulsa ciudad, ríen en medio de carros, pitos, grafitis, y contaminación. <br /><br />
      Paula recibe una llamada para que asista a una entrevista de trabajo. La lluvia de Bogotá amenaza con caer. La entrevista, una desilusión más, pero nada que el fuerte abrazo de una amiga no pueda reconfortar. Mañana será otro día.
      `,
    },
  },
  {
    id: 6,
    desarrollo: 0,
    slug: "carino",
    poster: false,
    es: {
      nombre: "El cariño",
      temas: "Drama / Comedia",
      tipo: "Serie de tv",
      sinopsis: `Sarita a quien su padre ha dado la espalda, debe conseguir su primer trabajo para poder pagar la universidad. La única posibilidad es como vendedora en el tradicional almacén El cariño donde su tía trabaja hace más de 20 años. <br /><br />
      Los primeros días en el lugar no son los mejores. Sarita no solo es torpe y amarga, sino que además no entiende el aparente optimismo de las demás empleadas. Para ella estar en un lugar como ese es un camino muerto que no lleva a ningún lado, mientras que para el resto es lo único que conocen como vida. <br /><br />
      Enfrentada a un temprano despido, a un nuevo fracaso, y a una desilusión para su tía, Sarita hace su mejor intento para adaptarse al lugar. Con la ayuda de Johana, su nueva y risueña amiga amante del perreo, y de Roberto, un joven y tímido contador, Sarita abandona parte de sus prejuicios. El cariño no es un almacén cualquiera, es el corazón de un barrio, el reflejo de un tiempo pasado donde múltiples vidas y destinos se cruzan con la suya, un lugar donde finalmente le encuentra sentido a su vida.<br /><br />

      Pero El cariño, un almacén que lleva más de 60 años en funcionamiento se enfrenta ante la prueba más difícil de su existencia. Su fundador ha muerto y su nieta heredera del lugar lo va a cerrar. <br /><br />
      Sarita, la joven empleada que hace unos meses no daba nada por su lugar de trabajo, ahora deberá dar la lucha por un lugar y por unas personas detenidas en el tiempo que se niegan a desaparecer y ser olvidadas.
      `,
    },
    en: {
      nombre: "El cariño",
      temas: "Drama / Comedy",
      tipo: "TV series",
      sinopsis: `Sarita, whose father has turned his back on her, must get her first job in order to pay for college. The only possibility is as a saleswoman in the traditional store El Cariño where her aunt has worked for more than 20 years.<br /><br />
      The first days in the place are not the best. Sarita is not only clumsy and bitter, but also doesn´t understand the apparent optimism of the other employees. For her, being in a place like that is a dead end that leads nowhere, while for the rest it´s the only thing they know as life. <br /><br />
      Faced with an early dismissal, another failure, and a disappointment for her aunt, Sarita makes her best attempt to adapt to the place. With the help of Johana, her new laughing friend who loves perreo, and Roberto, the young and shy accountant, Sarita abandons some of her prejudices. El cariño is not just any warehouse, it´s the heart of a neighbourhood, the reflection of a past time where multiple lives and destinies intersect with hers, a place where she finally finds meaning in her life.<br /><br />
      But El Cariño, a warehouse that has been in operation for more than 60 years, is facing the most difficult test of its existence. Its founder has died and his granddaughter, the heiress of the place, is closing it down. <br /><br />
      Sarita, the young employee who few months ago didn't give a damn for her place of work, now must have to give the fight for a place and for some people stuck in time who refuse to disappear and be forgotten.
      `,
    },
  },
  {
    id: 7,
    desarrollo: 1,
    slug: "karol",
    poster: false,
    guion: "Alfonso Acosta",
    director: "Alfonso Acosta",
    productor: "Carolina Mosquera CON Juana Soto Dávila",

    es: {
      nombre: "Karol, la reina vampira",
      temas: "Infantil",
      tipo: "Cortometraje",
      sinopsis: `Es la fiesta de cumpleaños de Karol (8) y lo que debería ser un momento grato se convierte en un caos por las peleas con sus padres. Karol, quien tiene una personalidad arrolladora y la capacidad de destrucción del Demonio de Tasmania, está convencida de que es una vampira y de que su lugar es estar colgada de cabeza del árbol viendo el mundo al revés. Su mamá no entiende que no se deje peinar, que no luzca su magnífica cabellera y que prefiera vestir esa roñosa capa.<br /><br />
      La fiesta avanza y la tensión aumenta. El padre culpa a la madre. Los abuelos discuten. Solo en su tío la niña encuentra la complicidad para enfrentar el mundo de los adultos. Y en un último acto de rebeldía se corta ella misma el pelo. Pero lo que parecía el rebose de la copa termina por unir.<br /><br />
      Anochece y las cosas se calman. Karol y su primo observan de lejos a los adultos ser felices en su torpe baile. El niño quiere saber cómo es ser ella. “Ponte boca abajo y mira al mundo al revés”.<br /><br />
      El niño lo hace y entiende todo.
      `,
      premios:
        "Ganador de estímulo Realización de cortometraje infantil del FDC 2021",
    },
    en: {
      nombre: "Karol, The Vampire Queen",
      temas: "Child",
      tipo: "Shortfilm",
      sinopsis: `Es la fiesta de cumpleaños de Karol (8) y lo que debería ser un momento grato se convierte en un caos por las peleas con sus padres. Karol, quien tiene una personalidad arrolladora y la capacidad de destrucción del Demonio de Tasmania, está convencida de que es una vampira y de que su lugar es estar colgada de cabeza del árbol viendo el mundo al revés. Su mamá no entiende que no se deje peinar, que no luzca su magnífica cabellera y que prefiera vestir esa roñosa capa.<br /><br />
      La fiesta avanza y la tensión aumenta. El padre culpa a la madre. Los abuelos discuten. Solo en su tío la niña encuentra la complicidad para enfrentar el mundo de los adultos. Y en un último acto de rebeldía se corta ella misma el pelo. Pero lo que parecía el rebose de la copa termina por unir.<br /><br />
      Anochece y las cosas se calman. Karol y su primo observan de lejos a los adultos ser felices en su torpe baile. El niño quiere saber cómo es ser ella. “Ponte boca abajo y mira al mundo al revés”.<br /><br />
      El niño lo hace y entiende todo.
      `,
      /* sinopsis: `It´s Karol's birthday party (8) and what should be a pleasant moment turns into chaos because of the fights with her parents. Karol, who has an overwhelming personality and the destructive capacity of the Tasmanian Devil, is convinced that she´s a vampire and that her place is to hang upside down from the tree and see the world backwards. Her mom doesn't understand why she won't let her hair be combed, why she doesn't show off her magnificent hair and why she prefers to wear that filthy cape.<br /><br />
      The party's going on and the tension is rising. The father blames the mother. The grandparents argue. Only in her uncle, Karol finds the complicity to face the adult world. And in a final act of defiance she cuts her own hair. But what seemed like the overflow of the cup ends up uniting.<br /><br />
      It gets dark and things calm down. Karol and her cousin watch the adults from afar being happy in their clumsy dance. The kid wants to know what it's like to be her. "Stand upside down and look at the world upside down."<br /><br />
      The cousin does and understands everything.
      `, */
      premios:
        "Ganador de estímulo Realización de cortometraje infantil del FDC 2021",
    },
  },
  {
    id: 8,
    desarrollo: 9,
    slug: "rastro",
    poster: false,
    es: {
      nombre: "El rastro del sol (Los objetos)",
      temas: "Drama infantil",
      tipo: "Cortometraje",
      sinopsis: `Vicky, una particular niña de 8 años fascinada con los seres sobrenaturales de la noche, encuentra en un cuarto lleno de cosas abandonadas y viejas su lugar preferido en el mundo. Objetos que a sus ojos son mágicos y llaves a otros mundos por descubrir, pero que a los ojos de los adultos no son más que basura sin ningún valor.<br /><br />
      Una serie de fotos llamará potentemente su atención. Son fotos con notas escritas por una desconocida mujer a un amor perdido que nunca fueron entregadas. Fotos del mar con palabras tristes que hablan de lo inexorable. <br /><br />
      Ahora Vicky deberá llenar los huecos en la historia y terminar así lo que esa mujer misteriosa empezó años atrás y de paso enfrentarse con una ausencia propia: la de su padre.<br /><br />
      Anochece. El sonido de las olas inunda su habitación.
      `,
    },
    en: {
      nombre: "The Trace Of The Sun (The Objects)",
      temas: "Drama infantil",
      tipo: "Shortfilm",
      sinopsis: `Karol, a particular 8-year-old girl fascinated by the eternal life of vampires, finds her favorite place in the world in a room full of old and abandoned things. Objects that in her eyes are magic and keys to other worlds to be discovered, but that in the eyes of adults are nothing more than worthless trash.<br /><br />
      A series of photos will powerfully catch her attention. They are photos with notes written by an unknown woman to a lost love that were never delivered. Photos of the sea with sad words that speak of the inexorable.<br /><br />
      Now Karol will have to fill in the gaps in the story and thus finish what that mysterious woman started years ago.<br /><br />
      Nightfall. The sound of the waves floods her room.
      
      `,
    },
  },
  {
    id: 9,
    desarrollo: 0,
    slug: "profesores",
    poster: false,
    es: {
      nombre: "Los profesores muertos",
      temas: "Drama / Comedia",
      tipo: "Largometraje",
      sinopsis: `Patricio Balaguer un carismático y elocuente profesor universitario que tiene una banda de punk llamada Los profesores muertos, quiere escribir una novela, pero las afugias diarias con sus estudiantes son la excusa perfecta para evadir las páginas en blanco sin sentirse culpable. Un día más otra excusa más.<br /><br />
      Ahora el turno es un baladí concurso de ensayo cinematográfico en el que Patricio participa pero en el que perderá, y lo que es peor, el ganador será un avezado estudiante suyo héroe de redes sociales que ha hecho plagio. En medio de dudas y temiendo quedar como un resentido, Patricio decide denunciarlo ante las directivas de la universidad, pero los círculos de poder lo superarán.<br /><br />
      Presa de insania y como invocando al espíritu del profesor Immanuel Rath, nuestro entrañable educador descenderá al infierno donde finalmente podrá escribir una historia de redención, dar una última lección, y gritar con desgarro punk ¡No más clases!`,
      premios: `Ganador Ibermedia Desarrollo 2014<br />
      Match Colombia - Suecia / Festival de cine de Estocolmo 2014<br />
      Foro de Coproducción Europa – América Latina/Festival de cine de San Sebastián 2014<br />
      Ganador como mejor proyecto en Bogotá Audiovisual Market – BAM PROJECTS 2014<br />
      XIX Taller Colón. Análisis de Proyectos Cinematográficos-Fundación TYPA 2013<br />
      39 Foro de Coproducción de Huelva 2013<br />
      Encuentro Internacional de Productores de Cartagena 2013`,
    },
    en: {
      nombre: "The Dead Professors",
      temas: "Drama / Comedy",
      tipo: "Feature Film",
      sinopsis: `Patricio Balaguer, a charismatic and eloquent university professor who has a punk band called Los profesores muertos, wants to write a novel, but the daily affair with his students is the perfect excuse to avoid the blank pages without feeling guilty. One more day, another excuse.<br /><br />
      Now it's the turn of an unimportant film essay contest in which Patricio participates but will lose, and what's worse, the winner will be an obnoxious student, a social networking “hero” who has plagiarized for the contest.
      In the middle of doubts, and fearing he could seems as a resentful person, Patricio decides to denounce him to the university's directors; but the circles of power will overcome him. <br /><br />
      Alienated and as invoking the spirit of Der Professor Immanuel Rath, our beloved educator will descend to hell where he´ll finally be able to write a story of redemption, give one last lesson, and shout out: No more classes!`,
      premios: `Winner Ibermedia Desarrollo 2014<br />
      Match Colombia - Sweden / Stockholm Film Festival 2014<br />
      Europe - Latin America Co-production Forum/San Sebastian Film Festival 2014<br />
      Winner as best project in Bogotá Audiovisual Market - BAM PROJECTS 2014<br />
      XIX Colon Workshop. Analysis of Film Projects-TYPA Foundation 2013<br />
      39 Huelva 2013 Co-production Forum<br />
      International Meeting of Producers in Cartagena 2013<br />`,
    },
  },
  {
    id: 10,
    desarrollo: 1,
    slug: "antologia",
    poster: true,
    productor: "Mochila digital",
    coproductor: "Cabecitanegra producciones",
    director: "Luis Ramos",
    ideaoriginal: "Carolina Mosquera y Alfonso Acosta",
    guion: "Alfonso Acosta y Mauricio Cuervo",
    trailer: "834020237",
    es: {
      nombre: "Antología de lo invisible",
      temas: "Arte",
      tipo: "Documental",
      sinopsis: `¿Qué tienen en común Carolina Cárdenas, Andrés de Santamaría, Hena Rodríguez, Débora Arango, Alfonso Suárez y Nadia Granados además de que muchos podríamos no saber muy bien quiénes son? Unos vivos, otros diluidos en el invisible paso del tiempo, pero todos han sido artistas colombianos que desde sus búsquedas personales se han rebelado a través de su arte en contra del status-quo oficial impulsando así las vanguardias artísticas en nuestro país. Pintura, cerámica, dibujo, escultura, abstracción geométrica, fotografía experimental y performance. Los orígenes del arte moderno en Colombia y una nueva historia crítica del arte.
      `,
      lblCoproductor: "Coproductor",
      lblProductor: "Productor",
    },
    en: {
      nombre: "Antología de lo invisible",
      temas: "Arte",
      tipo: "Documental",
      sinopsis: `¿Qué tienen en común Carolina Cárdenas, Andrés de Santamaría, Hena Rodríguez, Débora Arango, Alfonso Suárez y Nadia Granados además de que muchos podríamos no saber muy bien quiénes son? Unos vivos, otros diluidos en el invisible paso del tiempo, pero todos han sido artistas colombianos que desde sus búsquedas personales se han rebelado a través de su arte en contra del status-quo oficial impulsando así las vanguardias artísticas en nuestro país. Pintura, cerámica, dibujo, escultura, abstracción geométrica, fotografía experimental y performance. Los orígenes del arte moderno en Colombia y una nueva historia crítica del arte.
      `,
      lblCoproductor: "Co-Producer",
      lblProductor: "Producer",
    },
  },
  {
    id: 14,
    desarrollo: 2,
    slug: "rosa",
    poster: false,
    ideaoriginal: "Carolina Mosquera",

    es: {
      nombre: "Señoritas: la vida color rosa",
      temas: "",
      tipo: "Largometraje documental",
      sinopsis: `Fucsia, rosa, rosa pálido, rosa pastel, millenial pink, todos tonos de rojo blanqueado protagonista de múltiples ficciones sobre la feminidad.<br /><br />
      A través de la obra de seis artistas colombianas haré un recorrido histórico-caprichoso por algunos significados endilgados a este paradigmático color. Instalación, óleos, acrílicos, escultura, vidrio y fotografía se mezclan en clave de collage con textiles, tintes prehispánicos, sangre menstrual, banderas Misak, esculturas neogranadinas y algo de punk.
      `,
    },
    en: {
      nombre: "Life inpink",
      temas: "",
      tipo: "Largometraje documental",
      sinopsis: `Fuchsia, pink, pale pink, pastel pink, millenial pink, all shades of bleached red, protagonist of multiple fictions about femininity.<br /><br />
      Through the work of six Colombian artists I will make a historical-capricious journey through some of the meanings attributed to this paradigmatic color. Installation, oils, acrylics, sculpture, glass and photography are mixed in collage with textiles, pre-Hispanic dyes, menstrual blood, Misak flags, Neo-Granadian sculptures and some punk.
      `,
    },
  },
  {
    id: 15,
    desarrollo: 2,
    slug: "anuncio",
    poster: true,
    guion: "Alfonso Acosta y Carolina Mosquera",
    director: "Alfonso Acosta",

    es: {
      nombre: "La anunciación",
      temas: "Horror cósmico / Body Horror / Latinx",
      tipo: "Largometraje",
      sinopsis: `Tres momentos cercanos en el tiempo. Tres lugares: Bogotá, NY y el desierto mexicano cercano a la frontera inventada por los hombres. Tres personas diferentes en una sola entidad invocada. Tres lugares unidos por una línea cósmica de acontecimientos que anunciarán el despertar de los profetas de un nuevo antiguo mundo y la destrucción del anterior... nuestro mundo.
      `,
    },
    en: {
      nombre: "The annunciation",
      temas: "Cosmic Horror/ Body Horror / Latinx",
      tipo: "Feature film",
      sinopsis: `Three moments close in time. Three places: Bogota, NY and the Mexican desert near the border invented by men. Three different people in a single invoked entity. Three places united by a cosmic line of events that will announce the awakening of the prophets of a new ancient world and the destruction of the previous one... ours.
      `,
    },
  },
];

angular.module('starter.services', [])

.factory('Speakers', function() {
  // Might use a resource here that returns a JSON array

  // Some testing data
  var speeches = [{
    id: 0,
    name: 'Arturo Mejia',
    lastText: 'Bio',
    face: 'img/arturo_mejia_marmol.jpg',
    category: 'img/mobile.png',
    speech: 'Como convertirte en un Adroid Expert desde cero',
    description: 'La charla estaría enfocada en que los participantes puedan tener un lineamiento o un conjunto de pasos a seguir para convertirse en expertos en desarrollo Android, sin tener que invertir nada más que su tiempo.',
    schedule: '10:45 AM'
  }, {
    id: 1,
    name: 'Federico Muller',
    lastText: 'Bio',
    face: 'img/federicomuller.jpg',
    category: 'img/cloud.png',
    speech: 'Vacas Conectadas',
    description: 'Toda empresa es una empresa de datos, que tipos de datos nos puede brindar una vaca? Como los datos pueden transformar una granja o un banco? Descubramos como el Internet de las Cosas esta cambiando el mundo.',
    schedule: '10:45 AM'
  }, {
    id: 2,
    name: 'Johan Prevot',
    lastText: 'Bio',
    face: 'img/JohanPrevot.jpg',
    category: 'img/web.png',
    speech: 'Laravel & OctoberCMS',
    description: 'Laravel es uno de los mejores frameworks para PHP. En este corto tiempo que estaré con ustedes les presentare una introducción básica de los que es el laravel y a su vez estaremos desarrollando un portal de clasificados en un potente CMS basado en laravel el cual su nombre es OctoberCMS.',
    schedule: '10:45 AM'
  }, {
    id: 3,
    name: 'Lorenzo Solano',
    lastText: 'Bio',
    face: 'img/lorenzosolano.jpg',
    category: 'img/process.png',
    speech: 'Systems Thinking and Software Craftsmanship',
    description: 'Analiza la Ingeniería de Software en el contexto de la teoría de sistemas para aterrizar los problemas que presenta nuestra profesión en el país, conectando todo esto con la necesidad de pasar del empirismo y labor mecánica al profesionalismo (craftsmanship).',
    schedule: '10:45 AM'
  }, {
    id: 4,
    name: 'José Elias',
    lastText: 'Bio',
    face: 'img/joseelias.jpg',
    category: 'img/open.png',
    speech: 'Realidad Virtual, oportunidades y retos',
    description: 'Después de varios intentos, la Realidad Virtual (VR) por fin está arrancando en consumidores, y las oportunidades para los primeros que tomen ventaja de ellas son potencialmente inmensas.',
    schedule: '10:45 AM'
  }, {
    id: 5,
    name: 'Armando Manzueta',
    lastText: 'Bio',
    face: 'img/armandomanzueta.jpg',
    category: 'img/emprendimiento.png',
    speech: 'Pensando como un emprendedor',
    description: 'En esta Charla abordaremos como el desarrollo de una mentalidad emprendedora contribuye a catapultar el desarrollo de nuevos productos y servicios.',
    schedule: '10:45 AM'
  }, {
    id: 6,
    name: 'Claudio Henriquez',
    lastText: 'Bio',
    face: 'img/claudiohenriquez.jpg',
    category: 'img/ui.png',
    speech: 'The path to becoming a UX Designer',
    description: 'This is the roadmap I wish I had from the start. These steps should provide a high-level overview for anyone interested in what it takes to become a UX Designer.',
    schedule: '10:45 AM'
  },{
    id: 7,
    name: 'Lorenzo Martinez',
    lastText: 'Bio',
    face: 'img/lorenzomartinez.jpg',
    category: 'img/mobile.png',
    speech: 'Internet Of Things: programmers challenges',
    description: 'Basado en los antecedentes de lo que conocemos con IoT o Internet de las Cosas, exponer diversos paradigmas y retos que tenemos los programadores y para los que ya debemos estar dando respuesta.',
    schedule: '12:40 PM'
  }, {
    id: 8,
    name: 'Claudio Sánchez',
    lastText: 'Bio',
    face: 'img/claudio-e1448989478557.jpg',
    category: 'img/cloud.png',
    speech: 'de repo a producción en 30 días: Emplea.do',
    description: '',
    schedule: '12:40 PM'
  }, {
    id: 9,
    name: 'Alexander Matos',
    lastText: 'Bio',
    face: 'img/JohanPrevot.jpg',
    category: 'img/web.png',
    speech: 'De Programador a Arquitecto',
    description: 'Interesados en aprender qué conlleva ser un arquitecto de Software y por qué es tan crucial para el éxito de cualquier organización, esta charla abarca como evolucionamos hacia esta meta y las destrezas que se espera poseamos para convertirnos en excelentes arquitectos.',
    schedule: '12:40 PM'
  }, {
    id: 10,
    name: 'Lorenzo Solano',
    lastText: 'Bio',
    face: 'img/lorenzosolano.jpg',
    category: 'img/process.png',
    speech: 'Diseño Orientado a Objetos: Principios SOLID',
    description: 'Breve explicación del acrónimo S.O.L.I.D. utilizando ejemplos de código, se realizarán ejemplos para demostrar los siguientes principios: Responsabilidad única (Single responsibility), Abierto-Cerrado (Open-closed), Sustitución de Liskov (Liskov substitution), Segregación de Interfaces (Interface segregation), Inversión de dependencias (Dependency inversion) Dado que los principios obedecen al paradigma de Orientación a Objetos, se utilizarán lenguajes como C# y/o Java en las demostraciones.',
    schedule: '12:40 PM'
  }, {
    id: 11,
    name: 'Onil Pereyra',
    lastText: 'Bio',
    face: 'img/onilpereyra.jpg',
    category: 'img/emprendimiento.png',
    speech: 'Skills Every Startup Team Needs',
    description: 'Landing a job at a promising startup is a lucrative opportunity. This talk is about how to make yourself attractive to the founders who could become the next titans of tech.',
    schedule: '12:40 PM'
  },{
    id: 12,
    name: 'Noé Branagan',
    lastText: 'Bio',
    face: 'img/noebranagan.jpg',
    category: 'img/mobile.png',
    speech: 'Conociendo Android Marshmallow',
    description: 'Aquí podrás conocer lo nuevo que nos trae Android Marshmallow donde si ya tienes una aplicación que debes hacer para soportar el API 23.',
    schedule: '1:00 PM'
  }, {
    id: 13,
    name: 'Caupolican Nuñez',
    lastText: 'Bio',
    face: 'img/caupolicannunez.jpg',
    category: 'img/cloud.png',
    speech: 'Building and Deploying scalable REST API’s using ASP.NET 5, Linux and Docker.',
    description: 'In this talk we will build and deploy a simple yet simple and scalable REST API’s using ASP.NET 5, Linux and Docker. We will leverage the power of ASP.NET 5 to build a production ready, scalable, and self documented REST API that could run on both linux using mono or windows using the .NET. We will then go though the steps and process of Dockerizing our API to make it scalable and extremely easy to deploy.',
    schedule: '1:00 PM'
  }, {
    id: 14,
    name: 'Eneldo Serrata',
    lastText: 'Bio',
    face: 'img/eneldoserrata.jpg',
    category: 'img/web.png',
    speech: 'Odoo all in one business framework in python',
    description: 'Esta charla esta orientada a conocer el las características de este eficiente web framework hecho en python, que permite desarrollar aplicación de forma muy rápida y que ademas cuenta muchas otras aplicaciones que permiten agilizar el desarrollo sin tener que reinvetar la rueda cada vez.',
    schedule: '1:00 PM'
  }, {
    id: 15,
    name: 'David Hemmat',
    lastText: 'Bio',
    face: 'img/12394591_10156441873730347_1532536231_o.jpg',
    category: 'img/process.png',
    speech: 'Freelanceando 101',
    description: 'Discutir primeros pasos para un Developer que quiere trabajar como freelancer. Un overview general de algunos temas importantes para un freelancer empezando.',
    schedule: '1:00 PM'
  }, {
    id: 16,
    name: 'Jonathan Montero',
    lastText: 'Bio',
    face: 'img/jonathanmontero.jpg',
    category: 'img/open.png',
    speech: 'Samba 4.0 como Active Directory',
    description: 'Se mostrará como se puede prescindir de un Windows Server 2003/2008/2012 y obtener el mismo resultado con Software Libre.',
    schedule: '1:00 PM'
  }, {
    id: 17,
    name: 'Frankely Díaz',
    lastText: 'Bio',
    face: 'img/frankelydiaz.jpg',
    category: 'img/emprendimiento.png',
    speech: 'Introducción a la robótica usando JavaScript',
    description: 'Con tantos micro-controladores como Arduino, Beaglebone, Raspberry PI, Tessel apareciendo cada día, muchos fabricantes, distintos modelos, diferentes plataformas se hace difícil saber por donde empezar. Pero en esta charla te mostraremos como hacerlo utilizando tus conocimientos existentes usando JavaScript.',
    schedule: '1:00 PM'
  }, {
    id: 18,
    name: 'Claudio Henriquez',
    lastText: 'Bio',
    face: 'img/claudiohenriquez.jpg',
    category: 'img/ui.png',
    speech: 'UX in the real world: How does it work?',
    description: 'Users are full of surprises. And they have a way of finding confusing spots in a product even if your team meticulously planned and designed it. That’s why in this talk we will be going through the most common techniques of UX Design and check how to make users happier by just adding a couple of steps to the product design process.',
    schedule: '1:00 PM'
  },{
    id: 19,
    name: 'Angel Garcia',
    lastText: 'Bio',
    face: 'img/angelgarcia.jpg',
    category: 'img/mobile.png',
    speech: 'Desarrollo de Apps Híbridas con Ionic Framework',
    description: 'Si necesitamos un desarrollo rápido, de fácil mantenimiento entre diferentes plataformas móviles (Android, iOS, WP), y no disponemos del tiempo, conocimientos y recursos necesarios para desarrollar nuestra app en cada plataforma, entonces lo ideal será una aplicación híbrida y en esta charla aprenderemos a desarrollar apps móviles de este tipo con este Framework.',
    schedule: '2:00 PM'
  }, {
    id: 20,
    name: 'José Gregorio Taveras',
    lastText: 'Bio',
    face: 'img/josegregorio.jpg',
    category: 'img/cloud.png',
    speech: 'Securing Asp.Net Web Api Like a Boss',
    description: 'Asegurar tu api con un simple usuario y clave, ya no es suficiente. En esta charla vamos ver como podemos autenticar nuestro web api basado en OWIN, usando OAUTH y Json Web Tokens (JWT). Si no sabes que es nada de esto, tranquilo No previous experience required!!',
    schedule: '2:00 PM'
  }, {
    id: 21,
    name: 'German Popoteur',
    lastText: 'Bio',
    face: 'img/germanpopoter.jpg',
    category: 'img/web.png',
    speech: 'Laravel: Desarrollando aplicaciones Web en PHP',
    description: 'En esta charla vamos a hablar de como Laravel es una buena opción para el desarrollo desde una aplicación simple, un SaaS o para aplicaciones enterprises. Hablaremos de PHP (the good, testable and object oriented kind). Como los diferentes componentes del framework permiten un desarrollo rápido y ágil. También desarrollar una pequeña aplicación y mostrar algunas de las formas como Laravel nos puede ayudar. Se hablará sobre TDD, IoC, Dependency Injection y buenas prácticas. También mencionar el ecosistema de Laravel y como llegar de download to deploy.',
    schedule: '2:00 PM'
  }, {
    id: 22,
    name: 'Leonardo Jimenez',
    lastText: 'Bio',
    face: 'img/leonardojimenez.jpg',
    category: 'img/process.png',
    speech: 'Refactoring: Keeping your code healthy',
    description: 'Your code will decay, that’s a law of software, entropy will win… if you don’t work hard on improving the way your code works. The purpose of this talk is to illustrate a few estrategies for finding and improving the hygiene of your code in order to keep your application easy to change and healthier.',
    schedule: '2:00 PM'
  }, {
    id: 23,
    name: 'Eduardo Burgos',
    lastText: 'Bio',
    face: 'img/eduardoburgos.jpg',
    category: 'img/open.png',
    speech: 'File -> New -> Project. Una aplicación desde cero con NineJS y TypeScript',
    description: 'Esta charla es un resumen de como iniciar un proyecto de una aplicación web single-page desde cero utilizando NineJS (framework de mi autoría), Node, y desarrollando en TypeScript.',
    schedule: '2:00 PM'
  }, {
    id: 24,
    name: 'Raydelto Hernandez',
    lastText: 'Bio',
    face: 'img/raydeltohernandez.jpg',
    category: 'img/emprendimiento.png',
    speech: 'Desarrollo Rápido de Videojuegos Con Javascript y Cocos2d-x',
    description: 'Hoy día existen muchas herramientas para crear videojuegos, todas tienen sus ventajas y desventajas. Esta charla te enseñará a crear videojuegos utilizando solamente un editor de texto y un browser como herramientas y posteriormente como empaquetar tu juego de manera nativa para las plataformas Android y iOS utilizando como herramienta Cocos2d-x.',
    schedule: '2:00 PM'
  },{
    id: 25,
    name: 'Rendy del Rosario',
    lastText: 'Bio',
    face: 'img/rendydelrosario.jpg',
    category: 'img/mobile.png',
    speech: 'Ciclo de vida del desarrollo de una aplicación móvil',
    description: 'En esta charla veremos cuales son los procesos y pasos que debemos considerar al desarrollar una aplicación móvil, desde el levantamiento de requerimientos hasta la publicación de esta.',
    schedule: '3:00 PM'
  }, {
    id: 26,
    name: 'Jose Gratereaux',
    lastText: 'Bio',
    face: 'img/JoseGratereaux.jpg',
    category: 'img/cloud.png',
    speech: 'Seguridad en Aplicaciones web (Ethical Hacking)',
    description: 'Generalmente un programador le dedica poco tiempo a las pruebas de seguridad de su aplicación a la hora de desarrollarla. Es mas importantes que las funcionalidades o modulos trabajen correctamente, aveces obviando temas relacionados con la seguridad de la información que se aloja ahí.',
    schedule: '3:00 PM'
  }, {
    id: 27,
    name: 'David Hemmat',
    lastText: 'Bio',
    face: 'img/12394591_10156441873730347_1532536231_o.jpg',
    category: 'img/web.png',
    speech: 'Desarrollo rápido en Rails',
    description: 'En esta charla hablaremos un poco acerca de el uso de Rails para el desarrollo de MVPs y otras aplicaciones que deben ser desarrolladas de manera rápida. Veremos en que casos Rails tiene sentido y en que casos no, y algunas ventajas y desventajas de Rails vs. otras plataformas.',
    schedule: '3:00 PM'
  }, {
    id: 28,
    name: 'Julissa Mateo',
    lastText: 'Bio',
    face: 'img/julissamateo.jpg',
    category: 'img/process.png',
    speech: 'Software Testing para Desarrolladores',
    description: 'Introducir a los presentes a las pruebas no manuales de software, ver técnicas y desafíos a la hora de automatizar, y mostrarles demos de herramientas para distintos tipos de pruebas (Desktop, Web y Mobile.) utilizadas en el mercado el día de hoy. Especialmente: Testing en enfoques tradicionales Testing en enfoques ágiles Para la charla seria bueno que los participantes tengan pre instalado un trial de 30 de Días del HP UFT-QTP solo para el demo, pero ademas se mostraran otras alternativas.',
    schedule: '3:00 PM'
  }, {
    id: 29,
    name: 'René Olivo',
    lastText: 'Bio',
    face: 'img/reneolivo.jpg',
    category: 'img/open.png',
    speech: 'Aurelia SPAs',
    description: 'Veremos una aplicación de reservaciones de vehículos hecha en Aurelia y estudiaremos todos los componentes que ofrece el framework para facilitar el desarrollo de SPAs (Single Page Aplications).',
    schedule: '3:00 PM'
  }, {
    id: 30,
    name: 'Luis Ramirez',
    lastText: 'Bio',
    face: 'img/luis-e1448989493290.jpg',
    category: 'img/emprendimiento.png',
    speech: '¿Cuál es el miedo? Sal de tu zona de confort.',
    description: 'En nuestro día a día nos olvidamos que existe algo mas allá de nuestro “8 a 5” y nos cerramos a conocer otros horizontes. Nuestra negación a aprender cosas nuevas hace que lamentablemente, nos perdamos de cosas más interesantes. Nuestro miedo a cambiar de trabajo, ambiente y sobre todo comodidad virtual, a veces nos estanca profesionalmente. Te mostraré como salir de tu zona de confort y cambiar tu manera de pensar; como convertirte en un desarrollador remoto y qué herramientas de la vida diaria necesitas para hacer que todos los días sean domingos :). Deja de esperar que las cosas pasen, sal ahí afuera y haz que pasen.',
    schedule: '3:00 PM'
  },{
    id: 31,
    name: 'Andrés Pineda',
    lastText: 'Bio',
    face: 'img/pineda.jpg',
    category: 'img/mobile.png',
    speech: 'Introducción a databinding en Xamarin Android',
    description: 'Ven y explora el mundo de los DataBindings en el contexto de Xamarin Android, y verás como aumentar tu productividad, para poder disfrutar más de la vida en vez de estar escribiendo amarres manualmente.',
    schedule: '4:00 PM'
  }, {
    id: 32,
    name: 'Mitra Mejía',
    lastText: 'Bio',
    face: 'img/mitramejia.jpg',
    category: 'img/cloud.png',
    speech: 'Desarollo de tiendas eCommerce con Shopify',
    description: 'Shopify como CMS para tiendas eCommerce presenta una solucion rapida y robusta para el desarrollo de tiendas eCommerce. Goza de amplia popularidad entre los clientes y administradores de tiendas online, pero y los developers? Exploraremos las ventajas y desventajas de este CMS.',
    schedule: '4:00 PM'
  }, {
    id: 33,
    name: 'Vivian Guillén',
    lastText: 'Bio',
    face: 'img/vivianguillen-e1452091222796.jpg',
    category: 'img/web.png',
    speech: 'UiKit – A better alternative to Bootstrap',
    description: 'Nowadays it’s very common to use a css framework to develop web applications, from MVP’s to full fledged production applications. The most used of these frameworks is Bootstrap. This talk aims to open the mind of the attendees to a particular alternative to bootstrap called UIkit and how it compares to other css frameworks.',
    schedule: '4:00 PM'
  }, {
    id: 34,
    name: 'Claudio Sánchez',
    lastText: 'Bio',
    face: 'img/claudio-e1448989478557.jpg',
    category: 'img/process.png',
    speech: 'Slack-Driven-Development',
    description: 'Acortar el circulo de retroalimentación (reducing the feedback loop) permite eficientizar y aumentar la calidad de un equipo de desarrollo. Ven y aprende como la herramienta de comunicación llamada Slack puede convertirse en el corazón de tu proceso, permitiéndote reducir dicho ‘feedback loop’, y centralizando la información producida por el gran número de herramientas y procesos utilizados en “Software Engineering” de forma habitual.',
    schedule: '4:00 PM'
  }, {
    id: 35,
    name: 'David Contreras',
    lastText: 'Bio',
    face: 'img/davidcontreras1.jpg',
    category: 'img/open.png',
    speech: 'El poder de EmberJS',
    description: 'Ember.js es un framework JavaScript, basado inicialmente en MVC(model-view-Controller). Esto permite a los desarrolladores crear SPA(single page aplication) incorporando un lenguaje común y el uso de mejores practicas dentro del framework.',
    schedule: '4:00 PM'
  }, {
    id: 36,
    name: 'Jorge Vargas',
    lastText: 'Bio',
    face: 'img/jorgevargas.jpg',
    category: 'img/emprendimiento.png',
    speech: '10 cosas que me hubiera gustado que me dijeran antes de arrancar mi compañía',
    description: 'En esta charla, Jorge Vargas nos comparte puntos importantes en los cuales pensar antes de lanzarse de manera independiente, armar una compañía o startup.en el panorama de RD y el mundo.',
    schedule: '4:00 PM'
  }];


  var speakers = [{
    id: 0,
    name: 'Arturo Mejia',
    lastText: 'Soy desarrollador de aplicaciones moviles (Android), amante de la tecnología, los desafíos y el conocimiento, cuando no estoy programando, hago turismo interno para conocer mejor mi país.',
    face: 'img/arturo_mejia_marmol.jpg'
  }, {
    id: 1,
    name: 'Federico Muller',
    lastText: 'Especialista de Soluciones de Plataformas de Aplicaciones en Microsoft Latam New Markets.',
    face: 'img/federicomuller.jpg'
  }, {
    id: 2,
    name: 'Johan Prevot',
    lastText: 'Johan Prevot, ingeniero sistema, con más de 10 años en el área de desarrollo de aplicaciones tanto escritorio y web, actualmente desarrollador Senior en Diario Libre, me apasionan las estadísticas y aprender la nueva plataforma, mi lenguaje preferido es PHP y nada me gano la vida pegando block.',
    face: 'img/JohanPrevot.jpg'
  }, {
    id: 3,
    name: 'Lorenzo Solano',
    lastText: 'Lorenzo Solano is an enterprise application developer with strong experience in Java EE and the Java Platform. He also works with .NET framework, languages and technologies. Lorenzo likes to describe himself as a husband, outdoors lover and cross-fit practitioner.',
    face: 'img/lorenzosolano.jpg'
  }, {
    id: 4,
    name: 'José Elias',
    lastText: 'José Elías tiene más de 20 años ofreciendo consultoría de negocios y desarrollo de software para empresas Global 1000 en Estados Unidos, Europa y casi todos los países suramericanos.',
    face: 'img/joseelias.jpg'
  }, {
    id: 5,
    name: 'Armando Manzueta',
    lastText: 'Armando Manzueta es Especialista en Tecnologías de la Información y la Comunicación para el Desarrollo. Labora en el Instituto Dominicano de las Telecomunicaciones (INDOTEL) donde se ha vinculado en el elaboracion de la Agenda Digital de la Republica Dominicana 2016-2020.',
    face: 'img/armandomanzueta.jpg'
  }, {
    id: 6,
    name: 'Claudio Henriquez',
    lastText: 'Claudio tiene multiples años de experiencia en el area de UX/UI, trabajando como freelancer con multiples startups y estudios internacionalmente. Actualmente cursa una tecnicatura en Diseño Agil de Experiencia de Usuario de la universidad de Palermo en Buenos Aires, Argentina.',
    face: 'img/claudiohenriquez.jpg'
  }, {
    id: 7,
    name: 'Angel Garcia',
    lastText: 'Angel es Ingeniero de Sistemas de Información egresado de la Universidad APEC, con experiencia en desarrollo de sistemas web, aplicaciones móviles (Android) y diseño de interfaces. Forma parte de un equipo de profesionales del desarrollo de software llamado WEARECODE.',
    face: 'img/angelgarcia.jpg'
  }, {
    id: 8,
    name: 'Frankely Diaz',
    lastText: 'Programador, aficionado a la fotografía. Interesado en aprender más sobre IOT y el lado social del desarrollo de software.',
    face: 'img/frankelydiaz.jpg'
  }, {
    id: 9,
    name: 'Jorge Vargas',
    lastText: 'Usted probablemente no ha visto a Jorge pero está en todas partes todo el tiempo. Él ha sido reajustado para rastrear errores extraños, la construcción de arquitecturas simples, y la búsqueda de proyectos que se ajustan a lo que el equipo quiere trabajar. Lo alimentan la discusión de temas de interés, la búsqueda de soluciones simples a problemas complejos, la sonrisa de una hermosa joven, buena comida y pasar un buen rato con los amigos.',
    face: 'img/jorgevargas.jpg'
  }, {
    id: 10,
    name: 'Noe Branagan',
    lastText: 'Desarrollador con más de 10 años de experiencia, especializado en el desarrollo de aplicaciones móviles; Trainer, charlista internacional; Organizador la comunidad para desarrolladores GDG Santo Domingo; DevFest Santo Domingo.',
    face: 'img/noebranagan.jpg'
  }, {
    id: 11,
    name: 'Lorenzo Martinez',
    lastText: 'Desde el 2003 soy profesional de Ingeniería de Sistemas, analista programador en ambientes win32 y web. Basta experiencia en el desarrollo de aplicaciones empresariales, digitalización de documentos y automatización de procesos: tanto en el sector privado como en el Estado Dominicano.',
    face: 'img/lorenzomartinez.jpg'
  }, {
    id: 12,
    name: 'René Olivo',
    lastText: 'René Olivo es programador de aplicaciones web a tiempo completo, es co-organizador del grupo Agnóstico, y le gusta tomar más cervezas que las que debería.',
    face: 'img/reneolivo.jpg'
  }, {
    id: 13,
    name: 'German Popoteur',
    lastText: 'I’m a software developer with a strong interested in business development and a focus on accomplishing business goals. I have experience in web and mobile development using different technologies, but my main interest is web development using latest trends, standards and technologies. I enjoy writing code following the best practices both for the frontend and backend of an application. I’ve been developing for more than 10 years in different technologies and stacks.',
    face: 'img/germanpopoter.jpg'
  }, {
    id: 14,
    name: 'Jose Gratereaux',
    lastText: '',
    face: 'img/JoseGratereaux.jpg'
  }, {
    id: 15,
    name: 'Enerdo Serrata',
    lastText: 'Fundador de Marcos Organizador de negocios, empresa de software en el area de administracion de recursos empresariales (ERP) Presidente de EYM Importadores SRL empresa familiar y líder en distribución de pinturas arquitectónicas, industriales, marinas y automotrices expertos en asesoría y en evaluación de estructuras para la correcta aplicación de pintura.',
    face: 'img/eneldoserrata.jpg'
  }, {
    id: 16,
    name: 'Rendy del Rosario',
    lastText: 'Ingeniero Telemático con Master en Tecnología de la Información y Telemáticas Avanzadas en la Universidad de Murcia, España. Tiene 7 años trabajando en el desarrollo de aplicaciones moviles para las plataformas de iOS, Android y Sencha Touch. Actualmente esta certificado como Xamarin Mobile Developer y Sencha Touch / Ext JS Instructor. Co-fundador de Maven, empresa especializada en el desarrollo de aplicaciones moviles, actualmente Xamarin Consulting Partner.',
    face: 'img/rendydelrosario.jpg'
  }, {
    id: 17,
    name: 'Alexander Matos',
    lastText: 'Apasionado por la informática desde 1990, he trabajado con diferentes tecnologías que en su momento marcaron la pauta para grandes sistemas, hoy en día utilizo todo lo aprendido para fortalecer el framework que sostiene uno de los sistemas de control financiero mas importante de nuestro país y que conforma el eje central de la organización gubernamental el SIGEF.  En mi tiempo libre disfruto de la mecánica, plomeria, electricidad y la electrónica, siendo esta ultima la que mas me apasiona.  Padre de 2 hijos, con uno por nacer, me caracterizo por ser sociable y colaborardor. Me encanta enseñar y aprender de los demás.',
    face: 'img/alexanderMatos.jpg'
  }, {
    id: 18,
    name: 'Caupolican Nuñez',
    lastText: 'Caupolican is a Software Engineer, Father of Two and Geek extraordinaire. Born and Raised in the fires of mount doom also know as the Dominican Republic. Where he graduated form the Instituto Tecnico Salesiano (ITESA). We was later put on a spaceship and send to the US where he attended the Interamerican University of Puerto Rico with a Computer Science degree. Since then has become a full stack developer, and lover of all things mobile. Caupolican now lives in Minnesota where his favorite hobbies include cursing the weather, flying drones and writing tons of code.',
    face: 'img/caupolicannunez.jpg'
  }, {
    id: 19,
    name: 'David Contreras',
    lastText: 'Ingeniero en Sistema egresado de la Universidad O&M, amante de la tecnologia, la buena comida y del billar.',
    face: 'img/davidcontreras1.jpg'
  }, {
    id: 20,
    name: 'Mitra Mejía',
    lastText: 'Mitra estudió Desarrollo de Software en el Instituto Tecnológico de las Américas. Es un peculiar híbrido entre desarrollador y diseñador web. Le apasiona resolver problemas de forma pragmática y simple. Cuando no esta sentado en la computadora disfruta de la compañía de sus amigos.',
    face: 'img/mitramejia.jpg'
  }, {
    id: 21,
    name: 'José Taveras',
    lastText: 'Jose Gregorio Taveras tiene mas de 7 años de experiencia en asp.net y c#,cuenta con amplia experiencia en arquitectura SOA y ambientes Oracle. actualmente trabajando para la empresa aseguradora mas grande del país como líder de proyectos, trabajando desde la concepción hasta la implementación de diferentes proyectos.',
    face: 'img/josegregorio.jpg'
  }, {
    id: 22,
    name: 'Julissa Mateo',
    lastText: 'Software, languages, music and books lover. Estudié el tecnólogo en desarrollo de software en el ITLA y soy egresada de UNIBE en ing. En TICs. Varios años en el área de desarrollo trabajando como Software dev, Analista de requerimientos y SQA. Actualmente trabajo como Senior software engineer en Claro Dominicana.',
    face: 'img/julissamateo.jpg'
  }, {
    id: 23,
    name: 'Eduardo Burgos',
    lastText: 'Eduardo es un entusiasta del desarrollo de software, arquitecto de software en Novosit. Tiene experiencia en lenguajes .Net (C#, F#), Node.js y algunas otras tecnologías que van de la mano y que no vale la pena mencionarlas todas. Apasionado por los lenguajes de programación, los frameworks, la carne a la parrilla y la cerveza.',
    face: 'img/eduardoburgos.jpg'
  }, {
    id: 24,
    name: 'Ariel Santana',
    lastText: 'Desarrollador y humorista. Egresado del Instituto Técnico en el cual aprendió su primera profesión… y también la segunda.',
    face: 'img/arielsantana.jpg'
  }, {
    id: 25,
    name: 'Jonathan Montero',
    lastText: 'Apasionado y abanderado del Software Libre y la informática en general, Administrador de redes, Sistemas GNU/Linux, Sysops en Azure y Analista de Seguridad. También ha obtenido experiencia en el área de seguridad de redes con firewalls como Fortinet, Sonicwall y CheckPoint. Experiencia en redes inalámbricas con radios Ubiquity y Cisco. Ha trabajado en varias empresas del mercado local obteniendo así mucha experiencia laboral. También se dedica a la capacitación de GNU/Linux en la ACL(Academia Código Libre). Es conductor del segmento “La Ruta Tecnológica” que se transmite todos los jueves a las 5:30PM por la Emisora VidaFM 105.3 (www.vidafm.org).',
    face: 'img/jonathanmontero.jpg'
  }, {
    id: 26,
    name: 'Raydelto Hernandez',
    lastText: 'Raydelto Hernández Perera es Ingeniero de sistemas, graduado de la PUCMM, Santo Domingo (2005). Posee Maestrías en Administración Estratégica, PUCMM(2010), y en Tecnología de la Información, concentración Ingeniería de Software de la Universidad Stevens Institute of Technology de Nueva Jersey, Estados Unidos (2014).',
    face: 'img/raydeltohernandez.jpg'
  }, {
    id: 27,
    name: 'Leonardo Jimenez',
    lastText: 'Leonardo Jimenez, Ingeniero Industrial en su vida pasada, es entusiasta de la programación y las buenas practicas. Es cofundador y Full Stack Developer en Codetiger. Co-organizador de las comunidades de Python y Javascript Dominicana.',
    face: 'img/leonardojimenez.jpg'
  }, {
    id: 28,
    name: 'Onil Pereyra',
    lastText: 'Engineer, with an MBA from the University of Quebec, Canada. Professional experience in the area of technology and business development for over 10 years. He is CEO and co-founder of Dweeter.com, Tessyl.com and CompraSegura.do. He is CTO of FJLabs.com, one of the companies most important angel investors worldwide, which develops and invests in startups in the US (Silicon Valley) and the rest of the world; including: Beepi.com, DeRemate.com, OLX.com, instacarro.com, of which he is co-founder and CTO. Represents h4bc.org, an organization which works on the development of social entrepreneurship worldwide. He is an advisor and investor in several international and local startups. Investor in GESARC GROUP SRL, Smilehelps.com, Instaofer.com and iQSoft.co. Previous:. VP of product development at lofy.com, NYC and Engineering Manager at Claro, Dominican Republic.',
    face: 'img/onilpereyra.jpg'
  }, {
    id: 29,
    name: 'Vivian Guillén',
    lastText: 'Economista y Frontend Developer, co-fundadora de Codetiger y entusiasta del bitcoin, cuando no esta codeando esta organizando Pyladies Santo Domingo.',
    face: 'img/vivianguillen-e1452091222796.jpg'
  }, {
    id: 30,
    name: 'David Hemmat',
    lastText: 'David es fundador y developer en Blue Coding LLC, y egresado de Ingeniería Telemática de PUCMM. Pasa la mayor parte de su tiempo trabajando con Ruby on Rails y desarrollando su negocio. Juega futbol cada vez que puede.',
    face: 'img/12394591_10156441873730347_1532536231_o.jpg'
  }, {
    id: 31,
    name: 'Luis Ramirez',
    lastText: 'Luis Ramirez tiene mas de 8 años de experiencia escribiendo software tanto el mercado local como internacional en la plataforma .NET y es una de las personas responsables de que comunidades como c#.do y Mobile.Do existan. Ademas de que es un apasionado a las buenas practicas y del buen software.',
    face: 'img/luis-e1448989493290.jpg'
  }, {
    id: 32,
    name: 'Andrés Pineda',
    lastText: 'Hijo, padre (3), Software Developer, gadget lover, love all kind of music. #Comerhierro es parte de mi vida.',
    face: 'img/pineda.jpg'
  }, {
    id: 33,
    name: 'Claudio Sánchez',
    lastText: 'Claudio es un Arquitecto de Software, experto en el arte de maximizar la cantidad de trabajo no hecho. Claudio tiene amplia experiencia implementando mejores practicas de diseño de Software y ha estado trabajando con .NET Framework desde la versión 1.0. Actualmente se encuentra envuelto en varias iniciativas de Open Source, soluciones en la nube y soluciones móviles. Las tecnologías con las que trabaja en el día a día, incluye: Xamarin, C#, MVVM, Silverlight, WCF, Windows Identity Foundation, SOA, iOS, Android, Windows Phone, ETC.',
    face: 'img/claudio-e1448989478557.jpg'
  }];
  
    var sponsors = [{
    id: 0,
    img: 'img/sponsor1.png'
  }, {
    id: 1,
    img: 'img/sponsor2.png'
  }, {
    id: 2,
    img: 'img/sponsor3.jpg'
  },{
    id: 3,
    img: 'img/sponsor4.jpg'
  },{
    id: 4,
    img: 'img/sponsor5.jpg'
  },{
    id: 5,
    img: 'img/sponsor6.png'
  },{
    id: 6,
    img: 'img/sponsor7.png'
  },{
    id: 7,
    img: 'img/sponsor8.png'
  },{
    id: 8,
    img: 'img/sponsor9.jpg'
  },{
    id: 9,
    img: 'img/sponsor10.jpg'
  }];
  return {
   getSponsors: function(){
      return sponsors;  
    },
    getSpeakers: function(){
      return speakers;  
    },
    all: function() {
      return speeches;
    },
    remove: function(speech) {
      speeches.splice(speeches.indexOf(speech), 1);
    },
    get: function(speechId) {
      for (var i = 0; i < speeches.length; i++) {
        if (speeches[i].id === parseInt(speechId)) {
          return speeches[i];
        }
      }
      return null;
    },
    getSpeaker: function(speechId) {
      for (var i = 0; i < speakers.length; i++) {
        if (speakers[i].id === parseInt(speechId)) {
          return speakers[i];
        }
      }
      return null;
    }
  };
});

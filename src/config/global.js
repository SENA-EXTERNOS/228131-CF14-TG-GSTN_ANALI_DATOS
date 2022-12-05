export default {
  global: {
    componenteFormativo: 'Profundización en <em>Data Science</em>',
    descripcionCurso:
      'En este componente formativo se estudiará el <em>Data Science</em> o ciencia de datos con sus componentes fundamentales en el procesamiento y análisis de los mismos; para esto, se aplicarán herramientas de tratamiento y manipulación de datos como <em>Numpy</em>, <em>Pandas</em>, y <em>Matplotlib</em>. Finalmente, con la adición de modelos de <em>Machine Learning</em> se generarán predicciones para orientar a las organizaciones en la formulación de estrategias y la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Machine learning y Data science</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Numpy</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Pandas</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<em>Matplotlib</em>',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Aprendizaje supervisado',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Aprendizaje no supervisado',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelos de <em>machine learning	</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Regresión y clasificación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'K vecinos más cercanos (KNN)	',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Máquina de soporte vectorial (SVM):',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Árboles de decisión',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: '<em>Clustering</em>',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Redes neuronales<em> Deep learning</em>',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Librería <em>Matplotlib</em>',
      referencia:
        'Alberola, J. (2021). <em>Matplotlib</em> [video]. Universidad Politecnica de Valencia. ',
      tipo: 'Video',
      link: 'https://riunet.upv.es/handle/10251/168966',
    },
    {
      tema: 'Librería <em>Numpy</em>',
      referencia:
        'Alberola J. (2021). <em>Operaciones básicas con Numpy</em> [video]. Universidad Politecnica de Valencia ',
      tipo: 'Video',
      link: 'https://riunet.upv.es/handle/10251/168551',
    },
    {
      tema: 'Librería Pandas',
      referencia:
        'Lluch, J. (2022). <em>Introducción a la librería Pandas</em>. [video]. Universidad Politecnica de Valencia. ',
      tipo: 'Video',
      link: 'https://riunet.upv.es/handle/10251/183074',
    },
    {
      tema: '<em>Machine Learning</em>',
      referencia:
        'Quispe, A. (2020). <em>Uso de Machine Learning en la creación de páginas web a medida de los usuarios. Campus</em>, 25(30), 337-344.',
      tipo: 'Artículo',
      link: 'https://www.usmp.edu.pe/campus/pdf/revista30/articulo9.pdf ',
    },
    {
      tema: 'Redes Neuronales',
      referencia:
        'Repetur, A. (2019). <em>Redes neuronales artificiales</em>. [Trabajo final presentado para obtener el título de Licenciado en Ciencias Matemáticas]. Universidad Nacional del Centro de la Provincia de Buenos Aires. ',
      tipo: 'Trabajo final',
      link:
        'https://underpost.net/ir/pdf/redes/ciencias_matematicas_redes_neuronales.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje no Supervisado',
      significado:
        'se usa cuando por la cantidad de datos o su complejidad, las herramientas de <em>hardware</em> y <em>software</em> tradicionales no son capaces de almacenar y/o procesar dichos datos en un tiempo razonable.',
    },
    {
      termino: 'Aprendizaje Supervisado',
      significado:
        'el aprendizaje supervisado es un tipo de <em>Machine learning</em> en el cual se toma una muestra de datos que contienen etiquetas, para luego, a través de diferentes algoritmos, entrenar un modelo que sea capaz de predecir o clasificar una nueva entrada de datos que no esté en los datos originales o de muestra',
    },
    {
      termino: '<em>Clustering</em>>',
      significado:
        'es un método de aprendizaje no supervisado que agrupa los datos en subconjuntos llamados <em>clusters</em>.',
    },
    {
      termino: '<em>Machine learning</em>',
      significado:
        'es el proceso por el cual las máquinas “aprenden” con base en los datos o información previamente suministrada.',
    },
    {
      termino: '<em>Matplotlib</em>',
      significado:
        'es una librería de <em>Python</em> que se especializa en la generación de gráficos de dos dimensiones, siendo una de las aplicaciones históricas dentro de su repositorio y empleada por la gran mayoría de los usuarios de la comunidad',
    },
    {
      termino: 'Modelos de clasificación',
      significado:
        'son un tipo de aprendizaje inductivo que predicen valores numéricos a partir de un dominio suministrado de atributos con valores continuos que se podrán describir a través de una función hipótesis para la predicción de eventos futuros.',
    },
    {
      termino: 'Modelos de regresión',
      significado:
        'inteligencia artificial - Es la simulación de procesos de inteligencia humana por parte de máquinas.',
    },
    {
      termino: '<em>Numpy</em>',
      significado:
        'Es una poderosa librería de <em>Python</em> que se especializa en analizar y realizar cálculos numéricos a los datos con eficiencia, particularmente cuando el insumo son grandes cantidades de información.',
    },
    {
      termino: '<em>Pandas</em>',
      significado:
        'es una librería de <em>Python</em> experta en la manipulación y análisis de datos. Además ofrece visualizaciones que permiten simplificar la estadística descriptiva mediante la aplicación de funciones simples.',
    },
    {
      termino: 'Redes neuronales',
      significado:
        'son algoritmos de inteligencia artificial que procesan los datos de forma similar al cerebro humano',
    },
    {
      termino: 'Visión artificial',
      significado:
        'aplicación de las redes neuronales que extraen información desde imágenes o videos y son procesadas con algoritmos de <em>Deep learning</em> que facilitan la distinción y reconocimiento de forma similar a la visión humana.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bobadilla, J. (2020). <em>Machine learning y deep learning: usando python, scikit y keras</em>. Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10277',
    },
    {
      referencia:
        'Bosch, A. Casas, J. & Lozano,T. (2019). <em>Deep learning: principios y fundamentos</em>. Editorial UOC.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/126167',
    },
    {
      referencia:
        'Cuevas, A. (2018). <em>Aplicaciones gráficas con Python 3</em>. Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9084',
    },
    {
      referencia:
        'Toro, F. (2022). <em>Ciencia de los datos con Python</em>. Ecoe Ediciones.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=20994',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

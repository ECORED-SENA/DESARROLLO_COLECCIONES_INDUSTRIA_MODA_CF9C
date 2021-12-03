export default {
  global: {
    componenteFormativo: 'Trazo y corte en la industria de la confección',
    descripcionCurso:
      'Un desarrollador de colecciones en la industria de la moda debe poder hacer la distribución de las piezas, patrones o moldes de las prendas optimizando la materia, siguiendo el proceso de extender las telas llevando un estricto control de calidad; luego, el corte de cada una de las piezas cumpliendo especificaciones técnicas; entre estas operaciones, se deben tener en cuenta operaciones secundarias.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
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
        titulo: 'Conceptos generales de trazo y corte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación y programación de trazo y corte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Programación de fabricación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Liquidación de corte',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Formato de programación de corte',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aprovisionamiento, recepción y almacenamiento de telas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Trazo industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Sistemas para trazar',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Proceso de miniaturización',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Trazo sistematizado',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo:
              'Trazo en telas con rayas, cuadros, estampados y tejido con pelo',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Espigas en el trazo',
            hash: 't_4_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.6',
            titulo: 'Cálculo de consumo o promedios',
            hash: 't_4_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.7',
            titulo: 'Eficiencia del trazo',
            hash: 't_4_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.8',
            titulo: 'Ploteo de trazos',
            hash: 't_4_8',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
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
  referencias: [
    {
      referencia: 'Arelisamiga. (2010). Clasificación del tizado. Slideshare.',
      link: 'https://es.slideshare.net/arelisamiga/clasificacion-del-tizado',
    },
    {
      referencia:
        'Centro Nacional Textil. (1980). Orillos en tejido plano. SENA Regional Medellín.',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/6194/orillos_tejido_plano.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia: 'Coltejer. (2017). Manual de calidad. Textiles.',
      link: 'https://es.scribd.com/document/361876235/Manual-Calidad',
    },
    {
      referencia:
        'Contacto Textil. (2019). Manual de calidad y recomendaciones',
      link:
        'http://contactotextil.com.co/wp-content/uploads/2019/03/Manual-de-calidad-y-recomendaciones-Contacto-Textil.pdf',
    },
    {
      referencia:
        'Giraldo, M. (1990). Procesos básicos en la sala de corte. SENA.',
      link: 'https://hdl.handle.net/11404/4259',
    },
    {
      referencia:
        'Gómez, C. (2019). Automatización del corte en el sector textil confección. Universidad EAFIT.',
      link:
        'https://repository.eafit.edu.co/bitstream/handle/10784/13797/CarlosIgnacio_GomezMu%c3%b1oz_2019.pdf?sequence=2&isAllowed=y',
    },
    {
      referencia:
        'Jaramillo, J. (1990). Confecciones Industriales. Planificación del corte industrial. SENA.',
      link: 'https://hdl.handle.net/11404/3994',
    },
    {
      referencia:
        'Lafayette Sports. (s. f.). Pasos indispensables para el proceso de confección.',
      link:
        'https://www.lafayettesports.com.co/noticias/confeccion-deportiva/como-lograr-colecciones-deportivas-a-traves-de-un-proceso-de-confeccion-efectivo/',
    },
    {
      referencia:
        'Marimar. (2016). Costura – Glosario de Corte y Confección. Bricolaje10.com.',
      link: 'https://bricolaje10.com/glosario-de-la-costura/',
    },
    {
      referencia: 'Tèxtil Balsareny. (2019). ¿Qué es una orden de corte?',
      link: 'https://textilbalsareny.com/blog/orden-corte',
    },
  ],
  glosario: [
    {
      termino: 'Abertura',
      significado:
        'Separación de las partes de algo, dejando al descubierto el interior. Hendidura, agujero. (Marimar, 2016)',
    },

    {
      termino: 'Abullonado',
      significado:
        'Formar bolsas mediante fruncidos o pliegues. (Marimar, 2016)',
    },

    {
      termino: 'Acabado',
      significado:
        'El acabado en los tejidos es la finalización o remate. (Marimar, 2016)',
    },

    {
      termino: 'Afinar',
      significado:
        'Finalizar un patrón, dándole una forma apropiada. (Marimar, 2016)',
    },

    {
      termino: 'Alfiler',
      significado:
        'Clavo metálico con punta en un extremo y cabeza en el otro, que sirve para sujetar, entre otras cosas, telas. (Marimar, 2016)',
    },

    {
      termino: 'Alfiletero',
      significado: 'Lugar para guardar alfileres y agujas.',
    },

    {
      termino: 'Bajo',
      significado: 'Dobladillo o ruedo. (Marimar, 2016)',
    },
    {
      termino: 'Bies',
      significado:
        'Trozo de tela cortado en sesgo respecto al hilo, que se aplica a los bordes de prendas de vestir. (Marimar, 2016)',
    },

    {
      termino: 'Corte',
      significado:
        'Es la separación de una tela en piezas, las cuales conforman en su conjunto una prenda de vestir. (Sena, 2012)',
    },
    {
      termino: 'Entretela',
      significado:
        'Material aglomerado de hilo, con fusionado que da refuerzo a las piezas.',
    },

    {
      termino: 'Entretelar',
      significado:
        'Pegar la entretela al material por medio de calor. (Marimar, 2016)',
    },

    {
      termino: 'Orillo',
      significado:
        'Está formado por una trama tupida a cada lado del largo de la tela, para darle resistencia a esta. Las prendas cortadas en el sentido del hilo o urdimbre, es decir, a lo largo de la tela, son las que menos se deforman y dan una mejor presentación a la confección. (Sena, 2012). <br>Se le denomina al borde del tejido donde los hilos transversales cambian su dirección. (Marimar, 2016)',
    },

    {
      termino: 'Piquetes',
      significado:
        'Pequeños cortes que marcan la pauta en la costura. (Marimar, 2016)',
    },

    {
      termino: 'Sesgo o bies',
      significado:
        'Se llama sesgo o bies al sentido diagonal de las telas. Cuando las telas se cortan en sentido diagonal, o al sesgo, ceden y se deforman con facilidad. (Sena, 2012)',
    },

    {
      termino: 'Tijeras',
      significado:
        'Herramienta para cortar. Es la denominación general de todos los hilos que debiendo entrelazarse en ángulo recto, o sea a lo ancho, atraviesan y enlazan los hilos longitudinales de la urdimbre. (Marimar, 2016)',
    },

    {
      termino: 'Trama',
      significado:
        'La trama la forman los hilos que van de orillo a orillo, formando el ancho de la tela. (Sena, 2012)',
    },

    {
      termino: 'Urdimbre o hilo',
      significado:
        'Se llama urdimbre a los hilos que van en el sentido del largo de la tela. Es comúnmente conocida como el hilo de la tela. (Sena, 2012). <br>Denominación con que se distingue al conjunto de los hilos dispuestos en cantidad y longitud previamente establecidos y sobre los cuales descansan la mayoría de las lazadas, disposiciones técnicas y las de ejecución mecánica. (Marimar, 2016)',
    },
  ],
  complementario: [
    {
      texto:
        'Clúster Textil / Confección, Diseño y Moda. (2017). Corte de prendas de vestir / Manual de uso. Alcaldía de Medellín; Cámara de Comercio de Medellín para Antioquia; Clúster Textil / Confección, Diseño y Moda.',
      tipo: 'Cartilla',
      descarga: '/downloads/anexo1.pdf',
    },
    {
      texto: 'Arelisamiga. (2010). Clasificación del tizado. Slideshare.',
      tipo: 'PDF',
      descarga: '/downloads/anexo2.pdf',
    },
    {
      texto:
        'Lafayette Sports. (s. f.). Pasos indispensables para el proceso de confección.',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Contacto Textil. (2019). Manual de calidad y recomendaciones.',
      tipo: 'PDF',
      descarga: '/downloads/anexo3.pdf',
    },
    {
      texto:
        'Plotter Technology. (s. f.-a). Ficha técnica <em>FastJet PRO</em>.',
      tipo: 'PDF',
      descarga: '/downloads/anexo4.pdf',
    },
    {
      texto:
        'Plotter Technology. (s. f.-b). Ficha técnica <em>Static Duet Table</em>. ',
      tipo: 'PDF',
      descarga: '/downloads/anexo5.pdf',
    },
    {
      texto: 'Giraldo, M. (1990). Procesos básicos en la sala de corte. SENA. ',
      tipo: 'PDF',
      descarga: '/downloads/anexo6.pdf',
    },
    {
      texto:
        'Gómez, C. (2019). Automatización del corte en el sector textil confección. Universidad EAFIT. ',
      tipo: 'PDF',
      descarga: '/downloads/anexo7.pdf',
    },
    {
      texto:
        'Inexmoda. (2011). Desde Italia llega maquinaria para tecnificar el sector textil [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?t=368&v=TyAkNDnrVlo&feature=youtu.be',
    },
    {
      texto:
        'Textile Machinery. (2016). ST-HBT-07I Carrito de transporte de rollos de tela [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bcwIwRsZcqU&feature=youtu.be',
    },
    {
      texto: 'Coltejer. (2017). Manual de calidad. Textiles. ',
      tipo: 'PDF',
      descarga: '/downloads/anexo8.pdf',
    },
    {
      texto: 'Osorio, M., Yepes, M. y Sepúlveda, R. (2021). Normas de calidad.',
      tipo: 'PDF',
      descarga: '/downloads/anexo9.pdf',
    },
    {
      texto:
        'Centro Nacional Textil. (1980). Orillos en tejido plano. SENA Regional Medellín.',
      tipo: 'PDF',
      descarga: '/downloads/anexo10.pdf',
    },
    {
      texto: 'PlotterMarker. (2009). Video Card Cutter [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qa4D5N5xaT0&feature=youtu.be',
    },
    {
      texto:
        'PlotterMarker. (2017). <em>ST One Head working in Quito</em> [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=a2IHmMnsNl4&feature=youtu.be',
    },
    {
      texto: 'Eastman Machine. (s. f.). <em>SLS3 For Stack Labeling</em>.',
      tipo: 'Video',
      link: 'https://www.eastmancuts.com/news/sls3-for-stack-labeling/',
    },
    {
      texto:
        'Patronista Virtual. (2016). Capítulo 14 Como Agrupar Trazos para Espigas [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Zr97RjNUq4Q&feature=youtu.be',
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
      {
        nombre: 'Marisol Osorio Beltrán',
        cargo: 'Líder Sennova',
        centro: 'Centro de diseño confección y moda - Regional Antioquia.',
      },
      {
        nombre: 'María Luisa Yepes Sierra',
        cargo: 'Instructor',
        centro: 'Centro de diseño confección y moda - Regional Antioquia.',
      },
      {
        nombre: 'Ramiro Sepúlveda Pérez',
        cargo: 'Instructor',
        centro: 'Centro de diseño confección y moda - Regional Antioquia.',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Diseño y Metrología - Regional distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Carlos Julián Ramírez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },*/
    ],
    gestoresRepositorio: [
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

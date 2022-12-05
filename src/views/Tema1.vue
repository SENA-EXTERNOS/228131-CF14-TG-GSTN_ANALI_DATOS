<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 #[em Machine learning] y #[em Data science]
    
    .row.justify-content-center.mb-5
      .col-xl-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='')
      .col-xl-8
        p(data-aos="fade-down") #[em Machine learning] es el proceso por el cual las maquinas “aprenden” con base en los datos o información previamente suministrada. Esto, a diferencia de la programación tradicional en donde las instrucciones son específicas y dependen del tipo de problemática a resolver; en el #[ machine learning], se desarrollan algoritmos generales que tienen la capacidad de obtener patrones aplicables a distintos tipos de datos.                 
        p(data-aos="fade-right") Por lo tanto, una aplicación de #[em machine learning] que está diseñada, por ejemplo, para realizar una clasificación de fotos de números aleatorios, podría también utilizarse para clasificar imágenes de señales de tránsito. Debido a que ambas problemáticas se resuelven con un algoritmo de clasificación de datos etiquetados (Bobadilla, 2020).
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-derecha.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5( style="background-color: #BDDCF6")
            .bloque-texto-g__img.d-flex.align-items-center
              figure
                img(src='@/assets/curso/temas/tema1/img2.png', alt='' )
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                .row.justify-content-center.align-items-center.mb-5                  
                  p La Ciencia de Datos o “#[em Data science]”, se utiliza para el estudio de grandes volúmenes de datos, los cuales, en su mayoría, son generados en internet y por consiguiente, cuando se diligencia un formulario o realizan búsquedas e interacciones con el contenido de una página web, se estará dejando registros en una base de datos que podrán ser procesados con #[em Data science].                
                  br
                  br
                .row.justify-content-center.align-items-center.mb-5
                  p.mb-o Para implementar técnicas de carga, manipulación y visualización de datos en #[em Machine learning] y #[em Data science] con el lenguaje de programación #[em Python] se estudiarán algunas de sus principales y más famosas librerías como son #[em Numpy], pandas y #[em Matplotlib].
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Para reforzar sus conceptos sobre este tema, se le invita a ver el artículo “Uso de #[em machine learning] en la creación de páginas #[em web] a medida de los usuarios” de Ana Milagros Quispe Rodríguez. (2020) que se encuentra en el material complementario.

    Separador

    .row
      .col-xl-12       
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.1	 #[i Numpy]

    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical2.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
          p.mb-0 #[em Numpy] es una poderosa librería de #[em python] que se especializa en analizar y realizar cálculos numéricos a los datos con eficiencia, particularmente cuando el insumo son grandes cantidades de información. Esta librería inserta a #[em Python] los #[em arrays] para representar conjuntos de datos de un mismo tipo y varias dimensiones. Así mismo, incorpora funciones para manipular eficientemente los datos.
    
    .bg--img_03.mb-5
      .row.justify-content-center
        .col-lg-10
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Utilizar <em>Numpy</em>")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img4.svg', alt='' )
              .col-10
                p Para utilizar la librería de #[em Numpy], se debe cargar de la siguiente manera:
                .row.align-items-center                                    
                  .col-lg-4(style="background-color:#ffffff")
                    p 
                      .codigo1 #[span import] numpy
                p Una vez importada, se pueden utilizar todas las funcionalidades que incorpora dicha librería, cabe resaltar que es posible emplear la librería con el nombre por defecto “#[em numpy]” o también de forma práctica a través de una abreviación, como se muestra a continuación:
                .row.align-items-center                                    
                  .col-lg-4(style="background-color:#ffffff")
                    p 
                      .codigo1 #[span import] numpy #[span as] np
                p De esta forma en adelante cuando se desee utilizar la librería #[em numpy] solo se debe escribir “np”.
                p A continuación, un ejemplo básico de un #[em array] con #[em numpy]:
                .row.align-items-center.mb-3                                  
                  .col-lg-6(style="background-color:#ffffff")
                    .codigo2 
                      p.mb-3 import numpy as np
                      p.mb-0 ejemplo_lista = [10, 20, 30,40,50]
                      p.mb-0 np.array(ejemplo_lista)

                p La salida del código anterior mostrará como resultado lo siguiente:
                p 
                  .codigo2 array([#[span 10,20,30,40,50]])
                p La expresión #[em array]() muestra que la salida del código ya no será una lista normal de #[em Python], si no, un arreglo de #[em numpy].                

            .row.justify-content-center.mb-4(titulo="Definición de un <em>array</em>")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img5.svg', alt='' )
              .col-10
                p.mb-3 Para definir arreglos deberás identificar las dimensiones de este y emplear la sintaxis que se muestra seguidamente:
                ul.lista-ul
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |Arreglos de 1 dimensión
                  .row.align-items-center.mb-3                                  
                    .col-lg-6(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img5_1.svg', alt='' )
                        

                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |Arreglos de 2 dimensiones 
                  .row.align-items-center.mb-3                                  
                    .col-lg-6(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img5_2.svg', alt='' )
                  
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |Arreglos de 3 dimensiones 
                  .row.align-items-center.mb-3                                  
                    .col-lg-8(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img5_3.svg', alt='' )
                 
            .row.justify-content-center.mb-4(titulo="Acceso a un <em>array</em>")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img6.svg', alt='' )
              .col-10
                p.mb-0 Para acceder a los datos que se encuentran en un array se utilizan los índices, teniendo en cuenta que la posición inicial siempre es ‘0’; de manera que si se quiere tener acceso al primer valor del “arreglo_2” que es el número “1”, el código a utilizar es:
                .row.align-items-center.mb-3                                  
                  .col-lg-6(style="background-color:#ffffff")
                    figure
                    img(src='@/assets/curso/temas/tema1/img6_1.svg', alt='' )
                p Por lo tanto, si se requiere acceder al segundo valor del “arreglo_2”, que es el número 2 se debe:
                .row.align-items-center.mb-3                                  
                  .col-lg-6(style="background-color:#ffffff")
                    figure
                    img(src='@/assets/curso/temas/tema1/img6_2.svg', alt='' )

            .row.justify-content-center.mb-4(titulo="Atributos de un <em>array</em>")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img7.svg', alt='' )
              .col-10
                p Para conocer las características que describen un array podrás utilizar las siguientes funciones de #[em numpy]:
                ul.lista-ul
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[em ndim]: devuelve la cantidad de dimensiones de un arreglo.
                  .row.align-items-center.mb-3                                  
                    .col-lg-6(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img7_1.svg', alt='' )

                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[em shape]: devuelve las dimensiones del arreglo en forma de tupla.
                  .row.align-items-center.mb-3                                  
                    .col-lg-6(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img7_2.svg', alt='' )
                  
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[em size]: devuelve la cantidad de elementos del arreglo.
                  .row.align-items-center.mb-3                                  
                    .col-lg-6(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img7_3.svg', alt='' )
                  
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[em dtype]: devuelve el tipo de datos que contiene el arreglo.
                  .row.align-items-center.mb-3                                  
                    .col-lg-6(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img7_4.svg', alt='' )

            .row.justify-content-center.mb-4(titulo="Creación de un <em>array</em>")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img8.svg', alt='' )
              .col-10
                p #[em Numpy] se puede integrar con funciones que facilitan la creación de arreglos entre las cuales se encuentran las siguientes: 
                ul.lista-ul
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[em Random]: permite crear un array con valores aleatorios.
                  .row.align-items-center.mb-3                                  
                    .col-lg-8(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img8_1.svg', alt='' )
                  p Como podrás evidenciar se creó un arreglo de 2 dimensiones, con 2 filas y 4 columnas de números aleatorios.
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[em Zeros]: esta función devuelve un array con elementos en "cero".
                  p #[b Ejemplo 1]: se creará un arreglo unidimensional de 5 elementos.
                  .row.align-items-center.mb-3                                  
                    .col-lg-4(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img8_2.svg', alt='' )
                  p #[b Ejemplo 2]: se creará un arreglo de 2 dimensiones de 2 filas y 3 columnas. 
                  .row.align-items-center.mb-3                                  
                    .col-lg-4(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img8_3.svg', alt='' )
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[em Arange]: esta función de numpy es utilizada para retornar un arreglo con números enteros que estén en un intervalo, donde el primer parámetro indica el inicio con valores mayores o iguales (>=) y el segundo parámetro el final, con valores menores (<).
                  .row.align-items-center.mb-3                                  
                    .col-lg-4(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img8_4.svg', alt='' )
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Para reforzar sus conceptos sobre este tema se puede consultar el video de Alberola Oltra, J. M. (2021) operaciones básicas con #[em numpy], que se encuentra en el material complementario.


    Separador

    .row
      .col-xl-12       
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.2	 #[i Pandas ]

    .row.justify-content-center.mb-5
      .col-xl-4
        figure
          img(src='@/assets/curso/temas/tema1/img9.png', alt='')
      .col-xl-8
        p(data-aos="fade-down") Pandas es una librería de #[em Python] experta en la manipulación y análisis de datos. Además, ofrece visualizaciones que permiten simplificar la estadística descriptiva mediante la aplicación de funciones simples; esta capacidad minimiza el esfuerzo en el análisis exploratorio de los datos al igual que la exhibición de los resultados. (Toro, 2022).

        p(data-aos="fade-down") Beneficios de usar pandas:
        ul.lista-ul
          li
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
            |Capacidad de sacar provecho de métodos nativos para manipular datos faltantes.

          li
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
            |Uso simple para describir y clasificar datos.
          
          li
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
            |Creación rápida de gráficos.
          
          li
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
            |Manejo eficiente de imágenes a través de indexación booleana.
          
          li
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
            |Posibilidad para trabajar con muchos tipos de datos: enteros, cadenas de textos, números decimales, objetos, entre otros.

          li(style="display:block")
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
            |Fácil integración con la librería #[em Numpy].
    
    .bg--img_03.mb-5
      .row.justify-content-center
        .col-lg-10
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Clases de datos en pandas")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img10.svg', alt='' )
              .col-10
                p Pandas soporta varias arquitecturas de datos entre las que se destacan las series y los Dataframes. A continuación, se detalla cada una de ellas:
                ul.lista-ul
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[b Series]:una serie es un objeto similar a un array de una dimensión que permite varias formas para la indexación de datos del mismo tipo. (Toro, 2022).
                p Las series tienen un tamaño fijo que no se puede modificar; sin embargo, su contenido puede ser actualizado a través del índice que identifica a cada elemento dentro de la serie.
                p En la siguiente figura se muestra una serie que contiene algunas competencias para el análisis de datos:
                .row.justify-content-center.align-items-center.md-5
                  .col-12
                    .titulo-sexto.color-acento-contenido
                      h5 Figura 1
                      br
                      span #[em Serie en pandas]
                .row.align-items-center.mb-5
                  .col-lg-8
                    figure
                      img(src='@/assets/curso/temas/tema1/img15.png', alt='' )

            .row.justify-content-center.mb-4(titulo="Creación de series")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img11.svg', alt='' )
              .col-10
                p Las series se pueden crear a partir de listas y diccionarios; estas estructuras de datos se basan en la librería #[em numpy], pero con nuevas funcionalidades.
                ul.lista-ul
                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[b Creación de series con listas]: en este tipo de series se retorna un objeto con los elementos de la lista. La sintaxis es: pandas.Series(data, índice, tipo). Los parámetros, índices y tipo son opcionales; en caso de no pasarlos a la función está crea el índice por defecto e infiere el tipo de datos.                  
                p En el siguiente ejemplo se crea una serie a partir de una lista:
                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img16.png', alt='' )
                .codigo1 
                  p Similar que en la librería #[em Numpy], para utilizar pandas deberás importarla así: “#[span import] pandas #[span as] pd”.
                
                ul.lista-ul
                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[b Creación de series con diccionarios]: este tipo de series retornan un objeto con los elementos del diccionario y las filas que se le ingresan como índices. La sintaxis es: pandas.Series(diccionario, índice). El parámetro índice es opcional; si no se pasa a la función, se emplean como índice los valores del diccionario:
                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img17.png', alt='' )
                

            .row.justify-content-center.mb-4(titulo="<em>Dataframe</em>")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img12.svg', alt='' )
              .col-10
                p Los Dataframe son objetos de estructuras de datos similares a una tabla, donde las columnas corresponden a elementos de un mismo tipo y las filas son registros que pueden contener distintos tipos de datos.

                p Los #[em Dataframes] poseen dos índices; uno para las columnas y otro para las filas. El acceso a los datos se puede realizar a través de estos. 

                .titulo-sexto.color-acento-contenido
                  h5 Figura 2
                  br
                  span #[em Dataframe en pandas]
                .row.align-items-center.mb-5
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/temas/tema1/img18.png', alt='' )


            .row.justify-content-center.mb-4(titulo="Creación de <em>Dataframe</em>")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img13.svg', alt='' )
              .col-10
                p Para crear un Dataframe se encuentran varios métodos, entre los cuales, se destacan: diccionario de listas, lista de listas, lista de diccionario, por array, por ficheros csv o excel, entre otros.
                ul.lista-ul
                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b Creación de #[em Dataframe] por diccionario de listas]: Los #[em Dataframe] por diccionarios retornan un objeto, donde las columnas son los valores del diccionario y la lista de filas debe tener el mismo tamaño de las columnas. A continuación, se presenta un ejemplo para mayor claridad:
                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img19.png', alt='' )

                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b Creación de #[em Dataframe] por lista de listas]: Los #[em Dataframe] de lista de listas retornan un objeto con los elementos de la lista de listas, donde las columnas deben ser declaradas con el parámetro “#[em columns]” y las filas creadas con el mismo tamaño de las columnas; en caso contrario se llenarán los datos faltantes con valores NaN.
                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img20.png', alt='' )
                  
                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b Creación de #[em Dataframe] por lista de diccionario]: Los #[em Dataframe] de lista de diccionario retornan un objeto con los elementos de la lista del diccionario, en donde se crea por bloque los valores tanto de columnas como filas.
                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img21.png', alt='' )
                  
                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b Creación de #[em Dataframe] por #[em array]]: Los #[em Dataframe] por #[em array] retornan un objeto donde los elementos de las columnas y filas son los declarados en el #[em array].
                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img22.png', alt='' )

            .row.justify-content-center.mb-4(titulo="Atributos de un <em>Dataframe</em>")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img14.svg', alt='' )
              .col-10
                p Para la manipulación de los Dataframes se realiza a través de métodos o propiedades:
                ul.lista-ul
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b info()]: este método retorna información referente a la estructura del #[em dataframe] como: números de filas, columnas, índices, entre otros.
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b shape]: retorna el número de filas y columnas.
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b size]: Retorna la cantidad de elementos del #[em dataframe].
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b columns]: retorna el nombre de las columnas del #[em dataframe].
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b Index]: retorna el nombre de las filas del #[em dataframe].
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b dtypes]: retorna el tipo de datos de la columna seleccionada del #[em dataframe].
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b head(x)]: retorna las primeras “x” filas del #[em dataframe].
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    |#[b Tail(x)]: retorna las últimas”x” filas del #[i dataframe].
                p A continuación, se muestra a través de un ejemplo el resultado de cada uno de los métodos mencionados:
                .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img23.png', alt='' )
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para ampliar el tema de manejo de datos con panda, ver la siguiente videoclase.
    .row.justify-content-center.align-items-center.md-5.mb-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed//J9_xVhV_pfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-contenido.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Para reforzar sus conceptos sobre este tema, ver el video de Lluch Crespo, J. (2022). Introducción a la librería Pandas, que se encuentra en el material complementario.

    Separador

    .row
      .col-xl-12       
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.3	 #[i Matplotlib]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-derecha.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color: #BDDCF6")
            .bloque-texto-g__img.d-flex.align-items-center
              figure
                img(src='@/assets/curso/temas/tema1/img24.png', alt='' )
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                .row.justify-content-center.align-items-center.mb-5                  
                  p #[em Matplotlib] es una librería de #[em Python] que se especializa en la generación de gráficos de dos dimensiones, siendo una de las aplicaciones históricas dentro de su repositorio y empleada por la gran mayoría de los usuarios de la comunidad. Es de gran utilidad en el campo científico debido a su potencial para elaborar gráficos de alta calidad. (Cuevas, 2018).
                  br
                  br
                .row.justify-content-center.align-items-center.mb-5
                  p.mb-o Es importante mencionar que la librería #[em Matplotlib] depende de la librería #[em Numpy] para su correcto funcionamiento. Además, en principio se diseñó para apoyar los componentes del lenguaje de programación #[em MATLAB].

      .row.justify-content-center.align-items-center.mb-5
        .col-md-2.bloque_verticall.d-none.d-md-block.mb-md-0
        .col-md-10.mb-md-0
          .px-2
            h5(data-aos="zoom-in-left") Crear gráficos con #[em Matplotlib]
            p #[em Matplotlib] posee un módulo llamado #[em Pyplot] que proporciona una interfaz sencilla y de fácil uso para generar gráficos. También es significativamente valiosa para crear figuras en pocas líneas de código sin declarar los respectivos ejes
            p En los siguientes pasos se mostrará de forma general la creación de un gráfico usando #[em Matplotlib] y su módulo #[em  pyplot]:

      .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-primario
          p(numero="1" titulo="Paso 1") Importar la librería #[em Matplotlib] y el módulo #[em pyplot]

          p(numero="2" titulo="Paso 2") Establecer el tipo de figura que tendrá el gráfico.

          p(numero="3" titulo="Paso 3") Trazar los datos sobre los ejes del plano.

          p(numero="4" titulo="Paso 4") Ajustar y/o personalizar el gráfico.

          p(numero="5" titulo="Paso 5") Mostrar el gráfico.

      .col-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img25.png', alt='' )
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En el siguiente ejemplo se encuentra la creación de un gráfico con la librería Matplotlib y el módulo pyplot. Para ello, se crearán dos variables (x, y), a las que posteriormente se les asignan valores y finalmente se mostrará la gráfica resultante:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img26.png', alt='' )

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        h3 Tipos de gráficos
        p Con #[em Matplotlib] podrás crear los gráficos más comunes y útiles para el análisis de los datos, además se pueden realizar combinaciones entre ellos; lo cual permite flexibilidad y personalización en las visualizaciones. A continuación, se presentan algunos ejemplos:
    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Gráfico de dispersión")
        .row        
          .col-md-7          
            p La función #[em scatter](a, b) crea un diagrama de puntos, donde las coordenadas “a” y “b” forman los puntos del plano para el eje “x” y el eje “y” respectivamente:
            .row
              .col-lg-8
                figure
                  img(src='@/assets/curso/temas/tema1/img27.png', alt='')              
          .col-md-5.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 4
              br
              span #[em Gráfico de dispersión]
            figure
              img(src='@/assets/curso/temas/tema1/img28.png', alt='')
      
      .py-3.py-md-4(titulo="Gráfico de líneas")
        .row        
          .col-md-7          
            p La función #[em plot](a, b) crea una figura geométrica plana, donde las coordenadas “a” y “b” forman los puntos del plano para el eje “x” y el eje “y” respectivamente y luego se conectan los segmentos consecutivamente
            .row
              .col-lg-8
                figure
                  img(src='@/assets/curso/temas/tema1/img29.png', alt='')              
          .col-md-5.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 5
              br
              span #[em Gráfico de líneas]
            figure
              img(src='@/assets/curso/temas/tema1/img30.png', alt='')
      
      .py-3.py-md-4(titulo="Gráfico de barras verticales")
        .row        
          .col-md-7          
            p La función #[em bar](a, b) crea un diagrama de barras, donde las coordenadas “a” es la posición de las barras en el eje “x” y “b” es la altura de las barras en el eje “y”.
            .row
              .col-lg-8
                figure
                  img(src='@/assets/curso/temas/tema1/img32.png', alt='')              
          .col-md-5.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 6
              br
              span #[em Gráfico de líneas]
            figure
              img(src='@/assets/curso/temas/tema1/img31.png', alt='')
      
      .py-3.py-md-4(titulo="Gráfico de barras verticales")
        .row        
          .col-md-7          
            p La función #[em hist](a, bins) crea un histograma a partir de la agrupación de las frecuencias de una lista “a”. El eje “y” muestra la cantidad de veces que se repite el dato que se encuentra en el eje “x”.
            .row
              .col-lg-8
                figure
                  img(src='@/assets/curso/temas/tema1/img33.png', alt='')              
          .col-md-5.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 7
              br
              span #[em Gráfico de líneas]
            figure
              img(src='@/assets/curso/temas/tema1/img34.png', alt='')

      .py-3.py-md-4(titulo="Gráfico <em>Boxplot</em>")
        .row        
          .col-md-7          
            p La función #[em hist](a, bins) crea un histograma a partir de la agrupación de las frecuencias de una lista “a”. El eje “y” muestra la cantidad de veces que se repite el dato que se encuentra en el eje “x”.
            .row
              .col-lg-8
                figure
                  img(src='@/assets/curso/temas/tema1/img35.png', alt='')              
          .col-md-5.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 8
              br
              span #[em Gráfico de líneas]
            figure
              img(src='@/assets/curso/temas/tema1/img36.png', alt='')

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Para reforzar sus conceptos sobre este tema, ver el video de Alberola Oltra, J. M. (2021) #[em Matplotlib]; que se encuentra en el material complementario.

    separador
    .row
      .col-xl-12       
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.4	Aprendizaje supervisado
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
              img(src='@/assets/curso/temas/tema1/img37.svg', alt='')
      .col-lg-9
        p(data-aos="fade-down") El aprendizaje supervisado es un tipo de #[em Machine learning] en el cual se toma una muestra de datos que contienen etiquetas, para luego a través de diferentes algoritmos entrenar un modelo que sea capaz de predecir o clasificar una nueva entrada de datos que no esté en los datos originales o de muestra. Por ejemplo, se tiene una serie de imágenes de diferentes animales con sus respectivos metadatos asociados a la clase de animal que pertenece, así: (imagen1.png, “pájaro”), (imagen2.png,” perro”), (imagen3.png, “gato”). Con base en estos datos se podría implementar un modelo de clasificación que sea capaz de predecir si una nueva imagen que se ingresa al modelo es un pájaro, un perro o un gato. (Bobadilla, 2020).
    
    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Fuentes de información externa 
            p(data-aos="fade-down").mb-4 Son aquellas que tienen su origen por fuera de la organización, por ejemplo, agencias externas, empresas de investigación o entidades gubernamentales. Estas fuentes complementan las fuentes internas y ayudan a mejorar el análisis a realizar, ofreciendo información del contexto que no tenía la organización.
            p(data-aos="fade-down").mb-4 Algunos ejemplos de las fuentes de información externas son los datos abiertos (u open data), los datos pagos y los datos de redes sociales. Los datos abiertos son datos disponibles de forma gratuita casi siempre por entidades gubernamentales y que todos pueden usar y redistribuir sin condiciones ni restricciones de derechos de autor. Los datos pagos son datos disponibles de forma comercial creados o adquiridos por el proveedor de datos, que se ofrece por un valor a la organización y que pueden ser usados por esta, pero no redistribuidos o publicados (por ejemplo, las bases de datos de registros en las cámaras de comercio). Los datos de redes sociales son todos los datos compartidos por los usuarios en las plataformas de redes sociales y que mediante técnicas de #[i Web Scraping] pueden ser descargados de estos sitios y aprovechados en los proyectos de ciencias de datos de la organización (ejemplo, los comentarios de las publicaciones realizadas en Twitter por la organización para evaluar el nivel de satisfacción de los clientes con los productos o servicios ofrecidos).
            ul.lista-ul
              li(style="display:inline-block")
                i.fas.fa-check(style="color:#FECA2E;top:0px")
                |#[b Regresión]: se requiere predecir el costo que tendría una casa con base en las características de entrada como; estrato, número de habitaciones, antigüedad, ubicación, tamaño, entre otros.

              li(style="display:inline-block")
                i.fas.fa-check(style="color:#FECA2E;top:0px")
                |#[b Clasificación]: se requiere predecir si un correo electrónico es o no un correo malicioso o spam
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img38.svg', alt='')
        
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Algoritmos de aprendizaje supervisado
            p Entre los algoritmos más populares de aprendizaje supervisado están:
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Regresión lineal
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Regresión polinomial
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Vecinos más cercanos (KNN)
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Máquina de soporte vectorial (SVM)
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Árbol de decisión
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Regresión logística
            p En la siguiente unidad llamada “modelos de #[em machine learning]”, se ahondará en cada uno de los algoritmos antes descritos.



          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img39.svg', alt='')

    separador
    .row
      .col-xl-12       
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 1.5 Aprendizaje no supervisado
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img40.png', alt='')
      .col-lg-7
        p(data-aos="fade-right") El aprendizaje no supervisado es una categoría del #[em Machine learning] que encuentra o infiere por sí mismo estructuras y patrones en los datos sin que ellos estén etiquetados, clasificados y categorizados. Su función principal a diferencia del aprendizaje supervisado no es predecir, sino que se encarga de describir las estructuras del conjunto de datos que se le suministre.
        p(data-aos="fade-right")  Por ejemplo, se requiere obtener un clasificador de tipos de autos por lo que no sería viable etiquetar a los millones de autos que hay en las calles. En este caso aplica un algoritmo de aprendizaje no supervisado para agruparlos por las características similares.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-derecha.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(style="background-color: #BDDCF6")
            .bloque-texto-g__img.d-flex.align-items-center
              figure
                img(src='@/assets/curso/temas/tema1/img41.png', alt='' )
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                h4 Algoritmos de aprendizaje no supervisado
                br
                br
                p Entre los algoritmos de aprendizaje no supervisado están los de agrupamiento o Clustering y los de generalización: los algoritmos de agrupamiento se encargan de dividir los datos en relación a características que no conoce y con base en su criterio; por otro lado, los algoritmos de generalización construyen las variables particulares en nuevas de alto nivel, por ejemplo, en los sistemas de recomendación o gestión de riesgos.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

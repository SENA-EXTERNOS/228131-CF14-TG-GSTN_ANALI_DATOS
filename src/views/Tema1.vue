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
        p(data-aos="fade-down") #[i Machine learning] es el proceso por el cual las máquinas “aprenden” con base en los datos o información previamente suministrada. A diferencia de la programación tradicional, en donde las instrucciones son específicas y dependen del tipo de problemática por resolver, en el #[i Machine learning], se desarrollan algoritmos generales que tienen la capacidad de obtener patrones aplicables a diferentes tipos de datos. 
        p(data-aos="fade-right") Por lo tanto, una aplicación como #[i Machine learning], que está diseñada para realizar, por ejemplo, una clasificación de fotos con números aleatorios, podría también utilizarse para clasificar imágenes de señales de tránsito, debido a que ambas problemáticas se resuelven con un algoritmo de clasificación de datos etiquetados. (Bobadilla, 2020) 
        
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
                  p La Ciencia de datos o #[i “Data science”] se utiliza para el estudio de grandes volúmenes de datos, los cuales, en su mayoría, son generados en Internet y, por consiguiente, cuando se diligencia un formulario o se realizan búsquedas e interacciones con el contenido de una página web, se estarán dejando registros en una base de datos, que podrán ser procesados con Data science. 
                  br
                  br
                .row.justify-content-center.align-items-center.mb-5
                  p.mb-o Para implementar técnicas de carga, manipulación y visualización de datos en #[i Machine learning] y #[i Data science], con el lenguaje de programación Python, se estudiarán algunas de sus principales y más famosas librerías, como son NumPy, Pandas y Matplotlib. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Para reforzar los conceptos sobre este tema, se le invita a ver el artículo “Uso de #[i Machine learning] en la creación de páginas web a medida de los usuarios” de Ana Milagros Quispe Rodríguez (2020), que se encuentra en el material complementario.

    Separador

    .row
      .col-xl-12       
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1. #[i Numpy]

    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical2.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
          p.mb-0 NumPy es una poderosa librería de Python, que se especializa en analizar y realizar cálculos numéricos, a los datos, con eficiencia, particularmente cuando el insumo se fundamenta en grandes cantidades de información. Esta librería inserta en Python los arrays, para representar conjuntos de datos de un mismo tipo y varias dimensiones. Así mismo, incorpora funciones para manipular eficientemente los datos.
    
    .bg--img_03.mb-5
      .row.justify-content-center
        .col-lg-10
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Utilizar NumPy")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img4.svg', alt='' )
              .col-10
                p Para utilizar la librería de NumPy, esta se debe cargar de la siguiente manera:
                .row.align-items-center                                    
                  .col-lg-4(style="background-color:#ffffff")
                    p 
                      .codigo1 #[span import] numpy
                p Una vez importada, se pueden utilizar todas las funcionalidades que incorpora dicha librería, cabe resaltar que es posible emplear la librería con el nombre por defecto “numpy”, o también de forma práctica, a través de una abreviación, como se muestra a continuación:
                .row.align-items-center                                    
                  .col-lg-4(style="background-color:#ffffff")
                    p 
                      .codigo1 #[span import] numpy #[span as] np
                p De esta forma, en adelante, cuando se desee utilizar la librería numPy, solo se debe escribir “np”.
                p A continuación, un ejemplo básico de un array con numPy:
                .row.align-items-center.mb-3                                  
                  .col-lg-6(style="background-color:#ffffff")
                    .codigo2 
                      p.mb-3 import numpy as np
                      p.mb-0 ejemplo_lista = [10, 20, 30,40,50]
                      p.mb-0 np.array(ejemplo_lista)

                p La salida del código anterior mostrará como resultado lo siguiente:
                p 
                  .codigo2 array([#[span 10,20,30,40,50]])
                p La expresión array() muestra que la salida del código ya no será una lista normal de Python, sino un arreglo de numPy.

            .row.justify-content-center.mb-4(titulo="Definición de un array")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img5.svg', alt='' )
              .col-10
                p.mb-3 Para definir arreglos, se deben identificar las dimensiones de este y emplear la sintaxis que se muestra a continuación:
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
                 
            .row.justify-content-center.mb-4(titulo="Acceso a un array")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img6.svg', alt='' )
              .col-10
                p.mb-0 Para acceder a los datos que se encuentran en un array, se utilizan los índices, teniendo en cuenta que la posición inicial siempre es ‘0’; de manera que si se quiere tener acceso al primer valor del “arreglo_2”, que es el número “1”, el código a utilizar es: 
                .row.align-items-center.mb-3                                  
                  .col-lg-6(style="background-color:#ffffff")
                    figure
                    img(src='@/assets/curso/temas/tema1/img6_1.svg', alt='' )
                p Por lo tanto, si se requiere acceder al segundo valor del “arreglo_2”, que es el número 2, se debe:
                .row.align-items-center.mb-3                                  
                  .col-lg-6(style="background-color:#ffffff")
                    figure
                    img(src='@/assets/curso/temas/tema1/img6_2.svg', alt='' )

            .row.justify-content-center.mb-4(titulo="Atributos de un array")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img7.svg', alt='' )
              .col-10
                p Para conocer las características que describen un array, se pueden utilizar las siguientes funciones de numPy:
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

            .row.justify-content-center.mb-4(titulo="Creación de un array")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img8.svg', alt='' )
              .col-10
                p NumPy se puede integrar con funciones que facilitan la creación de arreglos, entre las cuales se encuentran las siguientes: 
                ul.lista-ul
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    | #[b Random:] permite crear un array con valores aleatorios.
                  .row.align-items-center.mb-3                                  
                    .col-lg-8(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img8_1.svg', alt='' )
                  p Como se puede evidenciar, se creó un arreglo de 2 dimensiones, con 2 filas y 4 columnas de números aleatorios.
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    | #[b Zeros:] esta función devuelve un array con elementos en “cero”.
                  p #[b Ejemplo 1:] se creará un arreglo unidimensional de 5 elementos.
                  .row.align-items-center.mb-3                                  
                    .col-lg-4(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img8_2.svg', alt='' )
                  p #[b Ejemplo 2:] se creará un arreglo de 2 dimensiones de 2 filas y 3 columnas.
                  .row.align-items-center.mb-3                                  
                    .col-lg-4(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img8_3.svg', alt='' )
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    | #[b Arrange:] esta función de numPy es utilizada para retornar un arreglo con números enteros que estén en un intervalo, donde el primer parámetro indica el inicio con valores mayores o iguales (>=) y el segundo parámetro el final, con valores menores (<). 
                  .row.align-items-center.mb-3                                  
                    .col-lg-4(style="background-color:#ffffff")
                      figure
                      img(src='@/assets/curso/temas/tema1/img8_4.svg', alt='' )
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Para reforzar sus conceptos sobre este tema se puede consultar el video de Alberola Oltra, J. M. (2021) operaciones básicas con Numpy, que se encuentra en el material complementario.


    Separador

    .row
      .col-xl-12       
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2. #[em Pandas ]

    .row.justify-content-center.mb-5
      .col-xl-4
        figure
          img(src='@/assets/curso/temas/tema1/img9.png', alt='')
      .col-xl-8
        p(data-aos="fade-down") Pandas es una librería de Python experta en la manipulación y análisis de datos y, además, ofrece visualizaciones que permiten simplificar la estadística descriptiva, mediante la aplicación de funciones simples; esta capacidad minimiza el esfuerzo en el análisis exploratorio de los datos, al igual que la exhibición de los resultados. (Toro, 2022)

        p(data-aos="fade-down") Beneficios de usar Pandas:
        ul.lista-ul
          li(style="display:flex")
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;")
            | Capacidad de sacar provecho de métodos nativos para manipular datos faltantes.

          li(style="display:flex")
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;")
            | Uso simple para describir y clasificar datos.
          
          li(style="display:flex")
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;")
            | Creación rápida de gráficos.
          
          li(style="display:flex")
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;")
            | Manejo eficiente de imágenes a través de indexación booleana.
          
          li(style="display:flex")
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;")
            | Posibilidad para trabajar con muchos tipos de datos: enteros, cadenas de textos, números decimales, objetos, entre otros.

          li(style="display:flex")
            i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;")
            | Fácil integración con la librería NumPy.
    
    .bg--img_03.mb-5
      .row.justify-content-center
        .col-lg-10
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Clases de datos en Pandas")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img10.svg', alt='' )
              .col-10
                p Pandas soporta varias arquitecturas de datos, entre las que se destacan las series y los Dataframes. A continuación, se detalla cada una de ellas:
                ul.lista-ul
                  li
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:-2px")
                    | #[b Series: una serie es un objeto similar a un array de una dimensión que permite varias formas para la indexación de datos del mismo tipo (Toro, 2022).]
                p Las series tienen un tamaño fijo que no se puede modificar; sin embargo, su contenido puede ser actualizado a través del índice que identifica a cada elemento dentro de la serie.
                p En el siguiente esquema, se muestra una serie que contiene algunas competencias para el análisis de datos:

                .row.align-items-center.my-5
                  .col-lg-8
                    figure
                      img(src='@/assets/curso/temas/tema1/img15.png', alt='' )

            .row.justify-content-center.mb-4(titulo="Creación de series")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img11.svg', alt='' )
              .col-10
                p Las series se pueden crear a partir de listas y diccionarios; estas estructuras de datos se basan en la librería numPy, pero con nuevas funcionalidades.
                ul.lista-ul
                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    | #[b Creación de series con listas:] en este tipo de series, se retorna un objeto con los elementos de la lista. La sintaxis es: pandas.Series(data, índice, tipo). Los parámetros, índices y tipo son opcionales; en caso de no pasarlos a la función, esta crea el índice por defecto, e infiere el tipo de datos.
                p En el siguiente ejemplo, se crea una serie a partir de una lista:

                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img16.png', alt='' )
                .codigo1 
                  p Similar que en la librería NumPy, para utilizar Pandas se deberá importar así: “import pandas as pd”. 
                
                ul.lista-ul
                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1")
                    |#[b Creación de series con diccionarios:] este tipo de series retornan un objeto con los elementos del diccionario y las filas que se le ingresan como índices. La sintaxis es: pandas.Series(diccionario, índice). El parámetro índice es opcional, sino, se pasa a la función y se emplean como índice, los valores del diccionario:
                  .row.align-items-center.mb-5
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img17.png', alt='' )
                  .row.justify-content-center.align-items-center.mb-5
                    .col-lg-12
                     p La salida indica que los índices son las descripciones y los datos son los valores numéricos.
                

            .row.justify-content-center.mb-4(titulo="Dataframe")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img12.svg', alt='' )
              .col-10
                p Los #[b Dataframe:]  los dataframe son objetos de estructuras de datos similares a una tabla, donde las columnas corresponden a elementos de un mismo tipo y las filas son registros que pueden contener distintos tipos de datos.

                p Los dataframes poseen dos índices, uno para las columnas y otro para las filas. El acceso a los datos se puede realizar a través de estos. 

                .row.align-items-center.mb-5
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/temas/tema1/img18.png', alt='' )


            .row.justify-content-center.mb-4(titulo="Creación de Dataframe")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img13.svg', alt='' )
              .col-10
                p #[b Creación de dataframe:] para crear un dataframe, se encuentran varios métodos, entre los cuales, se destacan: diccionario de listas, lista de listas, lista de diccionario, por array, por ficheros CSV o Excel, entre otros.
                ul.lista-ul
                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[b Creación de Dataframe por diccionario de listas:] Los dataframe por diccionarios, retornan un objeto, donde las columnas son los valores del diccionario y la lista de filas debe tener el mismo tamaño de las columnas. A continuación, se presenta un ejemplo para mayor claridad:
                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img19.png', alt='' )

                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[b Creación de dataframe por lista de listas:] los dataframes de lista de listas, retornan un objeto con los elementos de la lista de listas, donde las columnas deben ser declaradas con el parámetro “columns” y las filas creadas con el mismo tamaño de las columnas; en caso contrario, se llenarán los datos faltantes con valores NaN. 
                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img20.png', alt='' )
                  
                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[b Creación de dataframe por lista de diccionario:] los dataframes de lista de diccionario, retornan un objeto con los elementos de la lista del diccionario, en donde se crean, por bloque, los valores, tanto de columnas como de filas.
                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img21.png', alt='' )
                  
                  li(style="display:inline-block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[B Creación de dataframe por array:] los dataframe por array, retornan un objeto donde los elementos de las columnas y filas son los declarados en el array. 
                  .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img22.png', alt='' )

            .row.justify-content-center.mb-4(titulo="Atributos de un Dataframe")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema1/img14.svg', alt='' )
              .col-10
                p #[b Atributos de un dataframe:] la manipulación de los dataframes, se realiza a través de métodos o propiedades: 
                ul.lista-ul
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[b info():] este método retorna información referente a la estructura del dataframe, como: cantidad de filas, columnas, índices, entre otros.
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[b shape:*] retorna la cantidad de filas y columnas.
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[b size]: retorna la cantidad de elementos del dataframe.
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[b columns:] retorna el nombre de las columnas del dataframe.
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[i Index:] retorna el nombre de las filas del dataframe.
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[b dtypes:] retorna el tipo de datos de la columna seleccionada del dataframe.
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[b head(x):] retorna las primeras “x” filas del dataframe.
                  li(style="display:block")
                    i.fas.fa-circle(style="font-size:10px;color:#4DD0E1;top:0px")
                    | #[b Tail(x):] retorna las últimas “x” filas del dataframe.
               
                p A continuación, se muestra, a través de un ejemplo, el resultado de cada uno de los métodos mencionados:

                .row.align-items-center.mb-3                                  
                    .col-lg-10(style="background-color:#ffffff")
                      figure
                        img(src='@/assets/curso/temas/tema1/img23.png', alt='' )
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Para ampliar el tema de manejo de datos con Pandas, ver la siguiente videoclase:
    .row.justify-content-center.align-items-center.md-5.mb-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed//J9_xVhV_pfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-contenido.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Refuerce este tema, visualizando atentamente el video Introducción a la librería Pandas, que se encuentra en el material complementario.

    Separador

    .row
      .col-xl-12       
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3. Matplotlib
    
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
                  p Matplotlib es una librería de Python que se especializa en la generación de gráficos de dos dimensiones, siendo una de las aplicaciones históricas dentro de su repositorio y empleada por la gran mayoría de los usuarios de la comunidad. Es de gran utilidad en el campo científico, debido a su potencial para elaborar gráficos de alta calidad. (Cuevas, 2018)
                  br
                  br
                .row.justify-content-center.align-items-center.mb-5
                  p.mb-o Es importante mencionar que la librería Matplotlib depende de la librería NumPy para su correcto funcionamiento. Además, en principio se diseñó para apoyar los componentes del lenguaje de programación MATLAB.

      .row.justify-content-center.align-items-center.mb-5
        .col-md-2.bloque_verticall.d-none.d-md-block.mb-md-0
        .col-md-10.mb-md-0
          .px-2
            h4(data-aos="zoom-in-left") Crear gráficos con Matplotlib
            p Matplotlib posee un módulo llamado Pyplot que proporciona una interfaz sencilla y de fácil uso para generar gráficos. También es significativamente valiosa para crear figuras en pocas líneas de código, sin declarar los respectivos ejes.
            p En los siguientes pasos, se mostrará de forma general, la creación de un gráfico usando Matplotlib y su módulo Pyplot:

      .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-primario
          p(numero="1" titulo="Paso 1") Importar la librería Matplotlib y el módulo Pyplot.

          p(numero="2" titulo="Paso 2") Establecer el tipo de figura que tendrá el gráfico.

          p(numero="3" titulo="Paso 3") Trazar los datos sobre los ejes del plano.

          p(numero="4" titulo="Paso 4") Ajustar y/o personalizar el gráfico.

          p(numero="5" titulo="Paso 5") Mostrar el gráfico.

      .col-8.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema1/img25.png', alt='' )
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p En el siguiente ejemplo, se encuentra la creación de un gráfico con la librería Matplotlib y el módulo Pyplot. Para esto, se crearán dos variables (x, y), a las que posteriormente se les asignan valores y, finalmente, se mostrará la gráfica resultante:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema1/img26.svg', alt='' )

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        h3 Tipos de gráficos
        p Con Matplotlib se podrán crear los gráficos más comunes y útiles para el análisis de los datos; además se pueden realizar combinaciones entre ellos, lo que permite flexibilidad y personalización en las visualizaciones. A continuación, se presentan algunos ejemplos:
    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Gráfico de dispersión")
        .row.justify-content-center.align-items-center
          .col-lg-4.my-5
            figure
              img(src='@/assets/curso/temas/tema1/img27.png', alt='')          
          .col-md-8
            p La función scatter(a, b) crea un diagrama de puntos, donde las coordenadas “a” y “b” forman los puntos del plano para el eje “x” y el eje “y”, respectivamente:
      
      .py-3.py-md-4(titulo="Gráfico de líneas")
        .row        
          .col-md-7          
            p La función plot(a, b) crea una figura geométrica plana, donde las coordenadas “a” y “b” forman los puntos del plano para el eje “x” y el eje “y” respectivamente y luego se conectan los segmentos consecutivamente:
            .row
              .col-lg-8
                figure
                  img(src='@/assets/curso/temas/tema1/img29.png', alt='')              
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/img30.png', alt='')
      
      .py-3.py-md-4(titulo="Gráfico de barras verticales")
        .row        
          .col-md-7          
            p La función bar(a, b) crea un diagrama de barras, donde las coordenadas “a” es la posición de las barras en el eje “x” y “b” es la altura de las barras en el eje “y”.
            .row
              .col-lg-8
                figure
                  img(src='@/assets/curso/temas/tema1/img32.png', alt='')              
          .col-md-5.mb-4.mb-md-0

            figure
              img(src='@/assets/curso/temas/tema1/img31.png', alt='')
      
      .py-3.py-md-4(titulo="Histogramas")
        .row        
          .col-md-7          
            p La función hist(a, bins) crea un histograma a partir de la agrupación de las frecuencias de una lista “a”. El eje “y” muestra la cantidad de veces que se repite el dato que se encuentra en el eje “x”.
            .row
              .col-lg-8
                figure
                  img(src='@/assets/curso/temas/tema1/img33.png', alt='')              
          .col-md-5.mb-4.mb-md-0

            figure
              img(src='@/assets/curso/temas/tema1/img34.png', alt='')

      .py-3.py-md-4(titulo="Gráfico Boxplot")
        .row        
          .col-md-7          
            p La función boxplot(a) crea un diagrama de tipo caja y bigotes, a partir de los datos suministrados en la lista “a”. El objetivo principal con este tipo de gráficos, es el de mostrar las características comunes de los datos.
            .row
              .col-lg-8
                figure
                  img(src='@/assets/curso/temas/tema1/img35.png', alt='')              
          .col-md-5.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido

            figure
              img(src='@/assets/curso/temas/tema1/img36.png', alt='')

    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Amplíe y refuerce conceptos y saberes sobre Matplotlib, explorando el video de Alberola Oltra, J. M. (2021) Matplotlib, el cual se encuentra en el material complementario.

    separador
    .row
      .col-xl-12       
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.	Aprendizaje supervisado
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
              img(src='@/assets/curso/temas/tema1/img37.svg', alt='')
      .col-lg-9
        p(data-aos="fade-down") El aprendizaje supervisado es un tipo de #[i Machine learning] en el cual se toma una muestra de datos que contiene etiquetas para, luego, a través de diferentes algoritmos, entrenar un modelo que sea capaz de predecir o clasificar una nueva entrada de datos que no esté en los datos originales o de muestra. Por ejemplo, se tiene una serie de imágenes de diferentes animales con sus respectivos metadatos, asociados a la clase de animal que pertenece; así: (imagen1.png, “pájaro”), (imagen2.png,” perro”), (imagen3.png, “gato”). Con base en estos datos, se podría implementar un modelo de clasificación que sea capaz de predecir si una nueva imagen que se ingresa al modelo, es un pájaro, un perro o un gato. (Bobadilla, 2020)
    
    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-6.mb-4.mb-md-0
            h3 Técnicas de aprendizaje supervisado
            p(data-aos="fade-down").mb-4 El aprendizaje supervisado cuenta con dos técnicas principales; la regresión y la clasificación. Estas se diferencian fundamentalmente en el valor que intentan predecir, por un lado, la regresión predice números continuos que puede tomar un rango muy amplio de valores, por otra parte, la clasificación solo tiene dos opciones 1 y 0, que pueden interpretarse como si o no. Para mayor claridad sobre estas técnicas a continuación se ilustran por medio de un caso de uso:
            ul.lista-ul
              li(style="display:inline-block")
                i.fas.fa-check(style="color:#FECA2E;top:0px")
                |#[b Regresión]: se requiere predecir el costo que tendría una casa con base en las características de entrada como; estrato, número de habitaciones, antigüedad, ubicación, tamaño, entre otros.

              li(style="display:inline-block")
                i.fas.fa-check(style="color:#FECA2E;top:0px")
                |#[b Clasificación]: se requiere predecir si un correo electrónico es o no un correo malicioso o #[i spam].
                
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img38.svg', alt='')
        
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Algoritmos de aprendizaje supervisado
            p Entre los algoritmos más populares de aprendizaje supervisado están:
            ul.lista-ul
              li(style="display:block")
                i.fas.fa-check(style="color:#FECA2E")
                | Regresión lineal.
              li(style="display:block")
                i.fas.fa-check(style="color:#FECA2E")
                | Regresión polinomial. 
              li(style="display:block")
                i.fas.fa-check(style="color:#FECA2E")
                | Vecinos más cercanos (KNN).
              li(style="display:block")
                i.fas.fa-check(style="color:#FECA2E")
                | Máquina de soporte vectorial (SVM).
              li(style="display:block")
                i.fas.fa-check(style="color:#FECA2E")
                | Árbol de decisión.
              li(style="display:block")
                i.fas.fa-check(style="color:#FECA2E")
                | Regresión logística.



          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img39.svg', alt='')

    separador
    .row
      .col-xl-12       
    .titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5. Aprendizaje no supervisado
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img40.png', alt='')
      .col-lg-7
        p(data-aos="fade-right") El aprendizaje no supervisado es una categoría del #[i Machine learning] que encuentra o infiere, por sí misma, estructuras y patrones en los datos, sin que estos se encuentren etiquetados, clasificados y categorizados. Su función principal, a diferencia del aprendizaje supervisado, no es predecir, sino que se encarga de describir las estructuras del conjunto de datos que se le suministre.
        p(data-aos="fade-right") #[b Por ejemplo,] se requiere obtener un clasificador de tipos de autos, por lo que no sería viable etiquetar a los millones de autos que hay en las calles. En este caso, aplica un algoritmo de aprendizaje no supervisado, para agruparlos por las características similares.

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
                p Entre los algoritmos de aprendizaje no supervisado se encuentran los de agrupamiento o #[i clustering], y los de generalización; los algoritmos de agrupamiento, se encargan de dividir los datos con relación a características que no conoce y con base en su criterio; por otro lado, los algoritmos de generalización, construyen las variables particulares de alto nivel; por ejemplo, en los sistemas de recomendación o gestión de riesgos.

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

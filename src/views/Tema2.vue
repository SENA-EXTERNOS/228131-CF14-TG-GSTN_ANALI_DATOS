<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelos de #[em Machine learning]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") En esta unidad del componente formativo ahondaremos en los distintos modelos de #[em Machine learning], tanto de aprendizaje supervisado como de aprendizaje no supervisado. En general estos modelos cumplen con los siguientes pasos u hoja de ruta: 
    
    PasosA.color-acento-botones.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Entendimiento de la problemática
          p Conocer el objetivo y variable a predecir e identificar el tipo de modelo a aplicar: regresión, clasificación o agrupación.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img1.png', alt='')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/img2.png', alt='')
        .col-md-6
          h3 Recopilación de los datos
          p Preparar y dividir los datos en entrenamiento y validación o testo.
          

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Entrenamiento del modelo
          p Aplicar el modelo a los datos de entrenamiento.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img3.png', alt='')

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Medición de desempeño
          p Evaluar el modelo a partir de sus métricas y rendimiento.
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img4.png', alt='')

    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical3.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
          p.mb-0 En la siguiente figura se ilustra el ciclo de un modelo de #[em machine learning], donde inicia con el suministro de los datos: luego se aplica el modelo de #[em machine learning] para generar una predicción y finalmente se actualiza para entrar en una nueva iteración.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 9
          br
          span #[em Ciclo de un modelo de Machine learning]
        figure
            img(src='@/assets/curso/temas/tema2/img6.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Antes de entrar en detalle con los modelos de #[em machine learning] es pertinente mencionar a una de las librerías más populares de #[em Data science] en #[em Python], llamada #[em scikit-learn], la cual contiene algoritmos de clasificación, regresión y agrupamiento. Además, es open source y de fácil aprendizaje, razón por la cual se ha convertido en la favorita de los científicos de datos.


    .row.justify-content-center
      .col-lg-10
        .tarjeta.p-3.mb-5.color-primario.bg-gradient
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-9.mb-3.mb-sm-0
                  p Para mayor profundización en la librería de #[em scikit-learn] acceder a su sitio oficial:
                .col.mb-3.mb-sm-0
                  .row.justify-content-center.mb-1
                    .col
                      a.boton.boton--b(:href="('https://scikit-learn.org/stable/')" target="_blank")
                        span(style="color:#000000")  Enlace web
                        i.fas.fa-link(style="color:#000000")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 10
          br
          span #[em Fases del machine learning]
        
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img8.svg', alt='') 
          .tarjeta.p-3(x="26%" y="73%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5.p-3(style="background-color:#FFF7DE")
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-4
                    
                  .col-lg-8
                    
                p Se inicia con la recopilación de los datoscomo materia prima para la creación de los modelos de #[em machine learning]

          .tarjeta.p-3(x="33%" y="48%" numero=" ")
            .row.justify-content-center.align-items-center.mb-5.p-3(style="background-color:#FFF7DE")
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-4
                    
                  .col-lg-8
                p Se trabajan los desafíos de: datos incompletos, datos sin formato, datos heterogeneos, entre otros. Tambien se llama fase de limpieza de datos.
          
          .tarjeta.p-3(x="50%" y="36%" numero=" ")
            .row.justify-content-center.align-items-center.mb-5.p-3(style="background-color:#FFF7DE")
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-4
                    figure
                      img(src='@/assets/curso/temas/tema2/img11.svg', alt='')
                  .col-lg-8
                    h4 Entrenamiento del Modelo
                p En esta fase se elige y entrena el modelo con los datos previamente preparados, para generar una función objetivo.
          
          .tarjeta.p-3(x="67%" y="48%" numero=" ")
            .row.justify-content-center.align-items-center.mb-5.p-3(style="background-color:#FFF7DE")
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-4
                    
                  .col-lg-8
                p En esta fasese se separan los datos en prueba y entrenamiento y se comparan los resultados del modelo a traves de métricas como exactitud y la precisión.
          
          .tarjeta.p-3(x="74%" y="73%" numero=" ")
            .row.justify-content-center.align-items-center.mb-5.p-3(style="background-color:#FFF7DE")
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-4
                    
                  .col-lg-8
                p Fasel final del #[em Machine Learning], donde el modelo se envía a producción previo a pruebas de calidad.

    separador
    .row
      .col-xl-12
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.1	Regresión y Clasificación 
    
    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical4.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
          p.mb-0 Los algoritmos de regresión y clasificación hacen parte del aprendizaje supervisado, por lo tanto, estos modelos aprenden de forma interactiva con los datos para realizar tareas específicas y predecir resultados conocidos. A continuación, conocerás en detalle el funcionamiento de estos algoritmos:

    .bg--img_03
      .row.justify-content-center
        .col-lg-10
          AcordionA.mb-2(tipo="a" clase-tarjeta="tarjeta ca-ab")
            .row.justify-content-center.mb-4(titulo="Algoritmos de regresión")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema2/img15.svg', alt='' )
              .col-10
                p Los algoritmos de regresión son un tipo de aprendizaje inductivo que predice valores numéricos a partir de un dominio suministrado de atributos con valores continuos, estos se podrán describir a través de una función hipótesis para la predicción de eventos futuros. Es importante mencionar que los algoritmos de regresión no devuelven una predicción exacta sobre los eventos futuros, sino que entregan una aproximación (Bosch et al., 2019).
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-6
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        .titulo-sexto.color-acento-contenido
                          h5 Figura 11
                          br
                          span #[em Ejemplo de un Algoritmo de Regresión]
                    figure
                      img(src='@/assets/curso/temas/tema2/img17.svg', alt='' )
                p Casos de uso: los algoritmos de regresión pueden utilizarse con éxito en los siguientes escenarios; evaluar tendencias y estimaciones de ventas, analizar elasticidad en los precios de productos, analizar datos deportivos, evaluar riesgos en una compañía de seguros, entre otros. Para profundizar en la implementación de un modelo de regresión, se plantea un ejercicio desarrollado en #[em Google colab], donde se requiere predecir el costo de un incidente de ciberseguridad con base en los equipos que fueron afectados:
                
                .row.justify-content-center
                  .col-lg-12
                    .tarjeta.p-3.mb-5.color-primario.bg-gradient
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-1
                          img(src="@/assets/curso/temas/tema2/img7.svg")
                        .col
                          .row.justify-content-between.align-items-center
                            .col-9.mb-3.mb-sm-0
                              p Ver anexo 01: Regresión
                            .col.mb-3.mb-sm-0
                              .row.justify-content-center.mb-1
                                .col
                                  a.boton.boton--b(:href="obtenerLink('/downloads/Anexo_01_Regresion.pdf')" target="_blank")
                                    span(style="color:#000000")  Descargar
                                    i.fas.fa-download(style="color:#000000")

            .row.justify-content-center.mb-4(titulo="Algoritmos de clasificación")
              .col-2
                figure
                  img(src='@/assets/curso/temas/tema2/img16.svg', alt='' )
              .col-10
                p Los algoritmos de clasificación dividen los datos en propiedades que se conocen de antemano, por ejemplo: documentos basados en el idioma, canciones clasificadas por género, camisas separadas por colores, entre otros. En este tipo de modelos los datos siempre deben estar etiquetados con propiedades que permitan que el algoritmo pueda establecer una clase en relación con sus características.
                .row.justify-content-center.align-items-center.mb-5
                  .col-lg-6
                    .row.justify-content-center.align-items-center
                      .col-lg-10
                        .titulo-sexto.color-acento-contenido
                          h5 Figura 12
                          br
                          span #[em Ejemplo de un Algoritmo de Clasificación]
                    figure
                      img(src='@/assets/curso/temas/tema2/img18.svg', alt='' )
                p Casos de usos: los algoritmos de clasificación pueden utilizarse con éxito en los siguientes escenarios; clasificar mensajes maliciosos en correos electrónicos, detectar fraudes, analizar sentimientos basados en una publicación en redes sociales, realizar búsqueda de documentos similares, detectar el lenguaje de un documento o página #[em web], entre otros.
                p Para profundizar en la implementación de un modelo de clasificación, se plantea un ejercicio desarrollado en #[em Google colab], donde se requiere predecir si un correo es o no un #[em spam].
                
                .row.justify-content-center
                  .col-lg-12
                    .tarjeta.p-3.mb-5.color-primario.bg-gradient
                      .row.justify-content-around.align-items-center
                        .col-3.col-sm-2.col-lg-1
                          img(src="@/assets/curso/temas/tema2/img7.svg")
                        .col
                          .row.justify-content-between.align-items-center
                            .col-9.mb-3.mb-sm-0
                              p Ver anexo 02: Clasificacion
                            .col.mb-3.mb-sm-0
                              .row.justify-content-center.mb-1
                                .col
                                  a.boton.boton--b(:href="obtenerLink('/downloads/Anexo_02_Clasificacion.pdf')" target="_blank")
                                    span(style="color:#000000")  Descargar
                                    i.fas.fa-download(style="color:#000000")
               

    separador
    .row
      .col-xl-12       
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.2	K vecinos más cercanos (KNN) 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p El algoritmo del vecino más cercano o KNN adopta como base la capacidad de relacionar nuevas predicciones con experiencias pasadas, algo similar a lo que realizan los seres humanos cuando se basan en la experiencia para resolver nuevos problemas.
        p Casos de uso: algunos de los campos en los cuales se utilizan esta técnica son:
        ul.lista-ul
          li
            i.fas.fa-check(style="color:#FECA2E")
            |En soluciones avanzadas de visión computarizada, para la detección por ejemplo de delincuentes en un aeropuerto.
          li
            i.fas.fa-check(style="color:#FECA2E")
            |En sistemas de recomendación como el usado por #[em Netflix], donde pueden predecir si a un determinado usuario le gustará una nueva película o serie.

        p En el campo de la medicina para la detección de patrones en los datos genéticos que ayudan en el diagnóstico de enfermedades.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img19.png', alt='' )(data-aos="zoom-in-left")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Este algoritmo se utiliza ampliamente en contextos empresariales. En la siguiente tabla, se presentan algunas ventajas y desventajas de este algoritmo.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
            h5 Tabla 1
            
        .tabla-a.color-acento-contenido 
          table
            thead
              tr
                th Ventajas
                th Desverntajas
            tbody
              tr
                td Sencillo y efectivo
                td No genera un modelo, lo que reduce la capacidad de entender la relación de las propiedades de la clase.
              tr
                td No hace suposiciones sobre la distribución de datos subyacente.
                td Requiere la selección de un k.
              tr
                td El entrenamiento del modelo es muy rápido.
                td El resultado de la clasificación es lento.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        h3 Funcionamiento del modelo:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p El algoritmo elige el valor de K y los datos de entrenamiento que han sido previamente clasificados en distintas categorías con sus respectivas etiquetas, posteriormente toma cada registro que no ha sido etiquetado de los datos de prueba o testeo e identifica cuáles son los datos de entrenamiento (los etiquetados) que se encuentran “más cercanos” y que tengan las mismas similitudes, para finalmente asignar una etiqueta.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
              p(data-aos="fade-down").mb-4 Para ilustrar este algoritmo con un caso cotidiano se puede implementar en la predicción de los nuevos amigos de un estudiante que llega a un salón clase. El algoritmo podría elegir a 6 compañeros que se sientan cerca de él y validar, por ejemplo, qué deporte practican cada uno de ellos para finalmente predecir que será amigo de los compañeros que practican el deporte con más resultados.

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img20.svg', alt='' )(data-aos="zoom-in-left")

    separador
    .row
      .col-xl-12       
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.3	Máquina de soporte vectorial (SVM):
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-derecha.mb-5(data-aos="zoom-in")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5( style="background-color: #BDDCF6")
            .bloque-texto-g__img.d-flex.align-items-center
              figure
                img(src='@/assets/curso/temas/tema2/img21.png', alt='' )
            .bloque-texto-g__texto--border.p-2.d-inline-block
              .bloque-texto-g__texto.p-4
                .row.justify-content-center.align-items-center.mb-5                  
                  p El algoritmo de máquina de soporte vectorial o SVM por sus siglas en inglés, se puede utilizar tanto para problemas de regresión como de clasificación, aunque es más empleado por su facilidad de implementación en modelos de clasificación. El principio detrás de este algoritmo es trazar dos líneas entre los puntos con mayor distancia, entre ellos para hallar la forma óptima de ordenar las clases. Los vectores que separan los puntos se llaman vectores de soporte. 

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Algoritmo de máquina de soporte vectorial")
        .row        
          .col-md-7          
            p El principio detrás de este algoritmo es trazar dos líneas entre los puntos con mayor distancia entre ellos para hallar la forma óptima de ordenar las clases. Los vectores que separan los puntos se llaman vectores de soporte.
                     
          .col-md-5.mb-4.mb-md-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 13
              br
              span #[em Máquina de Soporte Vectorial]
            figure
              img(src='@/assets/curso/temas/tema2/img22.svg', alt='')
      .py-3.py-md-4(titulo="Casos de usos")
        .row        
          .col-md-7          
            p Algunos de los campos en los cuales se utilizan esta técnica son: 
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Reconocimiento visual de caracteres.
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Identificación automática de rostros para facilitar el enfoque de cámaras digitales.
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Filtrar correos maliciosos o #[em spam].
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Identificación de imágenes por parte de los satélites (clasificar las partes que corresponden a agua, tierra, nubes, montañas, etc.)
          
            .row.justify-content-center
              .col-lg-12
                .tarjeta.p-3.mb-5.color-primario.bg-gradient
                  .row.justify-content-between.align-items-center
                    .col-9.mb-3.mb-sm-0
                      p Para mayor profundización en la implementación de este algoritmo consultar la documentación oficial de #[em scikit-learn] en:
                    .col.mb-3.mb-sm-0
                      .row.justify-content-center.mb-1
                        .col
                          a.boton.boton--b(:href="('https://scikit-learn.org/stable/modules/svm.html')" target="_blank")
                            span(style="color:#000000")  Enlace web
                            i.fas.fa-link(style="color:#000000")
                     
          .col-md-5.mb-4.mb-md-0            
            figure
              img(src='@/assets/curso/temas/tema2/img23.png', alt='')
    
    separador
    .row
      .col-xl-12       
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.4	Árboles de decisión 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") Este algoritmo utiliza la estructura de un árbol para diseñar la relación entre las propiedades de los datos y las posibles predicciones.        
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img24.svg', alt='')

    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-12.mb-4.mb-md-0
            h3 Algoritmo árbol de decisión
            p(data-aos="fade-down").mb-4 El principio básico de este algoritmo es la aplicación del enfoque “divide y vencerás”; dado que separa los datos en varios subconjuntos que posteriormente son divididos nuevamente en subconjuntos más pequeños y así sucesivamente hasta que se cumple con el objetivo de obtener datos homogéneos o el criterio de identificación.
            p(data-aos="fade-down").mb-4 A continuación, se detallan algunas ventajas y desventajas de esta técnica:
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-8
                .titulo-sexto.color-acento-contenido
                  h5 Tabla 2
                
                .tabla-a.color-acento-contenido 
                  table
                    thead
                      tr
                        th Ventajas
                        th Desverntajas
                    tbody
                      tr
                        td Requieren poca preparación de los datos para la implementación del modelo. 
                        td Se pueden crear árboles demasiado complejos que no caractericen bien los datos.
                      tr
                        td Permiten tratar problemas que requieren varias salidas o predicciones.
                        td Predicciones no uniformes, sino aproximaciones.
                      tr
                        td Fáciles de aprender e interpretar sus salidas.
                        td Inestabilidad en sus estructuras, ya que una pequeña variación puede generar un árbol totalmente distinto.
        
        .row.justify-content-center.align-items-center.my-lg-4              
          .col-md-7.mb-4.mb-md-0
            h3 Casos de usos
            p(data-aos="fade-down").mb-4 Algunos de los campos en los cuales se utilizan esta técnica son:
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Predicciones sobre la oferta de un determinado producto a un cliente.
              li
                i.fas.fa-check(style="color:#FECA2E")
                |Estimar el valor a cobrar de la prima de seguros a los asegurados.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/img25.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") Los árboles de decisión son ampliamente usados en la solución de problemas cotidianos, ya que permiten comparar acciones y resultados basadas en la relación costo/beneficio.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 14
          br
          span #[em Creación de árbol de decisión]
        
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img26.svg', alt='') 
          .tarjeta.p-3(x="12.5%" y="58%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5.p-3(style="background-color:#FFF7DE")
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-4
                  .col-lg-8
                  p Iniciar el árbol de desición con una idea principal que se representa con un nodo root.
          
          .tarjeta.p-3(x="31%" y="58%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5.p-3(style="background-color:#FFF7DE")
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-4
                  .col-lg-8
                  p Agregar nodos de oportuniodades o de decisiones luego de cada decisión.
          
          .tarjeta.p-3(x="50%" y="58%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5.p-3(style="background-color:#FFF7DE")
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-4
                  .col-lg-8
                  p Continuear agregando nodos de oportunidades y de decisiones al árbol hasta que hayas abarcado todas las decisiones y resultados posibles.
          
          .tarjeta.p-3(x="68%" y="58%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5.p-3(style="background-color:#FFF7DE")
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-4
                  .col-lg-8
                  p Incluir datos cuantitativos. Los datos que se usan con más frecuencia en los árboles de decisiones son numéricos.
          
          .tarjeta.p-3(x="87%" y="58%" numero=" ")            
            .row.justify-content-center.align-items-center.mb-5.p-3(style="background-color:#FFF7DE")
              .col-lg-12
                .row.justify-content-center.align-items-center
                  .col-lg-4
                  .col-lg-8
                  p Aceptar o declinar la decisión deacuerdo a los resultados del algoritmo.

    separador
    .row
      .col-xl-12       
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.5	#[em Clustering ]
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p(data-aos="fade-right") El algoritmo #[em Clustering] o de agrupamiento, es un método de aprendizaje no supervisado que agrupa los datos en subconjuntos llamados #[em clusters]. Los objetos o datos que contienen los #[em clusters] comparten atributos similares entre sí pero distintos a los datos de otros #[em clusters].

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        h3 Algoritmo #[em clustering]        

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-right") Esta técnica también se denomina “segmentación” y es utilizada para hallar atributos que son implícitos en los datos, es decir encuentran etiquetas parecidas entre los miembros del #[em cluster] y a su vez delimitan la distancia con otros #[em clusters].
        p(data-aos="fade-right") Un ejemplo clásico para la aplicación de la técnica de agrupamiento son los comercios en línea,  estos podrían estudiar a los clientes que realizan compras en una época del año y establecer sus preferencias. Con la aplicación de un algoritmo de #[em clustering] se puede segmentar a los clientes en grupos de acuerdo con las predicciones y tomar decisiones sobre los productos que se deben ofrecer y aplicarles las respectivas promociones o descuentos.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img27.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 15
          br
          span #[em Clustering]

        figure
          img(src='@/assets/curso/temas/tema2/img28.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img29.svg', alt='')
      .col-lg-9
        p(data-aos="fade-right") #[b Casos de usos]: algunos de los campos en los cuales se utilizan esta técnica son:
        ul.lista-ul
          li
            i.fas.fa-check(style="color:#FECA2E")
            |Investigación y segmentación de mercado para fidelización y clasificación de clientes.
          li
            i.fas.fa-check(style="color:#FECA2E")
            |Reconocimiento de patrones. 
          li
            i.fas.fa-check(style="color:#FECA2E")
            |Detección de fraudes a través de comportamientos anormales en los datos.
          li
            i.fas.fa-check(style="color:#FECA2E")
            |Procesamiento de imágenes.


    separador
    .row
      .col-xl-12       
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2.my-5 2.6	Redes neuronales #[em Deep learning]

    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical5.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .px-2
          p.mb-0 Las redes neuronales son algoritmos de inteligencia artificial que procesan los datos de forma similar al cerebro humano. Hacen parte de una rama del aprendizaje de máquina llamado aprendizaje profundo o #[em Deep learning], las redes neuronales están formadas por nodos o neuronas que se conectan entre sí para crear capas una debajo de la otra.

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Casos de usos")( style="background-color: #1389f813;border:solid 4px #1389f82d")
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-8.mb-4
            p Algunos de los campos en los cuales se utilizan esta técnica son:
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#0F2771")
                |Diagnóstico de enfermedades a través de la clasificación de imágenes médicas. 
              li
                i.fas.fa-check(style="color:#0F2771")
                |Publicidad y mercadeo basado en filtros de las redes sociales y análisis de la información. 
              li
                i.fas.fa-check(style="color:#0F2771")
                |Pronóstico de hechos financieros soportado en información histórica, por ejemplo, valores de acciones en la bolsa de valores.
              li
                i.fas.fa-check(style="color:#0F2771")
                |Predicción de artículos nuevos que pueden generar interés a un usuario específico.
              li
                i.fas.fa-check(style="color:#0F2771")
                |Corrección y sugerencia de palabras de forma automática.
              li
                i.fas.fa-check(style="color:#0F2771")
                |Procesamiento de datos complejos como el análisis de ADN.
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img31.png', alt='')
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Aplicaciones")( style="background-color: #1389f813;border:solid 4px #1389f82d")
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-8.mb-4
            p Dentro de las aplicaciones más destacadas de las redes neuronales se encuentran las siguientes:
            ul.lista-ul
              li
                i.fas.fa-check(style="color:#0F2771")
                |#[b Visión artificial]: estas aplicaciones extraen información desde imágenes o videos y son procesadas con algoritmos de #[em Deep learning], que facilitan la distinción y reconocimiento de forma similar a la visión humana. 
              li
                i.fas.fa-check(style="color:#0F2771")
                |#[b Reconocimiento de voz]: con las redes neuronales se puede analizar el habla humana independiente de las variaciones en su tono, idioma o acentos. Como ejemplo se resaltan los asistentes Alexa y Cortana de los gigantes tecnológicos #[em Amazon] y #[em Microsoft] respectivamente.
              li
                i.fas.fa-check(style="color:#0F2771")
                |#[b Procesamiento de lenguaje natural]: la implementación de redes neuronales permite el procesamiento de texto natural escrito por los humanos y obtiene un significado a partir de estos. Los #[em chatbots] o agentes virtuales son el ejemplo más representativo de esta aplicación.
              li
                i.fas.fa-check(style="color:#0F2771")
                |#[b Motores de recomendaciones]: las redes neuronales son utilizadas para realizar seguimiento a la actividad de las personas en la #[em web] y con ello generar recomendaciones muy personalizadas.


          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img32.png', alt='')
      .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Deep learning</em> vs <em>Machine learning</em>")( style="background-color: #1389f813;border:solid 4px #1389f82d")
        .row.justify-content-center.align-items-center.mb-5
          .col-xl-8.mb-4
            p Para que los modelos de #[em machine learning] funcionen correctamente es necesario la intervención humana; los científicos de datos se encargan de forma manual de realizar los procesos de extracción, transformación y carga de los datos (ETL por sus siglas en inglés). Por otro lado, con el #[em Deep learning] el científico de datos solamente le suministra los datos al modelo sin procesarlos, ya que, la red de este se encargará de obtener los atributos de los datos por si sola e irá aprendiendo de forma independiente
            
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/img33.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-botones.cajon--amarillo-1.p-3.p-sm-4
          p(data-aos="fade-down").mb-4 Para complementar la información explorar el libro en formato PDF “redes neuronales artificiales” del autor Repetur. (2019). que se encuentra en el material complementario.

    .row.justify-content-center
      .col-lg-12
        .tarjeta.p-3.mb-5.color-primario.bg-gradient
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img34.svg")
            .col
              .row.justify-content-between.align-items-center
                .col-9.mb-3.mb-sm-0
                  p Para afianzar los conocimientos en #[em Machine learning], descargar los siguientes archivos de códigos. 
                .col.mb-3.mb-sm-0
                  .row.justify-content-center.mb-1
                    .col
                      a.boton.boton--b(:href="('/downloads/codigo.rar')" target="_blank")
                        span(style="color:#000000")  Descargar
                        i.fas.fa-download(style="color:#000000")
</template>

<script>
export default {
  name: 'Tema2',
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

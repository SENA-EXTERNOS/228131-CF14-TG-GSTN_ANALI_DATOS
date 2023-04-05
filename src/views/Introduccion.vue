<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-md-2.bloque_vertical.d-none.d-md-block.mb-md-0
      .col-md-10.mb-md-0
        .cajon-b.cajon-x.color-primario.p-3.mb-5.abajo-derecha
          p Apreciado aprendiz, bienvenido a este componente formativo, donde se desarrollarán aspectos generales y claves sobre la ciencia de los datos; conviértase en todo un experto en #[i Data science] y en modelos de #[i Machine learning].
          p Afiance sus saberes y habilidades para el empleo de algoritmos de #[i Machine learning], de acuerdo con las necesidades del negocio y las metodologías de análisis de datos.
          p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/cdWeaKkAqE8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>

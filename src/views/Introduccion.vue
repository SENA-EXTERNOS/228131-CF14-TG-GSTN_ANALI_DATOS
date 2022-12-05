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
          p.mb-0 Bienvenido a este recurso de aprendizaje orientado a la ciencia de datos; durante su desarrollo se abordarán los ejes temáticos #[em Machine learning], #[em Data science] y modelos de #[em Machine learning]. Al finalizar el componente formativo, se estará en la capacidad de emplear algoritmos de Machine learning de acuerdo con las necesidades del negocio y las metodologías de análisis de datos. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje:

    .row.justify-content-center.align-items-center.md-5   
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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

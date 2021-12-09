<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción
    
    p.mb-4 El trazo y corte es el proceso que integra la creatividad del diseñador con los aspectos técnicos de los textiles para lograr transformar los trazos y patrones en cortes, logrando prendas terminadas de alta calidad.
    p.mb-5
      b Se invita al aprendiz a ver el video introductorio de este componente formativo:
      
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
      
    .cajon.color-primario.p-5
      p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos 
        b.etiqueta en trazo y corte en la industria de la confección, 
        b-none de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del 
        b.etiqueta desarrollo de colecciones para la industria de la moda.



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

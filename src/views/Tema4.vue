<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Trazo industrial

    #t_4_1.titulo-segundo.color-acento-contenido
      .h2 4.1 Programación de corta
    
    
    
    #t_4_2.titulo-segundo.color-acento-contenido
      .h2 4.2 Liquidación de corte
    
    
    #t_4_3.titulo-segundo.color-acento-contenido
      .h2 4.3 Trazo sistematizado
    
    
    
    #t_4_4.titulo-segundo.color-acento-contenido
      .h2 4.4 Trazo en telas con rayas, cuadros, estampados y tejido con pelo
    
    
    #t_4_5.titulo-segundo.color-acento-contenido
      .h2 4.5 Espigas en el trazo
    
    
    
    #t_4_6.titulo-segundo.color-acento-contenido
      .h2 4.6 Cálculo de consumo o promedios 
    
    
    
    
    
    #t_4_7.titulo-segundo.color-acento-contenido
      .h2 4.7 Eficiencia del trazo
    
    
    
    #t_4_8.titulo-segundo.color-acento-contenido
      .h2 4.8 Ploteo de trazos




















</template>

<script>
export default {
  name: 'Tema4',
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

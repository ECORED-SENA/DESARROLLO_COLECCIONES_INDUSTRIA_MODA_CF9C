<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Planeación y programación de trazo y corte
    
    #t_2_1.titulo-segundo.color-acento-contenido
      .h2 2.1 Programación de corta
    
    
    #t_2_2.titulo-segundo.color-acento-contenido
      .h2 2.2 Liquidación de corte
    
    
    #t_2_3.titulo-segundo.color-acento-contenido
      .h2 2.3 Formato de programación de corte
    
    

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

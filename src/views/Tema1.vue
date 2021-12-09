<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Conceptos generales de trazo y corte
  

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-6.mb-4.mb-lg-0
        figure.mb-0
          img(src='@/assets/curso/tema1/img1.png', alt='', style='width: 610px;').m-auto
            
      .col-lg-6 
        p.mb-4 El taller de trazo y corte es el encargado de proveer todas las necesidades de la planta de confección, siendo uno de los procesos fundamentales de la industria de la confección.
        p.mb-0 En este orden de ideas, una de las premisas es que la planta de trazo y corte debe estar adelantada mínimo 2 días en producción con respecto a las demás áreas para no tener atrasos ni pérdidas económicas, ya que se puede frenar el proceso de ensamblado y confección hasta por 1 día en planta, lo que significa tener a los operarios de la empresa sin ninguna tarea, aplazando e incumpliendo entregas de producto.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Las diferentes etapas que conforman el proceso de trazo y corte industrial se encuentran estrechamente relacionadas con el patronaje de prendas de vestir, ya que es importante tener en cuenta que de la calidad de los patrones o moldes se deriva la calidad de las siguientes operaciones hasta terminar la prenda. Luego, se enfatiza en:
        
      .col-lg-6
        .p-5(style="background-color: #C2FCFA;")
          ul.lista-ul
            li.mb-1 
              i.fas.fa-check(style='color: #0AC4BF;')
              p.mb-0 
                b El proceso de la distribución y ubicación correcta de los patrones.
            li.mb-1 
              i.fas.fa-check(style='color: #0AC4BF;')
              p.mb-0 
                b El aprovechamiento del material.
            li.mb-1 
              i.fas.fa-check(style='color: #0AC4BF;')
              p.mb-0 
                b La calidad del producto.
            li.mb-1 
              i.fas.fa-check(style='color: #0AC4BF;')
              p.mb-0 
                b La productividad de la empresa.

    .row.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 Otro de los conocimientos que se debe tener a la hora de hacer el trazo y extendido de telas es la diferencia en fibras y tipos de tejidos, la colocación de los patrones según aplome en el trazo (optimizando la tela) y los tipos de extendidos. 
        p.mb-0 Son procesos que requieren alta concentración, ya que implican una serie de riesgos físicos y profesionales, entre ellos, la pérdida de insumo textil, que puede generar piezas con deformaciones. Por ende, a la hora de confeccionar, se pueden generar problemas de calidad. Sin embargo, la consecuencia mayor radica en el operario de corte, el cual puede sufrir de mutilación de extremidades (dedos) por descuido en el proceso.
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/tema1/img2.svg', alt='', style='width: 198px;').m-auto









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

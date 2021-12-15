<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 6
      h1 Reposo de la tela
    

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-6.mb-4.mb-lg-0
        figure.mb-0
          img(src='@/assets/curso/tema6/img1.png', alt='', style='width: 610px;').m-auto
            
      .col-lg-6 
        .row.mb-4
          .col-auto
            figure.mb-0
              img(src='@/assets/curso/tema2/raya.svg', alt='', style='width: 40px;').m-auto
        p.mb-0 Uno de los pasos más importantes antes de proceder al extendido es el tiempo de reposo que se le da al material antes de extenderlo. Este consiste en desenrollar del todo el textil en forma plegada del rollo y dejarlo reposar por un periodo determinado, dependiendo del material, para que este recupere su forma, la cual pudo ser afectada al ser expuesto a procesos de estiramiento en el enrollado. Esto previene que el material sufra encogimiento a la hora de extender y, por consiguiente, las prendas tengan fallas.

    .row.justify-content-center.mb-5
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-0
        .row.m-0.align-items-center.justify-content-between
          .col-lg-3.mb-4.mb-lg-0
            figure.mb-0
              img(src='@/assets/curso/tema6/img2.svg', alt='', style='width: 220px;').m-auto
          .col-lg-9
            .bloque-texto-a__texto.p-5
              p.mb-0 Es necesario tener en cuenta el tipo de tejido y sus fibras para determinar los tiempos de reposo, por ejemplo, en tejidos planos con mezcla de elastano, el tiempo de reposo es de 20 a 24 horas, mientras que para un tejido plano 100 % poliéster es solo de 3 a 4 horas. En caso del tejido de punto, el tiempo es de 20 a 24 horas para ambos tipos (Lafayette, s. f.).

    p.mb-5 En los tejidos de punto con spandex, el tiempo de reposo es de 12 a 24 horas; el tejido Rib, de 24 horas; para ropa interior, los encajes, blondas y tul con elastómero, es de 12 horas, al igual que las mallas elásticas. Otras consideraciones para tener en cuenta a la hora de reposar la tela son:


    .cajon.color-primario.p-4
      .row.justify-content-center.align-items-center
        .col-10.col-lg-5.mb-4.mb-lg-0
          figure.mb-0
            img(src='@/assets/curso/tema6/img3.svg', alt='', style='width: 388px;').m-auto
          
        .col-lg-7
          ul.lista-ul.mb-0
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Se debe dejar reposar las telas un tiempo prudencial antes del corte. Este tiempo de reposo varía según las características del tejido: su composición, peso, construcción, así como también las condiciones ambientales imperantes en el sitio de trabajo.
                
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Telas de buena estabilidad dimensional y poco peso, como las fabricadas con mezclas basadas en poliéster, requieren poco tiempo de reposo: de 4 a 5 horas.
                
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 En el caso de telas a partir de viscosa, tipo challis, se recomienda: devanarlas sobre la mesa sin permitir que se arruguen demasiado y darles un reposo preliminar de 4 a 5 horas; extender a mano, sin ninguna tensión; vigilar que los orillos queden parejos y no se formen bolsas ni pliegues; limitar las capas a un máximo de 40 y dejar reposar este tendido durante un tiempo similar o mayor que el anterior.
                
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 El tiempo de reposo para telas pesadas, como el índigo, debe ser el máximo posible; se recomienda hacer el tendido por la tarde, dejarlo durante la noche y cortar al día siguiente, luego de 18 a 20 horas.
                


</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 5
      h1 Transporte de rollos de tela
    
    


    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-6.mb-4.mb-lg-0
        figure.mb-0
          img(src='@/assets/curso/tema5/img1.png', alt='', style='width: 610px;').m-auto
            
      .col-lg-6 
        .row.mb-4
          .col-auto
            figure.mb-0
              img(src='@/assets/curso/tema2/raya.svg', alt='', style='width: 40px;').m-auto
        p Los rollos de tela requieren cuidados especiales, tanto del transportador como del confeccionista.  Con las siguientes sugerencias, se espera que dichos cuidados sean cumplidos, ya que nada se logra si la tela que es acabada con grandes cuidados es tratada en forma no adecuada en su transporte.
        p.mb-0 Las siguientes son algunas recomendaciones para almacenaje y movimiento de tela:


    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-secundario.mb-5(tipo="l")
          .row
            .col-auto
              h4.mb-4 Ubicación - cargue
              p.mb-0 Los rollos deben ser colocados en el carro transportador en forma horizontal y todos en la misma dirección.  Por ningún motivo se debe cruzar, ya que, al hacerlo, los rollos inferiores deben resistir un peso muy alto repartido en áreas muy pequeñas, originando presiones altísimas.  Esta presión deforma el rollo, que luego se refleja en el tendido formando ondulaciones.
                
          .row
            .col-auto
              h4.mb-4 Ubicación - descargue
              p.mb-0 En el momento del descargue, hay que tener cuidado al colocarlos sobre el piso o lugar de almacenamiento.  Un golpe en los extremos produce un engolado de orillos, entonces es necesario tener cuidado al colocarlos, no dejándolos caer.  El engolado de orillos dificulta notoriamente el tendido y el corte, además obliga y limita hacer tendido de menos número de capas y también dificulta el tener un buen tallaje.  El engolado es tan considerable que afecta el tamaño de piezas o parte de prendas, dando luego prendas imperfectas o difíciles de ensamblar.
                
          .row
            .col-auto
              h4.mb-4 Descargue
              p.mb-0 El confeccionista debe observar cuidadosamente la bajada de los rollos del carro transportador y, si es necesario, hacer los comentarios y observaciones correspondientes. 



    .row.justify-content-center.mb-0
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-0
        .row.m-0.align-items-center.justify-content-between
          .col-lg-3.mb-4.mb-lg-0
            figure.mb-0
              img(src='@/assets/curso/tema5/img2.svg', alt='', style='width: 220px;').m-auto
          .col-lg-9
            .bloque-texto-a__texto.p-5
              p.mb-0 Los diferentes sistemas de transporte se realizan cuando existen limitantes físicas: poco espacio y mesas muy pequeñas para realizar las operaciones en el departamento de corte. Mientras se disponga de espacios amplios y mesas lo suficientemente largas, se recomienda no mover ni desplazar para nada los tendidos, realizando todas las operaciones en el mismo sitio donde se hizo el extendido.













</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

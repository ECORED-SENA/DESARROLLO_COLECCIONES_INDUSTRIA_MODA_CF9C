<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 9
      h1 Corte de muestras 
    
    
    p.mb-5 El corte de muestras se hace cuando no se necesita trazar, extender o cortar una gran cantidad de piezas, o se necesita solo una prenda para enviar a confeccionar y rectificar todos los demás procesos con ella, entre ellos diseño, patronaje y confección, y por supuesto la ficha técnica. Los pasos a realizar son:

    .row.mb-5
      .col-lg-8.mb-5
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Estirar la tela sobre la mesa")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 La tela se coloca sobre la mesa de corte, bien estirada, sin arrugas, con el derecho hacia arriba, y de manera que el largo del tejido (al hilo o urdimbre) coincida con el largo de la mesa. En ocasiones, el corte de las piezas se realiza en tela doble; en estos casos, la tela deberá ser doblada sobre sí misma, a lo largo del tejido, encarando los derechos y asegurándose de que la parte plegada quede al hilo, comprobando que la distancia entre el doblez y el borde siempre sea la misma. Se aconseja planchar el doblez realizado, lo que garantiza una superficie plana y óptima para su posterior corte.
              p.mb-4 Asimismo, se deberá ajustar lo suficiente para que el patrón quede bien colocado y evitar que se desperdicie material. Una de las premisas más importantes para tener en cuenta es el diseño que tienen la trama y la urdimbre del tejido con el que se va a trabajar, ya que no es lo mismo el trazo y corte de patrones en una tela lisa que con una de rayas, cuadros, estampados o telas con pelo.
              .row.justify-content-center
                .col-10.col-lg-11
                  figure
                    img(src='@/assets/curso/tema9/img1.jpg', alt='imagen ambiental', style='width: 343px;').m-auto
                
          .row(numero="2" titulo="Acomodar los patrones")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Una vez ya puestos todos los patrones y aprovechando al máximo el ancho y largo de la tela siguiendo los consejos anteriores, estos se deben asegurar a la tela con alfileres o pines. La forma correcta de prender los alfileres o pines es en diagonal, de afuera hacia adentro, es decir, orientando siempre sus puntas hacia el centro de la pieza y colocados en sentido diagonal a urdimbre y trama (la tela cede menos y quedará más plana). No colocar demasiados alfileres, pues, en ese caso, la tela no quedará bien estirada y el corte no será tan exacto, o se puede romper el material. Se puede utilizar una de las técnicas de extendido de tela ya visto.
              .row.justify-content-center
                .col-10.col-lg-11
                  figure
                    img(src='@/assets/curso/tema9/img2.svg', alt='imagen ambiental', style='width: 489px;').m-auto
                
          .row(numero="3" titulo="Dibujar contorno del patron")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 El siguiente paso es dibujar el contorno del patrón sobre la tela y traspasar todas las marcas de los patrones a la tela antes de cortarla (ubicación de botones, ojales, piquetes para frunces, pliegues, pinzas, cremalleras, marcación de bolsillos, etc.). Se tratará de distribuir los patrones sobre la tela al hilo, bien encajados, y se aprovecharán todos los huecos disponibles, menos los orillos de esta; como si se tratara de un rompecabezas. Para trazar el patrón, se pueden usar diferentes tipos de marcadores o tizas para tela que existen en el mercado.
              .row.justify-content-center
                .col-10.col-lg-11
                  figure
                    img(src='@/assets/curso/tema9/img3.svg', alt='imagen ambiental', style='width: 675px;').m-auto
                
          .row(numero="4" titulo="Corte de la tela")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Entre las mejores herramientas para hacer el corte de la tela, están las tijeras tipo shears o de sastre, con mango en ángulo, hojas largas, bien afiladas y de punta fina. Se trata de sujetar las tijeras firmemente con la mano; en el mango más amplio, deben entrar 3 dedos y el pulgar, al otro lado, apoyando la hoja inferior sobre la mesa (las tijeras tienen la forma) e ir cortando el material alrededor de los patrones; esto se hace sin levantar la tela ni moverla de su sitio, solo se deben mover la mano y las tijeras, no el material ni los patrones.
              .row.justify-content-center
                .col-10.col-lg-11
                  figure
                    img(src='@/assets/curso/tema9/img4.jpg', alt='imagen ambiental', style='width: 415px;').m-auto
                
          .row(numero="5" titulo="Corte de marcas señaladas")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Ya terminado el corte de todas las piezas y sin retirar los pines aún de los patrones, con las tijeras, se deberán cortar las marcas señaladas en los moldes, como piquetes, trazos para costuras, etc. 
              .row.justify-content-center
                .col-10.col-lg-11
                  figure
                    img(src='@/assets/curso/tema9/img5.jpg', alt='imagen ambiental', style='width: 415px;').m-auto
                

    .row.justify-content-center.align-items-center
      .col-4.col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema9/img6.svg', alt='imagen ambiental', style='width: 195px;').m-auto
      .col-lg
        h4.mb-4 Cúter rotativo
        p.mb-0 Otras de las herramientas para cortar muestras son el cúter rotativo y la base de corte o tabla “salva corte". Se realiza el corte de los patrones siguiendo la línea de estos con pulso firme. En este caso, será necesario tener bastante práctica, pues no siempre es sencillo cortar con esta herramienta a mano alzada, sin el apoyo de una regla. La base de corte o tabla “salva corte” hace las veces de apoyo para no dañar la mesa y ayuda a no quitar filo a la cuchilla.












</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

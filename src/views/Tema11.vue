<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 11
      h1 Operaciones auxiliares 
    
    
    p.mb-5 Luego de realizado el corte, se procede al “loteo”, que es dividir en parte el corte para la siguiente actividad, que es el marcado de patrones, y con ello, las siguientes operaciones:


    #t_11_1.titulo-segundo.color-acento-contenido
      .h2 11.1 Entrega de lotes o empaquetar

    .row.justify-content-center.mb-5
      .col-10.col-lg-6.mb-4.mb-lg-0
        figure.mb-0
          img(src='@/assets/curso/tema11/img1.png', alt='', style='width: 610px;').m-auto
            
      .col-lg-6 
        .row.mb-4
          .col-auto
            figure.mb-0
              img(src='@/assets/curso/tema2/raya.svg', alt='', style='width: 40px;').m-auto
        p.mb-4 Las normas básicas de confección de prendas a nivel industrial son muy claras al advertir que todas las partes que conforman una prenda deben tomarse siempre de la misma capa del tendido y lo más cerca posible unas de otras, garantizando así uniformidad en el tono. 
        p.mb-0 Los paquetes cortados se deben etiquetar para hacer el ensamble de las prendas, aprovechando esta operación para hacer una revisión de las partes y reponer aquellas que presentan marcas autoadhesivas, colocadas al extender la tela, para indicar defectos aislados.


    p.mb-4 Hacer una inspección de rutina, comparando contra el molde original el tamaño de tres piezas del paquete: una de la capa superior, otra del centro del bloque y otra de la capa inferior, verificando la exactitud del corte vertical.
    p.mb-5 Los paquetes cortados requieren cuidados especiales, evitando dobleces y amarres apretados, ya que muchas de las telas son muy susceptibles de alterar su tamaño original con la presión o la tensión. El almacenamiento de los paquetes debe ser en estanterías adecuadas, sin colocarles encima objetos pesados. 




    #t_11_2.titulo-segundo.color-acento-contenido
      .h2 11.2 Manejo de las prendas cortadas, etiquetado, separación, empaqu


    p.mb-4 Luego de realizados todos los procesos de trazo, extendido y corte, se procede a realizar el proceso de manejo de prendas. Las piezas deben salir completas, separar el corte por tallas, colores y tonos, identificando y amarrando adecuadamente. Verificar, además, en forma aleatoria (azar), que los paquetes tengan el número de unidades que se ha programado y que los tiquetes estén en el punto adecuado.

    p.mb-4 Como ya se ha dicho, es importante que, después de cortado un lote, se compare contra el molde una pieza de encima, una de la mitad y una de abajo, en cada paquete, para verificar la calidad del corte y lograr detectar en este punto las anomalías que tiene el lote, antes de ser enviado a confección.

    p.mb-4 Aquí también se deben controlar los piquetes (estos no deben exceder los 2 mm), perforaciones y demás señalizaciones que lleve el molde. Además, los ángulos (en esquina) deben estar bien cortados.

    p.mb-5 Las piezas más grandes que el molde se deben pulir manualmente y las más pequeñas se deben reponer en caso tal de presentar anomalías en sus medidas. Las piezas señaladas como defectuosas deben reponerse, si es necesario, de acuerdo con los criterios y la ubicación del defecto, teniendo en cuenta que sea el mismo tono y la misma tela.

    .cajon.color-primario.p-5
      .row.justify-content-around.align-items-center
        .col-lg-5.mb-4.mb-lg-0
          figure.mb-4
            img(src='@/assets/curso/tema11/img2.svg', alt='imagen ambiental', style='width: 214px;')
          p.mb-0 
            b Los paquetes amarrados deben llevar la información necesaria, numerada de acuerdo con el número de tallas trazadas en cada espiga:
        .col-lg-5
          ul.lista-ul.mb-0 
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0
                b Nº de la orden
                
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0
                b Referencia
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0
                b Color
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0
                b Tono
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0
                b Talla
                
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0
                b Nombre de la pieza y de quien revisa

    .p-5.mb-5(style="background-color: #C2FCFA")
      .row.justify-content-around.align-items-center
        .col-lg-5.mb-4.mb-lg-0
          p.mb-0 
            b La numeración se hará en forma consecutiva y se realiza de igual forma para todas las referencias, teniendo en cuenta que se debe:
        .col-lg-5
          ul.lista-ul.mb-0 
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Consultar con calidad cuando se presenten dudas.
                
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Amarrar cada paquete en su talla correspondiente.
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Empacar los lotes de corte en bolsas por talla, marcándolas muy bien.
            

    p.mb-4 
      b En la siguiente figura, se representa el proceso de corte manual:

    .row.justify-content-center.mb-0
      .titulo-sexto.color-acento-contenido.mb-4
        p.mb-0
          b(style="font-size: 15.5px") Figura 19 
          b-none Proceso de un corte manual 
            
      figure.mb-4
        img(src='@/assets/curso/tema11/img3.svg', alt='Proceso de un corte manual', style='')
      







</template>

<script>
export default {
  name: 'Tema11',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

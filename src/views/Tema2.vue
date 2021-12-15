<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Planeación y programación de trazo y corte
    

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-6.mb-4.mb-lg-0
        figure.mb-0
          img(src='@/assets/curso/tema2/img1.png', alt='', style='width: 610px;').m-auto
            
      .col-lg-6 
        .row.mb-4
          .col-auto
            figure.mb-0
              img(src='@/assets/curso/tema2/raya.svg', alt='', style='width: 40px;').m-auto
        p.mb-0 La programación de trazo y corte depende de las tallas, colores, combinaciones, tipos de textiles que componen las prendas y el consumo que cada uno de ellos tiene en cuanto a materia prima (tela), y la disponibilidad en el almacén en comparación con el inventario disponible para poder realizar la orden de producción. 

    .row.justify-content-center.mb-5
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-3.mb-4.mb-lg-0
            figure.mb-0
              img(src='@/assets/curso/tema2/img2.svg', alt='', style='width: 220px;').m-auto
          .col-lg-9
            .bloque-texto-a__texto.p-4
              p.mb-0 Luego de este proceso, se entregan las órdenes de corte programadas para trazar, definiendo cuánta tela se debe consumir por cada color de la prenda, el ancho y largo de los tendidos o “colchones”, que se refieren a la cantidad de capas a extender según el tipo de tejido. De esta programación depende que no queden faltando piezas, combinaciones, o tejidos en el proceso de trazo, extendido y posterior corte.
                



    #t_2_1.titulo-segundo.color-acento-contenido
      .h2 2.1 Programación de fabricación
    

    p.mb-4 Esta programación se basa en la información que contiene el presupuesto de ventas entregado y en el que se dispone la cantidad de prendas pedidas según referencia. Aquí se expone un ejemplo de este tipo de programación:

    .row.mb-5
      .col-auto.col-lg-9.mb-5
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Escoger los colores.")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Azul claro, blanco, rosado, amarillo y beige.
                
          .row(numero="2" titulo="Determinar el número de unidades que se van a fabricar.")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Ejemplo: 2800 unidades (camisa junior).
                
          .row(numero="3" titulo="Conseguir relación de metros de tela que se van a comprar en total.")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 El promedio de la prenda se multiplica por el total de unidades que se van a fabricar. Ejemplo: 1.16 m promedio de la prenda por 2800 unidades que se van a fabricar = 3248 metros a comprar.
                
          .row(numero="4" titulo="Distribuir la cantidad total de metros por color.")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 El Tener en cuenta los colores de mayor predominación y cantidad para distribuir en ellos el mayor número de metros, así: 
              .row.justify-content-center
                .col-lg-11
                  .tabla-a
                    table(style="min-width: 500px;")
                      
                      tbody
                        tr(style="background-color: #B3DDFC")
                          td Azul claro
                          td 800 metros
                        tr(style="background-color: #ffff")
                          td Blanco
                          td 500 metros
                        tr(style="background-color: #FFC5FF")
                          td Rosado
                          td 600 metros
                        tr(style="background-color: #FFF0C5")
                          td Amarillo
                          td 548 metros
                        tr(style="background-color: #E9DEBF")
                          td Beige
                          td 800 metros
                        tr(style="background-color: #fff")
                          td
                            b Total
                          td
                            b 3248 metros
                          
          .row(numero="5" titulo="Obtener el número de prendas que saldrán de cada color.")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Para esto, se divide el total de metros de cada uno de los colores por el promedio de la prenda. 
              .row.justify-content-center
                .col-lg-11
                  .tabla-a
                    table(style="min-width: 580px;")
                      
                      tbody
                        tr(style="background-color: #B3DDFC")
                          td Azul claro
                          td 800 metros
                          td &div; 1,16 promedio
                          td 690 prendas
                        tr(style="background-color: #ffff")
                          td Blanco
                          td 500 metros
                          td &div; 1,16 promedio
                          td 431 prendas
                        tr(style="background-color: #FFC5FF")
                          td Rosado
                          td 600 metros
                          td &div; 1,16 promedio
                          td 517 prenda
                        tr(style="background-color: #FFF0C5")
                          td Amarillo
                          td 548 metros
                          td &div; 1,16 promedio
                          td 4712 prendas
                        tr(style="background-color: #E9DEBF")
                          td Beige
                          td 800 metros
                          td &div; 1,16 promedio
                          td 690 prendas
                        tr(style="background-color: #fff")
                          td.text-center(colspan= "2") 
                            b Total
                          td.text-center(colspan= "2") 
                            b 2800 unidades totales programadas
                    
          .row(numero="6" titulo="Realizar la distribución de las veces que se deben cortar cada una de las tallas.")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 La suma de las proporciones determina el total de prendas a trazar:
              .row.justify-content-center
                .col-lg-9
                  .tabla-a
                    table(style="min-width: 380px;")
                      
                      tbody
                        tr(style="background-color: #444648")
                          td.text-white Tallas
                          td.text-white Proporciones
                            
                        tr(style="background-color: #ffff")
                          td 6
                          td 2
                            
                        tr(style="background-color: #DEDEDE")
                          td 8
                          td 3
                            
                        tr(style="background-color: #ffff")
                          td 10
                          td 4
                            
                        tr(style="background-color: #DEDEDE")
                          td 12
                          td 5
                            
                        tr(style="background-color: #ffff")
                          td 14
                          td 2
                            
                        tr(style="background-color: #DEDEDE")
                          td 
                            b Total:
                          td 
                            b 16 prendas programadas
                            
          .row(numero="7" titulo="Conocer la cantidad de prendas programadas por tallas en cada color.")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Se divide el total de las prendas en cada color por el total de prendas a trazar y se multiplica el resultado por las veces que está programada cada talla.
              .row
                .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
                  .tarjeta.text-center.p-3(style="background-color: #3EC9FF;")
                    p.mb-0 
                      b Azul
                .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
                  .tarjeta.text-center.p-3(style="background-color: #fff;")
                    p.mb-0 
                      b Blanco
              .row
                .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
                  .tarjeta.text-center.p-3(style="background-color: #FFFF00;")
                    p.mb-0 
                      b Amarillo
                .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
                  .tarjeta.text-center.p-3(style="background-color: #FF5B8F;")
                    p.mb-0 
                      b Rosado
              .row
                .col-sm-6.col-md-4.col-lg-3.col-xxl-2.mb-3
                  .tarjeta.text-center.p-3(style="background-color: #E9DEBF;")
                    p.mb-0 
                      b Beige
              .row
                .col
                  p.mb-0
                    a.lnk(@click="modal1 = true") Ampliar Tabla
              
              ModalA(:abrir-modal.sync="modal1")
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema2/table-colors.svg', alt='tabla de medidaspor color')
                      
          .row(numero="8" titulo="Programar ordenadamente: totales por color.")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Totales color:
              figure
                img(src='@/assets/curso/tema2/table-colors2.svg', alt='tabla de medidaspor color')
                  


    
    #t_2_2.titulo-segundo.color-acento-contenido
      .h2 2.2 Liquidación de corte
    
    
    p.mb-4 Con los datos obtenidos en la programación de facturación, se procede a realizar la liquidación de corte en un formato sencillo. A continuación, se describen los datos más relevantes para tener en cuenta:


    .titulo-sexto.color-acento-contenido.mb-4
      span #[strong Tabla 1 ] Datos para liquidación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .tabla-a.color-secundario
          table(style="min-width: 500px")
            thead
              tr(style="background-color: #fff")
                th.text-start Fecha: 
                th.text-start Cliente: 
            tbody
              tr
                td Referencia: 
                td Tipo de prenda: camisa junior
              tr
                td Tipo de tejido: dril mariscal
                td Valor $ 6800 
              tr
                td Promedio Cliente: 1.16
                td Promedio Trazo: 1.15
              tr
                td Promedio Real: 1.157
                td
                
      .col-lg-6
        .row.justify-content-center
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img3.svg', alt='imagen ambiental', style="width: 300px;")


    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-4
        span #[strong Tabla 2 ] Resumen cantidades por talla
      .col-lg-7.mb-4.mb-lg-0
          
        .tabla-a.color-secundario
          table(style="min-width: 590px")
            thead
              tr(style="background-color: #fff")
                td(style="width: 30%") 
                  b Tallas
                th 6
                th.text-center 8
                th.text-center 10
                th.text-center 12
                th.text-center 14
                th.text-center
            tbody
              tr
                td
                  b Proporciones
                td.text-center 2
                td.text-center 3
                td.text-center 4
                td.text-center 5
                td.text-center 2
                td
              tr
                td
                  b Cantidades
                td.texxt-center 200
                td.texxt-center 300
                td.texxt-center 400
                td.texxt-center 500
                td.texxt-center 200
                td
                  b Total: 1600
                          
      .col-lg-5
        .row.justify-content-center
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img4.svg', alt='imagen ambiental', style="width: 145px;")


    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-4
        span #[strong Tabla 3 ] Resumen de la orden
      .col-lg-12
        .tabla-a.color-secundario
          table
            thead
              tr(style="background-color: #fff")
                th
                  | Orden N&ordm;
                  br
                  | 01
                th
                  | N&ordm; Capas
                  br
                  | 100
                th
                  | Largo Trazo
                  br
                  | 18.40
                th
                  | Largo del tendido
                  br
                  | 18.512
                th
                  | Cantidad
                  br
                  | 1600
                th
                  | Metros Programados
                  br
                  | 1840
                th
                  | Metros extendidos
                  br
                  | 1851.2
            tbody
              tr
                th Metros reposici&oacute;n
                td Metros retazos
                td
                  | Ancho trazo
                  br
                  | 148
                td
                  | Ancho Tela
                  br
                  | 1.50
                td
                  | Promedio real
                  br
                  | 1.157
                td
                  | Promedio del trazo
                  br
                  | 1.15
                td


    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-0(style="border-radius: 14px;")
          .row.justify-content-evenly.align-items-center
            .col-3.col-sm-3.col-lg-2
              img(src="@/assets/curso/tema2/img5.svg" style="width: 86px;").m-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0
                    b ¿Cómo averiguar el número de tendidos (número de tendidos o “colchones” se refiere a la cantidad de capas a extender según el tipo de tejido) a realizar?
                .col-lg-2
          
    .row.justify-content-center.mb-5
      .col-lg-8.mb-5
        .p-4(style="background-color: #D6EBFB; border-bottom-left-radius: 25px; border-bottom-right-radius: 25px;")
          .row.justify-content-center.align-items-center
            .col-lg-7.mb-4.mb-lg-0
              p.mb-4 
                b La cantidad de unidades programadas se divide por la cantidad de unidades de cada tendido. Ejemplo:
              p.mb-2 2800 unidades ÷ 1600 unidades = 1.75 tendidos
              p.mb-2 
                b Tendidos a realizar:
              p.mb-2 a - Un tendido de 100 capas (1600 unidades)
              p.mb-4 b - Un tendido de 75 capas (1200 unidades)
              p.mb-2
                b Fórmula para averiguar el número de capas:
              p Número de capas = número de unidades ÷ número de tallas trazadas 
              p 75 = 1200 ÷ 16
            .col-8.col-lg-4
              figure
                img(src="@/assets/curso/tema2/img6.svg" style="width: 188px;").m-auto


    #t_2_3.titulo-segundo.color-acento-contenido
      .h2 2.3 Formato de programación de corte

    p.mb-5 Es un documento informativo que contiene los elementos esenciales para desarrollar un corte con la calidad requerida por los clientes para los cuales se confeccionan las prendas, donde se indica:

    .cajon.color-primario.p-4.mb-5
      .row
        .col-lg-8
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              ul.lista-ul.mb-0
                li
                  i.fas.fa-check(style='color: #BF3976;')
                  p.mb-0 El número de piezas de ropa que se deben producir
                    
                li
                  i.fas.fa-check(style='color: #BF3976;')
                  p.mb-0 El tipo de corte que debe tener el modelo en cuestión
                    
                li
                  i.fas.fa-check(style='color: #BF3976;')
                  p.mb-0 Los diferentes colores en los cuales se producirán
                    
                li
                  i.fas.fa-check(style='color: #BF3976;')
                  p.mb-0 La cantidad de tallas que se necesitan del modelo
                    
                li
                  i.fas.fa-check(style='color: #BF3976;')
                  p.mb-0 Las cantidades que se harán del producto.
                    
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/img7.svg" style="width: 195px;").m-auto


    p.mb-5 Sirve principalmente para tener control del <em>stock</em> de las piezas que se van a confeccionar. De esta manera, la empresa se asegura de no tener más <em>stock</em> en el almacén de telas del que se debería para color del mismo modelo. Esto es importante a nivel económico, en la medida en que se reducen gastos y se controla el proceso industrial. Se estructura a través de unos puntos que se completan para que, al llegar al proceso de producción, se tenga claro y quede constancia de lo que se va a producir. Algunos de los puntos más importantes a tener en cuento en una orden son:

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .cajon.color-primario.p-4
          ul.lista-ul.mb-0
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Fecha de la orden
                
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Número de la orden
                
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Referencias de las prendas
                
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Características de las prendas
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Cantidad de las prendas pedidas
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Tallas de las prendas
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Controles de telas en la selección
              
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Responsables de la orden
                
            li
              i.fas.fa-check(style='color: #BF3976;')
              p.mb-0 Medidas de las telas que se tienen que cortar
                
                
      .col-lg-7
        p.mb-4 La orden de corte debe estar siempre por escrito, teniendo en cuenta que en este trabajo se maneja materia prima con altos costos económicos; cada empresa tiene un diseño propio para este documento (Tèxtil Balsareny, 2019). 
          b La siguiente figura muestra un ejemplo de este formato.
          
        .titulo-sexto.color-acento-contenido.mb-4
          span #[strong Figura 1 ] Documento orden de corte fuente
        
        figure
          img(src="@/assets/curso/tema2/img8.jpg" style="").m-auto
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
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

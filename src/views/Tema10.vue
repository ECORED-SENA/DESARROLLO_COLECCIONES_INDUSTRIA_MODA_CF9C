<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 10
      h1 Máquinas auxiliares en el departamento de corte
    
    


    p.mb-5 El corte de muestras se hace cuando no se necesita trazar, extender o cortar una gran cantidad de piezas, o se necesita solo una prenda para enviar a confeccionar y rectificar todos los demás procesos con ella, entre ellos diseño, patronaje y confección, y por supuesto la ficha técnica. Los pasos a realizar son:


    p.mb-4
      b(style="color: #0AC4BF;") Carro extendedor automático: 

    p.mb-5  Presenta dos características fundamentales de extendido:

    .row.justify-content-center.mb-5
      .col-11.mb-0
        .tarjeta.tarjeta--azuverde.p-4.py-lg-5(style="border-radius: 0;")
          SlyderA
            .row.align-items-center.justify-content-center
              .col-11.col-md-5.mb-4.mb-md-0
                h4.mb-4 Extendido con tensión
                p.mb-0 El desarrollo de la pieza de tejido se consigue por la tensión que origina el carro al desplazarse. En general, es para tejidos de calada (urdimbre y trama). Esta tensión no origina grandes problemas al extenderlo.
                  
              .col-10.col-md-5
                figure
                  img(src='@/assets/curso/tema10/img1.svg', alt='imagen ambiental', style='width: 278px;').m-auto
                    
            .row.align-items-center.justify-content-center
              .col-11.col-md-5.mb-4.mb-md-0
                h4.mb-4 Extendido sin tensión (positivo)
                p.mb-0 Los tejidos de género de punto deben ser extendidos sin tensión. Para este caso, el carro dispone de unos mecanismos regulables de desarrollo de la pieza de tejido y otros de alimentación al desprenderse este sobre una mesa de tendido. Igualmente, puede estirarse el género de punto tubular mediante un dispositivo ensanchador situado en el mecanismo de desprendimiento. El desplazamiento del carro se realiza automáticamente, haciendo el recorrido de vaivén de acuerdo con la longitud por extender. La sujeción de los extremos del tendido es igualmente automática en los tendidos con extensión. Para el caso de los tejidos de punto con desarrollo positivo (sin tensión), no es necesaria esta sujeción.
                  
              .col-10.col-md-5
                figure
                  img(src='@/assets/curso/tema10/img2.svg', alt='imagen ambiental', style='width: 278px;').m-auto
                    

    p.mb-5 El empleo de carros extendedores y, dentro de estos, la elección de unos u otros tendidos, número de capas a extender y/o tipo de tejido. En general, puede decirse que el grado de interés es creciente en función directa al número de telas por extender de la misma pieza.


    p.mb-4
      b(style="color: #0AC4BF;") Máquinas perforadoras

    p.mb-4 Dentro de los patrones, existen referencias interiores que después han de ser realizadas con las pinzas troceadas. Tal es el caso de los puntos de clavado para marcación de bolsillos de parche o pinzas, que deben quedar colocados en todas las prendas en la misma posición.

    p.mb-5
      b Para solucionar esta operación, se emplean los perforadores. Según su funcionamiento, los perforadores se dividen en:



    .row.mb-5
      .col-lg-8.mb-0
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Perforadores giratorios")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Estos constan de agujas de distintos diámetros, según el tipo de tejidos a taladrar. La aguja está conectada a un motor que la hace girar y todo el conjunto está sujeto a un armazón que lo mantiene en posición vertical. Este tipo de perforador se coloca sobre el paquete de telas, encima de la marca que hay que taladrar y haciendo bajar el conjunto de motor y aguja; esta va penetrando en el tejido, realizando un agujero en todas las telas y en el punto deseado. En los tejidos sintéticos, se acondiciona en la base del perforador un bloque calefactor, que calienta la aguja y hace que, al entrar en el colchón de tela, se vaya quemando el borde del agujero, fundiéndose al retirar la aguja o taladro. Al fundirse, el tejido da una mayor estabilidad y, por lo tanto, una mayor calidad en las piezas cortadas.
              
              
          .row(numero="2" titulo="Perforadores alternativos")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Este tipo de perforador transforma, por medio de un juego de engranajes reductores, el movimiento giratorio del motor en alternativo, al mismo tiempo que ejecuta un vaivén de percusión. Con todo esto, se consigue que la aguja abra la malla del tejido sin romperla, consiguiendo un agujero limpio y sin estropear la pieza que se está taladrando. 
              
              .row
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema10/img3.svg', alt='imagen ambiental', style='width: 135px;')
                
          .row(numero="3" titulo="Perforadores de tinta")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Consta de una aguja taladrada en su interior, por donde se introduce una aguja fluorescente que está conectada a un motor de bajas revoluciones; de esta forma, la aguja penetra en el tejido fácilmente, gracias a su movimiento giratorio, y va marcando un punto entintado en cada capa. Este punto únicamente será visible cuando la prenda se encuentre bajo una luz ultravioleta, por lo tanto, dentro del equipo estándar de estos perforadores, se incluye una lámpara de tubos infrarrojos, para colocar en el puesto de trabajo, dentro de la sala de costura, donde se haga necesario ver los puntos y marcas para realizar la operación correspondiente. 
              p.mb-0 El operario, al realizar la operación, debe cuidar que la aguja o taladro no perfore la superficie de la mesa; para evitar esto, se utiliza una hoja metálica o de madera delgada, que se colocará entre la superficie de la mesa y el tendido. 



    p.mb-4
      b(style="color: #0AC4BF;") Marcador de piquetes

    p.mb-4 En un principio, se empleaban las mismas máquinas de cortar para realizar esta operación, pero en muchos casos representa un impedimento para la labor de cortar e, incluso, se aprecian diferencias de profundidad en la marca de unas piezas y otras del mismo colchón, afectando la calidad de la prenda.

    .cajon-b.color-primario.p-3.mb-4
      p.mb-0 Como elemento auxiliar de esta operación, se ha empleado un aparato sencillo, que consta de una pequeña cuchilla en forma de uña que está colocada sobre una guía vertical y que se conserva en la posición más alta debido a un muelle interior. Cuando se desea marcar una referencia exterior en un paquete de telas, se aplica el aparato contra ellas y con la mano se presiona hacia abajo, de forma que la cuchilla corte todas las hojas o capas.

    p.mb-4 En estos casos, se emplean marcadores por calor, que consisten en una cuchilla vertical en forma de “V”, que está conectada a una fuente de calor, producido normalmente por una resistencia eléctrica. Esta tiene varias formas para producir diferentes intensidades de calor según los tejidos a marcar.


    p.mb-4
      b(style="color: #0AC4BF;") Etiquetadoras o numeradores

    p.mb-4 Una vez realizado el corte, se efectúa, en la mayoría de los casos, el etiquetado de todas las piezas que componen cada uno de los paquetes. Estas etiquetas tienen la misión de servir de control y deben llevar las referencias suficientes para identificar cualquier pieza y determinar a qué paquete pertenecen y con qué pieza deben unirse.
    p Para ello, existen diferentes numeradores en el mercado, trabajando con números o imprentillas. La información que deben llevar es la siguiente: talla, modelo, orden consecutivo de capas. Estas últimas cifras saltan de una en una cuando se extiende cara arriba y de dos en dos cuando se extiende en zig-zag. Existen dos tipos de máquinas a emplear:
    p.mb-5 Existen dos tipos de máquinas a emplear:


    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema10/img4.png', alt='imagen ambiental', style='width: 530px;').m-auto
      .col-lg-6
        .row.justify-content-center
          .col-10
            h4.mb-4 Máquinas móviles
            p.mb-0 Son portátiles, conocidas como pistolas de etiquetar, muy similares en su funcionamiento a las empleadas en grandes almacenes y supermercados para marcar los diferentes productos.


    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema10/img5.jpg', alt='Texto que describa la imagen')
              
          .tarjeta.color-acento-contenido.p-3(x="35%" y="40%" numero="" style="background-color: #fff; border-radius: 15px;")
            p
              b Termo adhesivas. 
              b-none Llevan un cabezal calefactor que puede graduarse según el tejido a etiquetar, y las etiquetas llevan un compuesto termo - adherente, con lo cual, al poner en contacto la tela con la fuente de calor, quedan fijadas. Todo el ciclo de movimiento, etiquetado y pegado se realiza en forma automática.
                
          .tarjeta.color-acento-contenido.p-3(x="75%" y="35%" numero="" style="background-color: #fff; border-radius: 15px;")
            p
              b De doble cabeza. 
              b-none Cuando el extendido se realiza en zig-zag, se puede emplear la etiquetadora de doble cabeza, con la cual se consigue colocar dos etiquetas al mismo tiempo, reduciendo los tiempos de trabajo considerablemente.
                
          .tarjeta.color-acento-contenido.p-3(x="48%" y="55%" numero="" style="background-color: #fff; border-radius: 15px;")
            p
              b Con fijación de cocido: 
              b-none son muy parecidas a las anteriores, con la diferencia de que, a la hora de fijar la etiqueta al tejido, la máquina da tres puntadas de un hilo. Estas máquinas están diseñadas para trabajar con tejidos difíciles, donde la etiqueta termoadhesiva o adhesiva puede dejar mancha o pegar mal, cuando se trabaja con una gama muy amplia de tejidos. 
                
          .tarjeta.color-acento-contenido.p-3(x="20%" y="55%" numero="" style="background-color: #fff; border-radius: 15px;")
            p
              b Automática. 
              b-none Este tipo de maquina automatiza completamente el proceso de etiquetado, reduciendo considerablemente el tiempo, mano de obra y eliminando costosos errores que pueden ocurrir con el etiquetado manual. Posee etiquetas autoadhesivas reemplazando grandes patrones de papel o marcadores utilizados para fines de identificación. Esta puede interactuar con cualquier sistema CAD y su trabajo es imprimir y fijar etiquetas de patrones para la capa superior de tela, y acumula hasta 4 pulgadas (10,16 cm) de alto. Imprime y aplica las etiquetas en un solo paso, posee un cabezal de impresión térmica, tiene control de velocidad ajustable. Usa etiquetas estándar de 1” x 2” o 1,25” x 0,5”, soporta números 0-9 y caracteres A-Z, entre otros. Tiene uno de los siete tipos de códigos de barras disponible (el estándar es CODE39). Posee una capacidad para 9 campos de información en diversos tamaños de fuente y funciona con todas las tablas estándar de difusión. 
                
        
      .col-lg-6
        .row.justify-content-center
          .col-10
            h4.mb-4 Máquinas fijas
            p.mb-0 Son las que permanecen en un lugar determinado y necesitan que los paquetes a etiquetar vayan hasta ellas. Estas máquinas, según la forma de fijar las etiquetas, se dividen en:


    p.mb-4
      b(style="color: #0AC4BF;") Pinzas

    p.mb-5 Instrumento para sujetar los bloques de tela para evitar su deslizamiento. Son de dos tipos:

    .row.justify-content-center.mb-5
      .col-11.mb-0
        .tarjeta.tarjeta--azuverde.p-4.py-lg-5(style="border-radius: 0;")
          SlyderA
            .row.align-items-center.justify-content-center
              .col-11.col-md-5.mb-4.mb-md-0
                h4.mb-4 Normales
                p.mb-0 Son similares a las que existen en el mercado y se usan cuando el extendido es de poca altura y corresponde a la cobertura de la boca de la pinza, que es de 4 a 8 cms.
                  
              .col-10.col-md-5
                figure
                  img(src='@/assets/curso/tema10/img6.png', alt='imagen ambiental', style='width: 316px;').m-auto
                    
            .row.align-items-center.justify-content-center
              .col-11.col-md-5.mb-4.mb-md-0
                h4.mb-4 Verticales
                p.mb-4 Consiste en un fleje horizontal, que corre a lo largo de una guía vertical. La marcada y el paquete se introducen entre el fleje y la base de la guía, manteniéndose esta sujeción por presión sobre el fleje horizontal. Con este tipo de pinzas, se pueden llegar a sujetar alturas de corte de 20 a 25 cm.
                p.mb-0 El empleo de las pinzas trae consigo el uso de una cantidad considerable de ellas y el cambio reiterado de posición de estas durante la operación de cortar, ya que estorban para realizar la operación.
                  
              .col-10.col-md-5
                figure
                  img(src='@/assets/curso/tema10/img7.png', alt='imagen ambiental', style='width: 316px;').m-auto
                    


    .row.justify-content-center.mb-5
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema10/img8.png', alt='imagen ambiental', style='width: 340px;').m-auto
      .col-lg-8
        p.mb-4
          b(style="color: #0AC4BF;") Grapadora
        p.mb-4 Es una cosedora a la cual le falta la base, permitiendo colocar un gancho en las zonas interiores del extendido. Los ganchos o grapas usados en confección varían en su tamaño y forma, dependiendo del tipo de tejido y el número de capas extendidas.
        p.mb-0 Los ganchos o grapas tienen un inconveniente y es que la sujeción no es muy fiable en los tejidos esponjosos, blandos o muy elásticos.



    .row.justify-content-center.mb-5
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema10/img9.png', alt='imagen ambiental', style='width: 355px;').m-auto
      .col-lg-8
        p.mb-4
          b(style="color: #0AC4BF;") Cortadora de extremos
        p.mb-4 Uno de los principales problemas de tirar de una tela de un rollo montado al extremo de la mesa de corte es el tiempo, esfuerzo y tejidos derrochados al cortar cada capa. Puesto que hacer un corte recto es difícil, el extendedor deja siempre un margen adicional.
        p.mb-4 La cortadora de extremos ofrece mejoras significativas en velocidad, eficiencia y precisión en esta operación. La cuchilla circular, guiada por un carril, permite al extendedor efectuar un corte más rápido y exacto de cualquier tipo de material. Tiene también un mecanismo de elevación que permite elevar la pista por encima de la capa de corte y luego hacerla bajar sobre el tejido extendido, manteniendo la capa de corte alineada en el extremo de corte.
        p.mb-0 Posee también un mecanismo de afilado automático, que realiza con un esmeril situado en lado izquierdo superior de la cuchilla; este proceso se realiza manualmente.



    p.mb-4
      b(style="color: #0AC4BF;") Pines
    p.mb-4 Se utilizan para casar los tejidos a rayas y cuadros, para mayor calidad al realizar el extendido. Son colocados en los extremos del tendido, se marcan tramos (50 o 70 cm) a lo largo del tendido, para luego aplomarlos con una cuerda de un color distinto del tejido. Cada capa debe ir ensartada en cada uno de los pines que se coloquen a lo largo y ancho del tendido. 
    p.mb-0 Los pines se deben retirar a medida que se va cortando, no retirarlos todos a la vez. Existe gran variedad de pines: fijos, removibles y de diferentes tamaños 

</template>

<script>
export default {
  name: 'Tema10',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

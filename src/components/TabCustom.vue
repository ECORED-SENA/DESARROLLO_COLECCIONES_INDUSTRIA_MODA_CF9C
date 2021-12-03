<template lang="pug">
  .tabs-b.tabs-special
    .tabs-b__header.row.m-0
      .col-6.col-sm-4.col-lg.tabs-b__tab.tabs-special1.mx-2(
        v-for="(elm,index) of elements"
        :key="'tabs-b-menu-'+elm.id"
        :class="{'tabs-b__tab--active' : selected === elm.id}"
        @click="selected = elm.id"
        @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
      )
        .indicador__container(v-if="mostrarIndicador && index === 1")
          .indicador--click
        .tabs-b__tab__icon(v-if="elm.icono")
          img(:src="elm.icono")
        .tabs-b__tab__title
          span(v-html="elm.titulo")

    .tabs-b__content-item(
      v-for="elm of elements"
      :key="'tabs-content-'+elm.id"
      v-show="selected === elm.id"
      v-child="elm.elm"
    )

    .hidden-slot
      slot
</template>

<script>
import componentsSlotMixins from 'ecored-base-pkg/src/mixins/componentSlotMixins'
export default {
  name: 'TabCustom',
  mixins: [componentsSlotMixins],
  data() {
    return {
      mostrarIndicador: true,
    }
  },
}
</script>

<template lang="pug">
  div
    vi-header
    div(v-for="(item, index) in navMenu" :key="index")
      div(v-for="childItem, childIndex) in item" :key="childIndex") {{childItem.name}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ViHeader from '@/components/ViHeader.vue';
import { mapState } from 'vuex';
// @Component({
//   name: 'Index',
//   components: {
//     HelloWorld,
//     ViHeader,
//   },
// })
// export default class Index extends Vue {
//   computed: object
//   constructor () {
//     super()
//     this.computed = {
//       ...mapState({
//         navMenu: function (state: VuexStore.State): IndexStore.State.NavMenu {
//           return state.index.navMenu
//         }
//       })
//     }
//     // console.log(this.computed.navMenu)
//   }
//   public created() {
//     this.$store.dispatch('initAjax')
//   }
//   public data() {
//     return {}
//   }
// }
export default  Vue.extend({
  name: 'Index',
  components: {
    HelloWorld,
    ViHeader,
  },
  computed: {
    ...mapState({
      navMenu: (state: VuexStore.State): IndexStore.NavMenu => state.index.navMenu,
    }),
  },
  created() {
    // console.log()
    this.$store.dispatch('initAjax')
  },
  data() {
    return {}
  },
})
</script>

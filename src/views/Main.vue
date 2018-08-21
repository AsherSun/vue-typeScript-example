<template>
  <div class="home">
    <vi-header></vi-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ViHeader from '@/components/ViHeader.vue';
import { getNavMenuList } from '@/api/main.ts';
// import request from '@/utils/request.js';
// const process = require('process')
@Component({
  components: {
    HelloWorld,
    ViHeader,
  },
})
export default class Home extends Vue {
  public created() {
    getNavMenuList()
  }
}
</script>

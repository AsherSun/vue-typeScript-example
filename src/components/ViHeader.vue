<template lang="pug">
  header(class='header header_flex-between')
    .header__txt-location {{location}}
    .search-form 
      span(
        class="search-form__txt_description" 
        :class="{'search-form__txt-prepareSearch': prepareSearch}" 
        v-if="!searchKeyword"
      ) 请输入商户名、地点
      input(
        class="search-form__input" 
        @focus="() => prepareSearch = true" 
        @blur="() => prepareSearch = false" 
        v-model="searchKeyword"
      )
    .login 头像
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'ViHeader',
})
export default class ViHeader extends Vue {
  public searchKeyword: string = ''
  public prepareSearch: boolean = false;
  @Prop({ type: String, default: '杭州' }) public location!: string;
}
</script>

<style scoped lang="scss">
.header {
  padding: 0 $t-header--padding;
  width: 100%;
  height: 50px;
  color: #fff;
  box-sizing: border-box;
  background-color: $t--color;
  &_flex-between {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  &__txt-location {
    font-size: 14px;
  }
}
.search-form {
  position: relative;
  width: 225rem / $t--rem;
  height: 30px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 30px;
  &__txt {
    &_description {
      position: absolute;
      color: #b8b8b8;
      top: 50%;
      left: 50%;
      width: 130rem / $t--rem;
      text-align: center;
      transform: translate3d(-50%, -50%, 0);
      font-size: 14px;
      z-index: 1;
      transition: all 0.2s ease;
    }
    &-prepareSearch {
      left: 15px;
      transform: translate3d(0, -50%, 0);
    }
  }
  &__input {
    position: absolute;
    left: 50%;
    margin: 0 auto;
    width: 200rem / $t--rem;
    border: 0;
    outline: none;
    height: inherit;
    caret-color: $t--color;
    transform: translateX(-50%);
    background-color: transparent;
    z-index: 10;
  }
}
</style>
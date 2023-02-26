<template>
  <nav class="nav">
    <ul class="nav__wrap">
      <li v-for="(item, index) of $store.state.catalog.select" 
      :key="item.id" 
      :class="{
        nav__item_active: index === activeIndex
      }"
      @click="catIsActive($event, index)">
        <span>{{ item.name }}</span>
      </li>

    </ul>
  </nav>
</template>

<script lang="ts">
import { mapState, useStore } from 'vuex';
import { computed, onMounted } from 'vue';

import{ref} from "vue"

export default {
  setup(){
    const store = useStore();

    const activeIndex = ref(0);

    const catIsActive = ($event:any, index: any) => {
      activeIndex.value = index
      store.commit("newArr", index)
    }
    onMounted(()=>{
      catIsActive(null, activeIndex.value)
    })
    return{
      catIsActive,
      activeIndex,
    }
    

  },
}

</script>

<style lang="scss">
.nav {
  z-index: 6;
}
.nav__wrap {
  display: flex;
  color: white;
  justify-content: space-between;
  font-family: 'Montserrat';
  font-weight: 300;
  li{
    position: relative;
    a:visited{
      color: white;
      span{
      z-index: 2;
    }
      
    }
  }
}
.nav__item_active::after{
  background: white;
  content: " ";
  min-height: 125px;
  clip-path: polygon(25% 26%, 75% 26%, 69% 53%, 18% 53%);
  min-width: 219px;
  display: block;
  position: absolute;
  left: -52px;
  top: -39px;
  z-index: -1;
  
}
.nav__item_active{
  
    span{
      color: #090909;
      font-weight: 700;
      font-size: 18px;
    }
}
</style>
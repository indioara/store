<template>
  <nav class="nav">
    <ul class="nav__wrap">
        <li v-for="(item, index) of $store.state.catalog.select" 
        :key="item.id"
        class="nav__item"
        :class="{
          nav__item_active: index === activeIndex
        }"
        @click="catIsActive($event, index)">
        <router-link to="/catalog">
          <span>{{ item.name }}
          </span>
        </router-link>
          
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
  .nav{
    &__wrap{
      display: flex;
    }
    &__item{
      height: 40px;
      width: 164px;
      clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
      color: #070707;
      a:visited{
        color:white;
      }
      z-index: 4;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      /* identical to box height */
      text-align: center;
      color: white;
    }
    &__item_active{
      a:visited{
        color: #090909;
      }
      background-color: white;
      color: #090909;
    }
  }
</style>
<template>
  <main>
      <div class="main">
        <div class="conteiner">
          <ui-nav-bar class="main_nav"></ui-nav-bar>
        </div>
      </div>
      <hero></hero>
      <servise></servise>
      <carusel></carusel>
      <stock></stock>
      <top-sales></top-sales>
      <catalog></catalog>
      <reviews></reviews>
      <my-video></my-video>
      <connectus></connectus>
      <my-footer></my-footer>
  </main>
</template>

<script>
import myHeader from '@/components/myHeader.vue'
import UiNavBar from '@/components/UI/uiNavBar.vue'
import hero from '@/components/hero.vue'
import Servise from '@/components/servise.vue'
import carusel from "@/components/carusel.vue"
import stock from "@/components/stock.vue"
import topSales from "@/components/topSales.vue"
import catalog from "@/components/catalog.vue"
import reviews from "@/components/reviews.vue"
import myVideo from '@/components/video.vue'
import connectus from "@/components/connectUs.vue"
import myFooter from "@/components/footer.vue"

export default {
  components: { 
    myHeader, 
    UiNavBar, 
    hero, 
    Servise,
    carusel,
    stock,
    topSales,
    catalog,
    reviews,
    myVideo,
    connectus,
    myFooter,
  },
  beforeMount() {
    this.$store.dispatch("fetchList");
    },
}
</script>

<style lang="scss">
.main{
  position: relative;
  
}
.main_nav{
    position: absolute;
    li{

      margin-left: 50px;
    }
    li:First-child{
      margin-left: 0px;
    }
}
</style>
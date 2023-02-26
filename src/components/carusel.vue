<template>
  <section class="carusel">
    <div class="conteiner">
        <div class="carusel__wrap">
            <div class="carusel__information">
                <h3 class="carusel__title title"><span>Пример</span> печати</h3>
                <p class="carusel__text">Это может быть на тебе</p>
            </div>
            <div class="carusel__swiper-conteiner">
                <swiper
                    :modules="modules"
                    :autoplay="{
                        delay: 4000,
                        disableOnInteraction: true,
                    }"
                    :slides-per-view="3"
                    @swiper="onSwiper"
                    :space-between="50"
                    :speed = "800"
                    @slideChange="onSlideChange"
                    :loop="true"
                    :navigation="{
                        prevEl: prev,
                        nextEl: next,
                    }"
                    >

                    <swiper-slide class="carusel__clide" v-for="item of caruselSlides" :key="item.id">
                    <img :src="require('@/assets/images/' + item.img)" alt="hudi">
                    <img class="swiper__trg1" src="@/assets/images/caruselTrg.png" alt="">
                    <img class="swiper__trg2" src="@/assets/images/caruselSubTrg.png" alt="">
                    <img class="swiper__any" src="@/assets/images/caruselAny.png" alt="">
                    <img class="swiper__logo" src="@/assets/images/logoCarusel.png" alt="logo">
                    </swiper-slide>
                </swiper>
                    <div ref="prev" class="swiper__arrow-prev"><img src="@/assets/images/caruselArrowPrev.svg" alt=""></div>
                    <div ref="next" class="swiper__arrow-next"><img src="@/assets/images/caruselArrowNext.svg" alt=""></div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>

import {ref} from "vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Navigation} from "swiper"
import 'swiper/css';
import "swiper/css/autoplay";
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup(){
        const prev = ref(null)
        const next = ref(null)
        
        const caruselSlides = [
            {id: 1, img: "carusel1.png"},
            {id: 2, img: "carusel1.png"},
            {id: 3, img: "carusel1.png"},
            {id: 4, img: "carusel1.png"},
            {id: 5, img: "carusel1.png"},
            {id: 6, img: "carusel1.png"},
        ]


        return{
            caruselSlides,
            modules: [Autoplay,Navigation],
            prev,
            next,
        }
    }
}
</script>

<style lang="scss">
.carusel {
}
.carusel__wrap {
}
.carusel__information {
    margin-top: 223px;
}
.carusel__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    /* identical to box height */


    color: white;
    span{
        color: #FFC700;
    }
}
.title {
}
.carusel__text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */


    color: #B8B8B8;

}



.carusel__swiper-conteiner {
    position: relative;
    text-align: center;
}
.carusel__clide {
    padding-top: 77px;
    position: relative;
}
.swiper__trg1, .swiper__trg2 {
    
    position: absolute;
    left: 51px;
    top: 30px;
    z-index: -1;

}
.swiper__trg2{
    left: 40px;
    top: 22px;
}
.swiper__any {
    position: absolute;
    left: -98px; 
    top: -20px;
    z-index: -3;
}
.swiper__logo {
    transform: translateX(70px);
}


.swiper__arrow-prev {
    position: absolute;
    top: 184px;
    left: -83px;
    cursor: pointer;
}
.swiper__arrow-next {
    position: absolute;
    top: 184px;
    cursor: pointer;
    right: -83px;
}


</style>
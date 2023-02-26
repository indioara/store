<template>
  <section class="stock">
    <div class="conteiner stock__conteiner">
        <div class="stock__wrap">
            <div class="stock__about">
                <h2 class="stock__title"><span>Акции</span>и предолжения</h2>
                <p class="stock__text">Успей урвать себе</p>
            </div>
            <div class="stock__swiper-conteiner">
                <swiper 
                :modules="modules"
                :speed="700"
                class="stock__swiper"
                :slides-per-view="1"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :loop="true"
                :navigation="{
                    prevEl: prev,
                    nextEl: next,
                }"
                
                >
                    <swiper-slide class="stock__swiper-slide" v-for="slide of slides" :key="slide.id">
                        <div class="stock__swiper-slide-about">
                            <h4 class="stock__swiper-slide-title">{{ slide.title }}</h4>
                            <p class="stock__swiper-slide-text">{{ slide.text }}</p>
                            <ui-button class="stock__swiper-slide-btn">Подробней</ui-button>
                        </div>
                        <img src="@/assets/images/1111.png" class="stock__swiper-slide-img" alt="">

                    </swiper-slide>
                </swiper>
                <div ref="next" class="stock__swiper-slide-next"><img src="@/assets/images/icons/stockNext.png" alt=""></div>
                <div ref="prev" class="stock__swiper-slide-prev"><img src="@/assets/images/icons/stockPrev.png" alt=""></div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import {ref} from "vue"
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation} from "swiper"

import 'swiper/css';
import 'swiper/css/navigation';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup(){
        const next = ref(null)
        const prev = ref(null)
        let slides = [
            {
                id:1, 
                title: "Русский корабль", 
                text: "Купи футболку и 10% с каждой покупки пойдёт на нуждый ВСУ, купи стильную футболку и поддержи своего брата на фронте",
                img: "stock1.png",
            },{
                id:2, 
                title: "Русский корабль", 
                text: "Купи футболку и 10% с каждой покупки пойдёт на нуждый ВСУ, купи стильную футболку и поддержи своего брата на фронте",
                img: "stock1.png",
            }
        ]

        return{
            modules: [Navigation],
            slides,
            prev,
            next,
        }
    }
    
}
</script>

<style lang="scss">
.stock {
    background-image: url("@/assets/images/stockBg.png");
    background-repeat: no-repeat;
    background-position: center 40px;
    margin-top: 249px;
}
.conteiner {
}
.stock__conteiner {
}
.stock__wrap {
}
.stock__about {

}
.stock__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    span{
        color: #FFC700;
    }
    color: #FFFFFF;
    
}
.stock__text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */
    

    color: #FFFFFF;
}
.stock__swiper-conteiner {
    position: relative;
}
.stock__swiper {
   
}
.stock__swiper-slide {
    display: flex;
   
   
}
.stock__swiper-slide-about {
    margin-top: 46px;
    
}
.stock__swiper-slide-title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 63px;
    text-transform: uppercase;
    margin-top: 111px;
    color: #252525;
}
.stock__swiper-slide-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: #262626;
    max-width: 587px;
}
.stock__swiper-slide-btn {
    margin-top: 34px;
    margin-bottom: 169px;
    background: #0F0F0F;
    margin-left: 9px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 100%;
    /* identical to box height, or 20px */

    text-transform: uppercase;
    box-shadow: 0px 0px 10px 0px black;

    color: #FFFFFF;
}

.stock__swiper-slide-img{
    position: absolute;
    right: -35px;
    top: -123px;

    

}
.stock__swiper-slide-next {
    right: -95px;
}
.stock__swiper-slide-prev {
    left: -95px;
    
}
.stock__swiper-slide-prev, .stock__swiper-slide-next{
    cursor: pointer;
    position: absolute;
    top: 219px;
}
</style>
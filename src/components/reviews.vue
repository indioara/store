<template>
    <section class="reviews">
      <div class="conteiner">
        <div class="reviews__content">
            <div class="reviews__titles">
                <h2 class="reviews__title">От<span>зы</span>вы</h2>
                <p class="reviews__text">Только посмотри что о нас говорит <br> твоя соседка</p>
            </div>
          <div class="ddd">
                <div class="reviews__slider">
                <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">
                    <div v-for="slide in slides" :key="slide.id" class="swiper-slide">
                    <div class="swiper-slide-review">
                            <div class="swiper-slid-top">
                            <div class="swiper-slid-right">
                                <div class="swiper-slide-img"></div>
                            <div class="swiper-slide-titles">
                                <p class="swiper-slie-name">{{ slide.name }}</p>
                                <p class="swiper-slide-who">{{ slide.who }}</p>
                            </div>
                            </div>
                            <div class="swiper-slide-stars">
                                    <img  v-for="(star, index) of stars.slice(0,slide.raiting)" :key="index" :src="require('@/assets/images/icons/'  +  star )"  alt="">
                            </div>
                        </div>
                        <div class="swiper-slide-botton">
                            <p class="swiper-slide-text">{{ slide.massage }}</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="swiper-button-next"><img src="@/assets/images/icons/2.svg" alt=""></div>
                <div class="swiper-button-prev"><img src="@/assets/images/icons/1.svg" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { reactive, toRefs, onMounted, ref} from 'vue';
  import Swiper, { Autoplay, Navigation} from "swiper";
  import 'swiper/css';
  
  export default {
    setup() {

        const stars = [
        'star.svg',
        'star.svg',
        'star.svg',
        'star.svg',
        'star.svg'
        ]

      let sss = ref(3)
      const state = reactive({
        swiper: null,
        slides: [
          { 
            id: 1, 
            name: "Мария Петровна", 
            who: "Твоя Соседка", 
            raiting: 5, 
            massage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis id quisque dictumst. Elementum diam rhoncus eu lacus in maecenas non imperdiet quis. Aliquam odio et dignissim nibh hendrerit amet ac. " },
          { 
            id: 2, 
            name: "Иван Челядь",
            who: "Твой Соседка", 
            raiting: 2, 
            massage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis id quisque dictumst. Elementum diam rhoncus eu lacus in maecenas non imperdiet quis. Aliquam odio et dignissim nibh hendrerit amet ac. " },
          { 
            id: 3, 
            name: "Нина два стакана", 
            who: "Твоя Соседка", 
            raiting: 4, 
            massage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit convallis id quisque dictumst. Elementum diam rhoncus eu lacus in maecenas non imperdiet quis. Aliquam odio et dignissim nibh hendrerit amet ac. " },
          
          
        ],
      });
  
      const initSwiper = () => {
        state.swiper = new Swiper('.swiper-container', {
          modules: [Autoplay, Navigation],
          loop: true,
          direction: 'vertical',
          slidesPerView: sss.value,
          speed: 700,
          autoplay: { delay: 4000, disableOnInteraction: true },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
  
        });
      };
      onMounted(() => {
        initSwiper();
      });
      return {
        ...toRefs(state),
        stars,
      }
  
    },
  
  }
  </script>


<style lang="scss" scoped>

.reviews{
    background-image: url("@/assets/images/reviews/reviewsBg.png");
    background-repeat: no-repeat;
    background-position: center 415px;
    &__titles{
        margin-top: 186px;
        margin-bottom: 157px;
        
    }
    &__title{
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 72px;
            line-height: 88px;
            /* identical to box height */
            color: #F0F0F0;
            span{
                color:#FFC700;
            }
        }
    &__text{
        font-family: 'Montserrat Alternates';
        font-weight: 300;
        font-size: 32px;
        line-height: 39px;

        color: #949494;
    }
    &__text, &__title{
        font-style: normal;
        text-align: center;
    }





}







.reviews {
}
.conteiner {
}
.reviews__content {
    
}
.reviews__titles {
}
.reviews__title {
}
.reviews__text {
}
.reviews__slider {
    display: flex;
    justify-content: center;
    position: relative;
    
}
.swiper-button-next {
    right: 173px;
    padding: 37px 37px 37px 41px;
}
.swiper-button-prev {
    left: 173px;
    padding: 37px 41px 37px 37px;
}
.swiper-button-prev,.swiper-button-next {
    background-color: #070707;
    border-radius: 50%;
    &::after{
        content: "";
    }
}
.swiper-container {
    overflow: hidden;
    position: relative;
    margin-top: 200px;

    
}
.swiper-wrapper {
   height: 600px; 
}
.swiper-slide{
text-align: center;
padding: 0;



}
.swiper-slide-review{
    width: 333px;
    height: 160px;
    background: #F6F0E3;
    padding: 10px;
    border-radius: 10px;
}

.swiper-slid-top {
display: flex;
justify-content: space-between;
}
.swiper-slide-img {
    height: 30px;
    width: 30px;
    background: #070707;
    border-radius: 50%;
}
.swiper-slide-titles {
    margin-left: 10px;
    text-align: left;
}
.swiper-slie-name {
    font-size: 17px;
    font-weight: bold;
    font-family: 'Montserrat';
}
.swiper-slide-who {
    font-family: 'Montserrat Alternates';
    font-size: 13px;
    margin-top: 2px;
}
.swiper-slide-botton {
    margin-top: 10px;
}
.swiper-slide-text {
    text-align: left;
    font-size: 15px;
}
.swiper-slide-stars{
    display: flex;
    img{
        max-width: 12px;
        max-height: 12px;
    }

}
.swiper-slid-right{
    display: flex;
}
.ddd{
    background-repeat: no-repeat;
    background-position: center;
    height: 900px;
    background-image: url("@/assets/images/reviews/phone.png");
}

</style>
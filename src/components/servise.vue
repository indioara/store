<template>
  <section class="service">
    <div class="conteiner">
        <div class="service__wrap">
            <h2 class="service__title">Наши <span>услуги</span> </h2>
            <p class="servise text">Главной деятельностью масонств</p>
        </div>
        <div class="service__content">
            <ul class="servise__list">
                <li class="servise__item" v-for="item of serviceList" :key="item.id">
                    <div class="service__item-about">
                        <h4 class="servise__item-title">{{ item.title }}</h4>
                        <p class="service__item-text">{{ item.text }}</p>
                        <button class="service__item-btn">Подробней</button>
                    </div>
                    <img class="service__item-img" :src="require('@/assets/images/' + item.img)" alt="">

                </li>
            </ul>
        </div>
    </div>
  </section>
</template>
<script>
import {ref} from "vue"
export default {
    data(){
        const serviceList = [
            {id: 1, title: `Печать флекс/флок плёнкой`, text: "Качественная печать При малых тиражах",img: "service1.png" },
            {id: 2, title: "Печать флекс/флок плёнкой", text: "Качественная печать При малых тиражах",img: "service2.png" },
            {id: 3, title: "Печать флекс/флок плёнкой", text: "Качественная печать При малых тиражах",img: "service3.png" },
            {id: 4, title: "Печать флекс/флок плёнкой", text: "Качественная печать При малых тиражах",img: "service1.png" },
            {id: 5, title: "Печать флекс/флок плёнкой", text: "Качественная печать При малых тиражах",img: "service2.png" },
            {id: 6, title: "Печать флекс/флок плёнкой", text: "Качественная печать При малых тиражах",img: "service3.png" },
        ]


        return{
            serviceList
        }
    }
}
</script>

<style lang="scss">
.service {
}
.service__wrap {
}
.service__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 88px;
    color: #F0F0F0;
    margin-top: 259px;
    text-align: center;

    


    
    span{
        color:#FFC700;
    }
}
.servise {
}
.text {
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;

    color: #949494;
}
.service__content {
    
}
.servise__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 133px;
}
.servise__item{
    position: relative;
    text-align: center;
    margin-left: 42px;
    
    
    
}
.service__item-about{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.servise__item::before{
    clip-path: polygon(23% 16%, 87% 16%, 88% 85%, 23% 65%);
    background: #0E0E0E;
    content: " ";
    position: absolute;
    height: 540px;
    width: 463px;
    left: -97px;
    top: -72px;
    z-index: -1;
}
.servise__item-title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    max-width: 188px;
    color: #F0F0F0;
    margin-top: 33px;

    
}
.service__item-text {
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    opacity: 0.8;
    color: #F0F0F0;
    margin-top: 15px;
    max-width: 198px;
}
.service__item-btn {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    background: #171717;
    padding: 15px 25px;
    color: #FFC700;
    margin-top: 15px;
    transition-duration: 400ms;
    &:hover{
        transition-duration: 300ms;
        background: #FFC700;
        color: #171717;
    }
}
.service__item-img {
    margin-top: 30px;
}
</style>
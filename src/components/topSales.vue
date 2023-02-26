<template>
  <section class="top-sales">
    <div class="conteiner">
        <div class="top-sales__wraper">
            <div class="top-sales__about">
                <h3 class="top-sales__title title">Топ про<span>даж</span></h3>
                <p class="top-sales__text">То, что вам нравиться</p>
            </div>
            <div class="top-sales__bottom">
                <ul class="top-sales__menu">
                    <li class="top-sales__menu-item" v-for="(item, index) of menu" :key="index">
                        <button :class="{
                            'top-sales__menu-item_active' : index === indexActive
                        }"
                        @click="makeIndexIsActive(index)"
                        >{{ item }}</button></li>
                </ul>
                <ul class="top-sales__product">
                    <li class="top-sales__product-item" v-for="item of product" :key="item.id">
                        <div class="top-sales__product-item-img">
                            <img  :src="require('@/assets/images/' + item.img)" alt="">
                        </div>
                            <p class="top-sales__product-item-name">{{ item.name }}</p>
                            <p class="top-sales__product-item-price">{{ item.price }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import {ref} from "vue"
export default {
    data(){
        const menu = ["все", "кружки","кружки","кружки","кружки","кружки","кружки","кружки"]

        let indexActive = ref(1)
        const makeIndexIsActive = (index) => {
            indexActive.value = index
        }

        const product = [
            {id: 1, img: "topSales1.png", name: "Футболка белая", price: 230 + "₴" },
            {id: 2, img: "topSales2.png", name: "Футболка белая", price: 230 + "₴" },
            {id: 3, img: "topSales1.png", name: "Футболка белая", price: 230 + "₴" },
            {id: 4, img: "topSales2.png", name: "Футболка белая", price: 230 + "₴" },
        ]
        return{
            menu,
            product,
            indexActive,
            makeIndexIsActive,
        }
    }
}
</script>

<style lang="scss">
.top-sales {
    margin-top: 169px;
}
.top-sales__wraper {
}
.top-sales__about {
    margin-bottom: 95px;
}
.top-sales__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 88px;
    /* identical to box height */

    text-align: center;

    color: #F1F1F1;
    span{
        color:#FFC700;
    }
}
.title {
}
.top-sales__text {
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;

    color: #949494;
}
.top-sales__bottom {
}
.top-sales__menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 85px;
}
.top-sales__menu-item {
    button{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        background-color: #070707;
        color: #FFFFFF;
    }
    .top-sales__menu-item_active{
        background-color: #FFC700;
        color: #070707;
        padding: 8px 23px;
        font-weight: 600;
}
}
.top-sales__product {
    display: flex;
    justify-content: space-between;
}
.top-sales__product-item {
    position: relative;

}
.top-sales__product-item-price{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

    color: #F0F0F0;
}
.top-sales__product-item-name{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
}

.top-sales__product-item-img{
    height: 281px;
}


</style>
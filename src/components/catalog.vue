<template>
  <section class="catalog">
    <div class="conteiner">
        <div class="catalog__wrap">
            <div class="catalog__titles">
                <h3 class="catalog__title">Ката<span>лог</span></h3>
                <p class="catalog__text">Выбирай всё что по душе</p>
            </div>
            <div class="catalog__bottom">
                <ul class="catalog__list">
                    <li class="catalog__item" v-for="(item) of list.slice(0, 9)" :key="item.id">
                        <a @click="$router.push(`catalog/${item.id}`)"> 
                            <div class="catalog__item-img-wrap">
                                <img :src="require('@/assets/images/' + item.img)" alt="" class="catalog__item-img">
                            </div>
                            <h6 class="catalog__item-title">{{ item.name }}</h6>
                            <p class="catalog__item-text">{{ item.text }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    setup(){
        
        return{
        }
    },
    computed:{
        ...mapState({
            list: state => state.catalog.list
        })
    }
}
</script>

<style lang="scss">
.catalog {
}
.catalog__wrap {
    margin-top: 228px;
}
.catalog__titles {
}
.catalog__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 88px;
    /* identical to box height */
    color: #F0F0F0;
    text-align: center;
    span{
        color: #FFC700;
    }
    
}
.catalog__text {
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;

    color: #949494;
}
.catalog__bottom {
    display: flex;
    justify-content: center;
    margin-top: 159px;

}
.catalog__list {
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    row-gap: 29px;
    column-gap: 49px;
}
.catalog__item {
    cursor: pointer;
    width: 375px;
    text-align: center;
    padding: 45px 0;
    background-color:#101010;
}
.catalog__item-img {
}
.catalog__item-title {
    font-family: 'Montserrat';
    margin-top: 34px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;
}
.catalog__item-text {
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    color: #FFC700;
}
.catalog__item-img-wrap{
    height: 248px;
}
</style>
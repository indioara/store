<template>
  <section class="cart">
    <div class="cart-conteiner conteiner">
        <div class="cart__wrap">
            <div class="cart__titles">
                <h2 class="cart__title title">Корзина</h2>
                <ul class="cart__list">
                    <li class="cart__item" v-for="item of cartList" :key="item.id">
                        <div class="cart__img">
                            <img :src="require('@/assets/images/' + item.img)" alt="">
                        </div>
                        <div class="cart__title">
                            <h4 class="cart__title">{{ item.name }}</h4>
                            <p class="cart__type">{{ item.type2 }}</p>
                        </div>
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
    data(){
        return{

        }
    },
    computed:{
        ...mapState({
            cartList: state => state.product.cartList
        })
    }
}
</script>

<style scoped>

</style>
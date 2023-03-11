<template>
  <section class="cart">
    <div class="cart-conteiner conteiner">
        <div class="cart__wrap">
            <div class="cart__titles">
                <h2 class="cart__title title">Корзина</h2>
                <h2 class="cart__is-empty" v-if="cartList.length == 0">корзина пуста</h2>
                <ul class="cart__list">
                    <li class="cart__item" v-for="item of cartList" :key="item.id">
                        <div class="cart__img">
                            <img :src="require('@/assets/images/' + item.img)" alt="">
                        </div>
                        <div class="cart__item-titles">
                            <h4 class="cart__item-title">{{ item.name }}</h4>
                            <p class="cart__type">{{ item.type2 }}</p>
                        </div>
                        <div class="product__options">
                                <select v-model="item.sizeOption" class="product__size-input">
                                    <option :value="size" v-for="size of item.size" :key="size" >{{ size }}</option>
                                </select>
                                <select v-model="item.colorOption" class="product__color-input">
                                    <option :value="color" v-for="color of item.color" :key="color">{{ color }}</option>
                                </select>
                            <div class="product__val">
                            <button @click="valPrev(item)">-</button> 
                            <input type="number" v-model="item.val" @input="changeVal(item.value, item)"> 
                            <button @click="valNext(item.value, item)">+</button>
                            </div>
                        </div>
                        <p class="cart__price">{{ item.price * item.val }}.00 грн</p>
                        <div class="cart__delete" @click="deleteItem(item)"><img src="@/assets/images/icons/delete.svg" alt="delete" ></div>
                    </li>
                </ul>
            </div>
            <order/>
        </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import order from "@/components/order.vue"
export default {
    components:{
        order
    },
    data(){
        return{
            val: 1,
            sizeOption: "",
            colorOption: "",
            isVisible: false,
        }
    },
    methods:{
        valNext(count, item){
        if(this.val == count){
            return
        }else this.val = item.val++
        },
        valPrev(item){
        if(this.val == 1){
            return
        }else this.val = item.val--
        },
        changeVal(value, item){
            if(item.val >= value){
            item.val = value
            this.val = item.value
        }
    },
    deleteItem(item){
        let index = this.cartList.indexOf(item)
        this.cartList.splice(index, 1)
    },
    },
    computed:{
        ...mapState({
            cartList: state => state.product.cartList
        }),
    }
}
</script>

<style scoped lang="scss">
.cart__delete{
    cursor: pointer;
    background-color: white;
    padding: 10px;
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    right: -100px;
    
}
.cart{
    &__is-empty{
        margin-top: 150px;
        margin-bottom: 150px;
        text-align: center;
        color: #B5B5B5;
        font-size: 22px;
    }
    &__title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        /* identical to box height */
        margin-top: 71px;
        text-align: center;
        color: #FFFFFF;
        

    }
    &__img{
        img{
            height: 164px;
            width: 164px;
        }
    }
    &__item{
        position: relative;
        &:hover{
            
            .cart__delete{
                
                opacity: 1;
            }
        }
        &:first-child{
            margin-top: 28px;
        }
        margin-top: 55px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__price{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        width: 215px;
        /* identical to box height */


        color: #FFC700;
    }
    &__item-title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 39px;

        color: #FFFFFF;
    }
    &__type{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #B5B5B5;
    }
}
</style>
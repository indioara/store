<template>
  <section class="order">
    <div class="order__corteiner conteiner">
        <div class="order__wrap">
            <div class="order__titles">
                <h2 class="order__title">Оформить заказ</h2>
            </div>
            <form class="order__bottom">
                <div action="#" class="order__form">
                    <input type="text" placeholder="Ваше имя">
                    <input type="email" placeholder="Email">
                    <input type="tel" placeholder="Телефон">
                    <input type="text" placeholder="Город">
                    <input type="text" placeholder="Отделение">
                </div>
                <div class="order__right">
                    <div class="order__chexboxes">
                        <div class="order__first-column">
                            <h6>Доставка</h6>
                            <div class="order__list">
                                <p><input type="checkbox" name="delevery" value="option1"> Самомвывоз</p>
                                <p><input type="checkbox" name="delevery" value="option2"> Новая почта</p>
                            </div>
                        </div>
                        <div class="order__second-column">
                            <h6>Оплата</h6>
                            <div class="order__list">
                                <p><input type="checkbox"> Наложеный платёж</p>
                                <p><input type="checkbox"> Безналичный</p>
                            </div>
                        </div>
                    </div>
                        <div class="order__prices">
                            <p>Заказ:<span>{{ getAllPrice }}</span></p>
                            <p>Доставка:<span>{{ pricesDeleveri }} грн</span></p>
                        </div>
                        <h4 class="order__total">Итого:<span>{{ getAllPrice + pricesDeleveri }}грн</span></h4>
                        <input class="order__submit-btn" type="submit" value="Оформить заказ">
                </div>
            </form>
        </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import uiButton from './UI/uiButton.vue'
export default {
  components: { uiButton },
    data(){
        return{
            pricesDeleveri: 50,
            allprice: 0,
        }
    },
    computed:{
        ...mapState({
            cartList: state => state.product.cartList
        }),
    getAllPrice(){
        this.cartList.forEach(element => {
            this.allprice += element.price * element.val
        })
        return this.allprice
    }
    },
    methods:{
        
    }
}
</script>

<style lang="scss">
.order{
    &__bottom{
        display: flex;
        margin-top: 70px;
        margin-bottom: 128px;
        justify-content: space-between;
    }
    &__chexboxes{
        display: flex;
        margin-bottom: 66px;
    }
    &__list{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */
        color: #FFC700;
        input{
            margin-top: 15px;
        }
    }
    &__first-column{
        margin-right: 83px;
    }
    &__first-column, &__second-column{

        h6{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            color: #FFFFFF;
        }
    }
    &__prices{
        p{
            &:last-child{
                margin-top: 15px;
            }
        }
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        span{
            color: #FFC700;
        }
        color: #9B9B9B;
    }
    &__form{
        display: flex;
        flex-direction: column;
        input{
            &:first-child{
                margin-top: 0px;
            }
            margin-top: 30px;
            background: #111111;
            width: 441px;
            height: 50px;
            color: #000;
            padding-left: 25px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            /* identical to box height */

            &::placeholder{
            color: #FFC700;
            }
            color: #FFC700;
        }
    }
    &__title{
        text-align: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 44px;
        /* identical to box height */
        color: #FFFFFF;
    }
    &__total{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        /* identical to box height */

        span{
            color: #FFC700;
            font-size: 24px;
            margin-left: 12px;
        }
        color: #FFFFFF;
    }
    &__submit-btn{
        padding: 15px 44px 15px 44px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #FFC700;
        border: 2px solid #FFC700;
        background-color: #070707;
        margin-top: 28px;
    }
}
</style>
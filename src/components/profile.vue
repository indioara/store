<template>
  <section class="profile">
    <div class="profile__conteiner  conteiner">
        <div class="profile__wrap">
            <div class="profile__titles">
                <h3 class="profile__title">Профиль</h3>
                <button class="profile__btn">Выйти</button>
            </div>
            <div class="profile__bottom">
                <div class="profile__history">
                    <h4 class="profile__history-title">История заказов</h4>
                </div>
                <div class="profile__liked">
                    <h4 class="profile__liked-title">Избранное</h4>
                    <ul class="profile__list-liked">
                        <li class="profile__liked-item" v-for="item of liked" :key="item.id">
                        <div class="profile__liked-img">
                            <img :src="require('@/assets/images/' + item.img)" alt="item img">
                        </div>
                        <div class="profile__liked-about">
                            <h5 class="profile__liked-name">{{ item.name }}</h5>
                            <p class="profile__liked-type">{{ item.type2 }}</p>
                            <p class="profile__liked-price">{{ item.price }}.00 грн</p>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import {  mapState } from 'vuex'
export default {
    computed:{
        ...mapState({
            liked: state => state.product.liked
        })
    }
}
</script>

<style lang="scss">
    .profile{
        &__bottom{
            display: flex;
            margin-top: 51px;
            justify-content: space-between;
        }
        &__title{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            line-height: 44px;
            /* identical to box height */
            margin-top: 16px;
            color: #FFFFFF;
        }
        &__btn{
            font-family: 'Montserrat Alternates';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            background-color: #070707;
            color: #A7A7A7;
        }
        &__titles{
            margin-top: 71px;
            text-align: center;

        }
        &__history-title, &__liked-title{
            font-family: 'Montserrat Alternates';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            clip-path: polygon(5% 0, 100% 0, 95% 100%, 0% 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 29px;
            width: 365px;
            height: 63px;
            background: #111111;
            color: #FFC700;
        }
        &__liked-img{
            img{
                width: 147px;
                height: 152px;
            }
        }
        &__liked-item{
            display: flex;
            &:first-child{
                margin-top: 53px;
            }
            &:last-child{
                margin-bottom: 150px;
            }
            margin-top: 65px;
        }
        &__liked-name{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 39px;

            color: #FFFFFF;
        }
        &__liked-type{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            color: #B5B5B5;
        }
        &__liked-price{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 39px;
            color: #FFC700;
            margin-top: 21px;
        }
        &__liked-about{
            margin-left: 23px;
        }
    }
</style>
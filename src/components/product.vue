<template>
  <section class="product">
    <div class="product__conteiner conteiner">
      <div class="product__wtaper">
        <div class="product__links"></div>
        <div class="product__item"  v-for="item of product" :key="item.id">
          <div class="product__top">
            <div class="product__big-image">
              <img :src="require('@/assets/images/' + item.bigImg)" alt="">
            </div>
            <div class="product__characteristics">
              <h2 class="product__name">{{ item.name }}</h2>
              <p class="product__sub-title">{{ item.type2 }}</p>
              <div class="product__rev" >
                <img v-for="star of stars.slice(0, item.raiting)" :key="star" :src="require('@/assets/images/' + star)" alt="">
                <div v-if="item.raiting < 5"><img v-for="star of disStars.slice(0, 5 - item.raiting)" :key="star.id" :src="require('@/assets/images/' + star.img)" alt=""></div>
              </div>
              <p class="product__price">{{ item.price * val}} грн</p>
              <ui-options
              :list="item"
              @sizeOptions="changeSizes"
              @colorOptions="changeColor"
              @changeVal="changeValue"
              @valNext="valNext"
              @valPrev="valPrev"
              ></ui-options>
              <div class="product__buttons">
                <ui-button class="product__buy"  @click="addItemInCart(item)">купить</ui-button>
                <button class="product__like"><img src="@/assets/images/icons/ilike.svg" alt="like" @click="addLiked(item)"></button>
              </div>
            </div>
          </div>
          <div class="product__about">
            <h4 class="product__about-title title">Описание</h4>
            <p class="product__text">{{ item.about }}</p>
          </div>
        </div>
        <div class="product__review">
          <div class="review__top">
            <h4 class="review__title title">Отзывы</h4>
            <ui-button class="review__btn" @click="writeReview">Оставить отзыв</ui-button>
          </div>
          <div class="add" v-if="isOpen">
              <div class="add__raiting-wrap">
                <div class="add-raiting" v-if="reviewRaiting > 0"><img :src="require('@/assets/images/' + star) " alt="star" v-for="(star, index) of stars.slice(0, reviewRaiting)" :key="star" @click="aaa(index)" ></div>
                <div class="add-raiting"><img :src="require('@/assets/images/' + star.img) " alt="star" v-for="(star) of disStars.slice(reviewRaiting, 5)" :key="star.id" @click="aaa(star.id)" ></div>
              </div>
              <div class="add-msg"><textarea name="" id="" cols="100" rows="5    "></textarea></div>
            </div>
          <ul class="review">
            <li class="review__item" v-for="item of review" :key="item.id">
              <div class="review__item-top">
                <img :src="require('@/assets/images/icons/' + item.img)" alt="avatar">
                <div class="review__about">
                  <h5 class="review__name">{{ item.name }}</h5>
                  <div class="review__reiting"><img :src="require('@/assets/images/' + star)" v-for="star of stars.slice(0, item.reiting)" :key="star" alt="star"></div>
                </div>
              </div>
              <div class="review__item-bottom">
                <p class="review__text">{{ item.text }}</p>
              </div>
            </li>
          </ul>
          <div class="product__racomend">
            <h4 class="product__recomend-title title">Рекомендуем вам</h4>
            <ul class="recomend__list">
              <li v-for="item of list.slice(0, 4)" :key="item.id">
                <a @click="$router.push(`${item.id}`)">
                  <div class="recomend__img">
                    <img :src="require('@/assets/images/' + item.img)" alt="img">
                  </div>
                  <h5 >{{ item.name }}</h5>
                  <p>{{ item.price }}₴</p>
                </a>
              </li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data(){
    return{
      review:[
            {id:1, name: "Дмитрий Милен",raiting: 5, img: "avatar.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor aenean enim, bibendum sed massa tellus in. In ultrices et egestas faucibus vestibulum in. Eget nunc leo, in pellentesque. Sed habitant a lectus velit neque. Sed in accumsan in dictum ac."},
            {id:2, name: "Дмитрий Милен",raiting: 5, img: "avatar.png", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor aenean enim, bibendum sed massa tellus in. In ultrices et egestas faucibus vestibulum in. Eget nunc leo, in pellentesque. Sed habitant a lectus velit neque. Sed in accumsan in dictum ac."},
        ],
      stars : [
        'star.svg',
        'star.svg',
        'star.svg',
        'star.svg',
        'star.svg'
        ],
        disStars : [
          {id: 1, img: 'disStar.svg'},
          {id: 2, img: 'disStar.svg'},
          {id: 3, img: 'disStar.svg'},
          {id: 4, img: 'disStar.svg'},
          {id: 5, img: 'disStar.svg'},
        ],
        sizeOption: "xs",
        colorOption: "yellow",
        val: 1,
        isOpen: false,
        reviewRaiting: 0,
    }
  },
    computed: {
    product() {
      return this.list.filter(item => item.id == this.$route.params.id)
    },
    ...mapState({
      list: state => state.catalog.list,
      cartList: state => state.product.cartList
    }),
  },
  methods: {
    valPrev(newValue){
      this.val = newValue
    },
    valNext(newValue){
      this.val = newValue
    },
    changeValue(newValue){
      this.val = newValue
      console.log(this.val)
    },
    changeColor(newValue){
      this.colorOption = newValue
    },
    changeSizes(newValue){
      this.sizeOption = newValue
    },
    addItemInCart(item){
      item.sizeOption = this.sizeOption
      item.colorOption = this.colorOption
      item.val = this.val
      this.setCartList(item)
      let q = confirm("Товар добавлен в карзину, перейти в корзину?")
      if(q == true){
        this.$router.push("/cart");
      }
    },
    aaa(id){
      this.reviewRaiting = id
      console.log(id)
    },
    writeReview(){
      this.isOpen = !this.isOpen
    },
    ...mapMutations({
    setCartList : "setCartList",
    setLiked: "setLiked"
  }),
  addLiked(item){
    this.setLiked(item)
    alert("Товар добавлен в избранное")
  },
  },
  beforeMount() {
    this.$store.dispatch("fetchList");
    },
}
</script>

<style lang="scss">

  .product{
    &__size-wrap{
      display: flex;
    }
    .recomend__list{
      cursor: pointer;
      display: flex;
      margin-top: 45px;
      margin-bottom: 165px;
      justify-content: space-between;
      .recomend__img{
        width: 281px;
        height: 281px;
        text-align: center;
      }
      h5{
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 300;
          font-size: 20px;
          line-height: 24px;
          color: #FFFFFF;
          text-align: center;
      }
      p{
        margin-top: 5px;
        text-align: center;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-align: center;

        color: #F0F0F0;
      }
    }
    .title{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      color: #F0F0F0;

    }
    &__name{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 62px;
      line-height: 78px;
      color: #FFFFFF;
    }
    &__top{
      display: flex;
      margin-top: 117px;
    }
    &__rev{
      display: flex; 
      margin-top: 10px;
    }
    &__price{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 59px;
      color: #FFC700;
      margin-top: 35px;
    }
    &__about{
      margin-top: 70px;
      margin-bottom: 137px;
    }

    &__text{
      margin-top: 35px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #A5A5A5;
    }
    &__options{
      display: flex;
      justify-content: space-between;
      margin-top: 42px;
      margin-bottom: 37px;
      .product__val{
        text-align: center;
        display: flex;
        justify-content: center;
        clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #000000;
        input{ 
          -webkit-appearance: none; /* для Safari */
          -moz-appearance: textfield; /* для Firefox */
          appearance: none;
          width: 40px;
          text-align: center;
          
        }
        input::-webkit-inner-spin-button, input::-webkit-outer-spin-button{
          -webkit-appearance: none;
          margin: 0;
        }
        height: 30px;
        width: 94px;
        background-color: #FFC700;
        button{
          background-color: #FFC700;
        }
      }
      height: 30px;
      .product__size-input, .product__color-input{
        -webkit-appearance: none; /* для Safari */
        -moz-appearance: none; /* для Firefox */
        appearance: none;
        background-color: #FFC700;
        background-image: url("@/assets/images/icons/down.svg");
        background-repeat:no-repeat;
        padding-left: 15px;
      }
      .product__color-input{
        height: 30px;
        clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
        width: 108px;
        padding-left: 25px;
        background-position: 74px 13px;
      }
      .product__size-input{
        width: 63px;
        height: 30px;
        clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);
        background-position: 36px 13px;

      }
      input{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        background-color: #FFC700;
        line-height: 17px;
        color: #000000;
      }
      p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        align-self: center;
        color: #FFFFFF;
      }
    }
    &__sub-title{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #B5B5B5;

    }
    &__buy{
      background-color: #070707;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #FFC700;
      transition-duration: 300ms;
      border: 3px solid #FFC700;
      padding: 19px 59px 19px 64px;
      &:hover{
        background-color: #FFC700;
        color: #070707;
      }
    }
    &__buttons{
      display: flex;
    }
    &__like{
      background-color: #070707;
      margin-left: 31px;
      
    }
    .review__top{
      display: flex;
    }
    .review{
      margin-bottom: 130px;
      &__btn{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        background-color: #070707;
        border: 3px solid #FFC700;
        padding: 15px 21px;
        color: #FFC700;
        margin-left: 53px;
      }
      &__item{
        margin-top: 127px;
      }
      &__item:first-child{
        margin-top: 49px;
      }
      &__about{
        margin-left: 26px;
        margin-bottom: 30px;

      }
      &__reiting{
        margin-top: 7px;
      }
      &__item-top{
        display: flex;
      }
      &__name{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;

        color: #FFFFFF;
      }
      &__text{
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      margin-left: 100px;
      color: #A5A5A5;

    }
    }
    .add__raiting-wrap{
      display: flex;
    }
    
  }
</style>
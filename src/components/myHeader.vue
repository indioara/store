<template>
  <header class="header">
    <div class="over-block" v-if="isVisible" @click="setIsVisible"></div>
      <div class="conteiner header__conteiner">
        <div class="header__top">
          <form class="header__search">
            <img src="@/assets/images/icons/XMLID_41_.svg" alt="search">
            <input type="text" placeholder="search" name="search" v-model="searchInput" @input="searchSet">
          </form>
          <div class="result-search" v-if="searchInput != null">
            <ul class="result-search__wrap">
              <li v-for="item of searchedList.slice(0, 5)" :key="item.id" @click="$router.push(`catalog/${item.id}`)">
                <div class="result-search__img"><img :src="require('@/assets/images/'+ item.img)" alt=""></div>
                <div class="result-search__about">
                  <p class="result-search__name">{{ item.name }}</p>
                  <p class="result-search__price">{{ item.price }}грн</p>
                </div>
              </li>
              <a class="result-search__link" v-if="searchedList.length > 0"><router-link to="/catalog">посмотреть больше</router-link></a>
            </ul>
          </div>
          
          <div class="header__logo logo">
            <a href="#"><img src="@/assets/images/logo.png" alt="logo"></a>
          </div>
          <div class="header__menu">
            <div class="header__lang-wrap lang">
              <p class="header__lang_active" @click="qwer">RU</p>
              <p class="vector">|</p>
              <p>EN</p>
            </div>
            <div class="cart">
              <router-link to="/cart">
                <img src="@/assets/images/icons/cart.svg" alt="cart">
                <p class="cart__item" v-if="cartList.length > 0">{{ cartList.length }}</p>
              </router-link>
            </div>
            <div class="heart">
              <router-link to="/profile">
                <img src="@/assets/images/icons/heart.svg" alt="heart">
                <p class="cart__item" v-if="liked.length > 0">{{liked.length }}</p>
              </router-link>
            </div>
          </div>
        </div>
        <ui-nav-bar></ui-nav-bar>
      </div>
  </header>
</template>

<script>
import uiNavBar from './UI/uiNavBar.vue'
import {ref} from "vue"
import { mapState } from 'vuex'
export default {
  components: { uiNavBar },
  data(){
    return{
      searchInput: null,
      searchedList: [],
      isVisible: false,
    }
  },
  computed:{
    ...mapState({
      list: state => state.catalog.list,
      cartList: state => state.product.cartList,
      liked: state => state.product.liked
    }),
    
  },
  methods:{
    qwer(){
      console.log(this.cartList)
    },
    setIsVisible(){
      this.searchedList = []
      this.searchInput = null
      this.isVisible = !this.isVisible
    },
    searchSet(){
      if(this.searchInput == ""){
        this.searchedList = []
        this.searchInput = null
        this.isVisible = false
      }else {
        let a = this.list.filter(item => item.name.toLowerCase().includes(this.searchInput.toLowerCase()))
        this.searchedList = []
        this.searchedList = a
        console.log(this.searchedList)
        this.isVisible = true
      }
      
      
    }
    
  }
}
</script>

<style lang="scss" scoped>
.over-block{
  z-index: 99;
  height: 100%;
  width: 100%;
  position: absolute;
}
.result-search{ 
  min-width: 280px;
  position: absolute;
  z-index: 100;
  top: 68px;
  border-radius: 5px;
  background-color: #191919;
  left: -13px;
  &__img{
    img{
      width: 100px;
      height: 100px;
    }
  }
  &__link{
    color: white;
    font-size: 18px;
    display: flex;
    margin-top: 5px;
    margin-bottom: 10px;
    justify-content: center;
    a:visited{
      color:white
    }
  }
  &__name{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-top: 5px;
    color: #FFFFFF;
  }
  &__price{
    color: yellow;
    font-family: 'Montserrat Alternates';
    font-size: 20px;
    margin-top: 10px;
  }
  &__wrap{
    li{
      border-bottom: 1px solid black;
      
      padding: 0px 10px;
      display: flex;
      margin-top: 10%;
      &:first-child{
        margin-top: 20px;
      }
    }
  }
}
.header__conteiner {
}
.header__top {
  font-family: 'Inter';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
}
.header__search {
  border: 1px solid #FFFF;
  max-width: 255px;
  max-height: 30px;
  border-radius: 15px;
  padding: 7px;
  z-index: 100;
  input{
    background: transparent;
    color:white;
    margin-left: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    font-weight: 400;
    &::placeholder{
      color: white;
    }
  }
  img{
    margin-left: 5px;
  }
}
.cart__item{
  border-radius: 50%;
  background-color: yellow;
  width: 25px;
  text-align: center;
  padding: 5px 0px;
  top: 10px;
  font-size: 12px;
  right: -15px;
  position: absolute;
}
.header__logo {
}
.logo {
}
.header__menu {
  display: flex;
}
.header__lang-wrap {
  font-size: 16px;
}
.cart, .heart, .lang>p{
  cursor: pointer;
}

.cart, .heart { 
  margin-left: 30px;
}
.cart {
  position: relative;
}
.heart {
  position: relative;
}
.lang{
  display: flex;
  p{
    color: #868686;
    &:nth-child(2){
      margin: 0 9px;
    }
  }
  .header__lang_active{
    color: white;
  }
}
.vector{
  font-size: 18px;
}
</style>
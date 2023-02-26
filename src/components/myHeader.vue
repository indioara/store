<template>
  <header class="header">
      <div class="conteiner header__conteiner">
        <div class="header__top">
          <form class="header__search">
            <img src="@/assets/images/icons/XMLID_41_.svg" alt="search">
            <input type="text" placeholder="search" name="search">
          </form>
          <div class="header__logo logo">
            <a href="#"><img src="@/assets/images/logo.png" alt="logo"></a>
          </div>
          <div class="header__menu">
            <div class="header__lang-wrap lang">
              <p class="header__lang_active">RU</p>
              <p class="vector">|</p>
              <p>EN</p>
            </div>
            <div class="cart">
              <img src="@/assets/images/icons/cart.svg" alt="cart">
            </div>
            <div class="heart">
              <img src="@/assets/images/icons/heart.svg" alt="heart">
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
export default {
  components: { uiNavBar },
  setup(){

  }
}
</script>

<style lang="scss">
.header {
}
.header__conteiner {
}
.header__top {
  font-family: 'Inter';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.header__search {
  border: 1px solid #FFFF;
  max-width: 255px;
  max-height: 30px;
  border-radius: 15px;
  padding: 7px;
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
  
}
.heart {

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
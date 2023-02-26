<template>
  <section class="hero">
    <div class="conteiner hero__conteiner">
        <div class="hero__wrap">
            <div class="hero__left-content">
                <h1 class="hero__title title">masons <br> <span>branding</span><br>wordshop</h1>
                <p class="hero__text">Высококачественная печать <br> Брендирование одежды и аксессуаров</p>
                <ui-button class="hero__btn"><router-link to="/catalog">Каталог</router-link></ui-button>
                
            </div>
            <div class="hero__right-imgs">
                <img class="hero__man" src="@/assets/images/man.png" alt="man">
                <img class="hero__trg" src="@/assets/images/trg.png" alt="trg">
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.hero {
  background-image: url("@/assets/images/back.jpg");
  background-repeat: no-repeat;
  background-size: no-repeat ;
  background-position:center top;
}
.hero__wrap {
  display: flex;
}
.hero__left-content {
  transform: translateX(-25px);
}
.hero__title {
  margin-top: 187px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 82px;
  line-height: 95%;
  text-transform: uppercase;
  color: #F0F0F0;
  span{
    color: #FFC700;
  }
}
.title {
}
.hero__right-imgs {
  position: relative;
}
.hero__conteiner{
}
.hero__trg{
  position: absolute;
  left: -106px;
  top: 157px;
  z-index: 1;
}
.hero__man{
  position: absolute;
  z-index: 2;
  top: 0;
  left: -129px;
}
.hero__text{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  margin-top: 36px;
  color: #A8A8A8;
}
.hero__btn{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 100%;
  margin-top: 46px;
  /* identical to box height, or 20px */

  text-transform: uppercase;
  a:visited{
    color: #1C1C1C;
  }
  color: #1C1C1C;
  background: #FFC700;
  margin-bottom: 235px;
}
</style>
<template>
  <section class="auth">
    <div class="auth__conteiner conteiner">
        <div class="auth__wrap">
            <form class="auth__login-form form" v-if="swipe">
              <h2 class="auth__title">Вход</h2>
              <button class="auth__swipe-btn" @click.prevent="swipeAuth">у меня еще нет аккаунта</button>
                <div><input type="text" class="auth__email" name="login" id="login" placeholder="Email" v-model="dataEmeil"></div>
                <div><input type="password" class="auth__pas" name="password" id="password" placeholder="password" v-model="dataPas"></div>
                <div class="auth__remember"><input  type="checkbox" name="remember-me" id="remember-me"><label for="remember-me">Запомнить меня</label></div>
                <button class="auth__btn"  @click.prevent="logData">Вход</button><br>
                <button class="auth__forgot">забыли пароль</button>
            </form>
            <form  class="auth__reg-form form"  v-if="!swipe">
              <h2 class="auth__title">Регистрация</h2>
              <button class="auth__swipe-btn" @click.prevent="swipeAuth">войти в имеющийся аккаунт</button>
                <div><input type="text" class="auth__email" name="login" id="login" placeholder="Email" v-model="dataEmeil"></div>
                <div><input type="password" class="auth__pas" name="password" id="password" placeholder="password" v-model="dataPas"></div>
                <button class="auth__btn auth__reg-btn" @click.prevent="saveData">Зарегестрироваться</button><br>
            </form>
        </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      swipe: true,
      dataEmeil: "",
      dataPas: "",
    }
  },
  methods:{
    swipeAuth(){
      this.swipe = !this.swipe
    },
    async saveData(){
      try{
        const response = await axios.post('http://localhost:5050/reg', {
          login: this.dataEmeil,
          pas: this.dataPas
        })
        console.log(response.data)
        
      }catch(err){
        console.log(err)
      }
    },
    async logData(){
    try{  
      const response = await axios.post("http://localhost:5050/login", {
        login: this.dataEmeil,
        pas: this.dataPas
      })
      console.log(response.data)
      console.log("зашел")
    }catch(e){
      console.log(e)
    }
  }
  }
 
}
</script>

<style lang="scss" scoped>
.auth{
  .auth__wrap{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  form{
    margin-bottom: 178px;
    clip-path: polygon(3% 0, 100% 0, 97% 99%, 0% 100%);
    width: 421px;
    background-color: #111111;
    margin-top: 129px;
    text-align: center;
    padding-top: 35px;
  }
  &__title{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */
    text-align: center;
    color: #FFFFFF;
  }
  &__swipe-btn{
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    background-color: #111111;
    margin-top: 26px;
    margin-bottom: 5px;
    color: #FFFFFF;
  }
  &__email, &__pas{
    background-color: #070707;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    width: 340px;
    height: 40px;
    padding-left: 15px;
    margin-top: 20px;
    line-height: 15px;
    &::placeholder{
      color: #FFC700;
    }
    color: #FFC700;
  }
  &__remember{
    margin-top: 21px;
    label{
      font-family: 'Montserrat Alternates';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      /* identical to box height */
      color: #FFC700;
    }
  }
  &__btn{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    padding: 15px 80px;
    margin-top: 53px;
    background-color: #111111;
    border: 1px solid #FFC700;
    color: #FFC700;
  }
  &__forgot{
    font-family: 'Montserrat Alternates';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    background-color: #111111;
    color: #FFFFFF;
    margin-bottom: 43px;
    margin-top: 15px;
  }
  &__reg-btn{
    margin-bottom: 73px;
  }
}
</style>
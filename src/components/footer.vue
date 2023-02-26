<template>
  <footer class="footer">
    <div class="footer__conteiner conteiner">
        <ul class="footer__wrap">
            <li class="footer__logo-wrap">
                <a href=".hero"><img src="@/assets/images/logo.png" alt="logo"></a>
                <div class="footer__social">
                    <a href="https://web.telegram.org/k/"><img src="@/assets/images/icons/telegramm.svg" alt="telegramm"></a>
                    <a href="https://www.instagram.com/"><img src="@/assets/images/icons/inst.svg" alt=""></a>
                </div>
            </li>
            <li class="footer__first-column">
                <h6 class="footer__title">Информация</h6>
                <ul class="footer__list">
                    <li><router-link to="/catalog">Каталог</router-link></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Доставка и оплата</a></li>
                    <li><a href=".hero">Возвращение</a></li>
                </ul>
            </li>
            <li class="footer__second-column">
                <h6 class="footer__title">Контакты</h6>
                <ul class="footer__list">
                    <li><router-link to="/catalog">Каталог</router-link></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Доставка и оплата</a></li>
                    <li><a href=".hero">Возвращение</a></li>
                </ul>
            </li>
            <li class="footer__send">
                <h6 class="footer__title">Узнай о новинка первым</h6>
                <p class="footer__subtitle">Получай от нас смс с сюрпризами</p>
                <form action="#" name="footer" class="footer__form">
                    <input type="text" name="footer" placeholder="Email">
                    <button class="footer__btn" input="submit">отправить</button>
                </form>
            </li>
        </ul>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer{
    background-color: #191919;
    &__wrap{
        display: flex;
        justify-content: space-between;
        padding-top: 43px;
        padding-bottom: 66px;
    }
    &__social{
        margin-top: 14px;
        a:first-child{
            img{
                padding: 11px 9px;
            }
        }
        a:last-child{
            margin-left: 30px;
            img{
                padding: 9px 10px 9px 10px;
                
            }
        }
        a{
            img{
                background-color: #FFC700;
                border-radius: 10px;
            }
        }
    }
    &__title{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #FFFFFF;
        }
    &__list{
        li{
            font-family: 'Montserrat Alternates';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            /* identical to box height */
            text-align: left;
            margin-top: 8px;
            &:first-child{
                margin-top: 18px;
            }
            a{
                color: #B7B7B7;
            }
        }
    }
    &__subtitle{
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */
        color: #B7B7B7;
    }
    &__form{
        
        margin-top: 11px;
        button{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            padding: 7px 17px 8px 15px;
            background: #FFC700;
            margin-left: 15px;
            width: 100px;
        }
        input:first-child{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            line-height: 15px;
            padding: 7px 0px 8px 14px;
            background: #363636;
            color: #FFC700;
            width: 155px;
            &::placeholder{
                color: #FFC700;
            }
        }
    }
    &__send{
        align-self: center;
        .footer__title{
            font-size: 20px;
            line-height: 24px;
        }
    }
}
</style>
<template>
  <section class="connect-us">
    <div class="connect-us__conteiner conteiner">
        <div class="connect-us__wrapper">
            <div class="connect-us__titles">
                <div class="connect-us__title">Свяжитесь с <span>нами</span></div>
                <div class="connect-us__subtitle">Это бысто и удобно</div>
            </div>
            <div class="connect-us__form-map">
                <div class="connect-us__form-wrap">
                    <form action="#" class="connect-us__form">
                        <div class="connect-us__input-name"><input type="text" placeholder="Ваше имя"></div>
                        <div class="connect-us__input-mail"><input type="email" placeholder="email" ></div>
                        <div class="connect-us__input-phone"><input type="tel" placeholder="Телефон" ></div>
                        <div class="connect-us__input-text"><input type="text" placeholder="Примечания" ></div>
                        <button class="connect-us__submit"> отправить</button>
                        <div class="connect-us__social">
                            <a href="https://web.telegram.org/k/"><img src="@/assets/images/icons/telegramm.svg" alt=""></a>
                            <a href="https://www.viber.com/ru/"><img src="@/assets/images/icons/viber.svg" alt=""></a>
                        </div>
                    </form>
                </div>
                <div class="connect-us__map">
                    <div style="position:relative;overflow:hidden;"><a href="https://yandex.kz/maps/162/almaty/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Алматы</a><a href="https://yandex.kz/maps/162/almaty/?ll=76.951324%2C43.254778&utm_medium=mapframe&utm_source=maps&z=16.42" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.kz/map-widget/v1/?ll=76.951324%2C43.254778&z=16.42" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
                </div>
            </div>
            <div class="connect-us__information information">
                    <ul class="connect-us__informatiom-list">
                        <li class="connect-us__inforamation-item">
                            <img class="connect-us__inforamation-img" src="@/assets/images/icons/graf.svg" alt="">
                            <h6 class="connect-us__inforamation-title">График</h6>
                            <p class="connect-us__text">ПН-ПТ:</p>
                            <p class="connect-us__subtext">9:00 - 18:00</p>
                        </li>
                        <li class="connect-us__inforamation-item">
                            <img class="connect-us__inforamation-img" src="@/assets/images/icons/map.svg" alt="">
                            <h6 class="connect-us__inforamation-title">Карта</h6>
                            <p class="connect-us__text">Г. Киев</p>
                            <p class="connect-us__subtext">ул. Название</p>
                        </li>
                        <li class="connect-us__inforamation-item">
                            <img class="connect-us__inforamation-img" src="@/assets/images/icons/call.svg" alt="">
                            <h6 class="connect-us__inforamation-title">Контакты</h6>
                            <p class="connect-us__text"><a href="tel:+18475555555"></a>+38(099)-999-99-99</p>
                            <p class="connect-us__subtext"><a href="mail:gmailexamp@gmail.com">gmailexamp@gmail.com</a></p>
                        </li>
                    </ul>
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
.connect-us{
    margin-bottom: 154px;
    &__titles{
        margin-top: 260px;
        margin-bottom: 207px;    
    }
    &__title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 88px;
        /* identical to box height */

        text-align: center;
        span{
            color: #FFC700;
        }
        color: #F0F0F0;

    }
    &__subtitle{
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 39px;
        /* identical to box height */

        text-align: center;

        color: #949494;

    }
    &__form-map{
        display: flex;
        justify-content: space-between;
    }
    &__form{
        display: flex;
        flex-direction: column;
        input{
            background: #111111;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            /* identical to box height */
            color: #FFC700;
            padding: 19px 0px 21px 40px;
        }
    }
    &__submit{
        height: 60px;
        width: 200px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 100%;
        /* identical to box height, or 20px */
        text-transform: uppercase;
        color: #1C1C1C;
        text-align: center;
        background: #FFC700;
        margin-top: 50px;
        margin-left: 20px;
        box-shadow:  0px 0px 12px -2px #FFC700;
    }
    &__map{
       
        iframe{
            height: 500px;
            width: 535px;

        }
    }
    &__social{
        margin-left: 14px;
        margin-top: 44px;
        img{
            background: #FFC700;
            border-radius: 9px;
            
        }
        a:first-child{
            img{
                padding: 11px 9px;
            }
        }
        a:nth-child(2){
            img{
                padding: 9px 7px 6px 9px;
            }
            margin-left: 39px;
        }
    }
    &__informatiom-list{
        display: flex;
        justify-content: center;
        
    }
    &__information{
        margin-top: 199px;
    }
    &__inforamation-item{
        height: 343px;
        width: 283px;
        text-align: center;
        background-color: #1A1A1A;
        border-radius: 50px 0px 50px 0px;
        margin-left: 60px;
        &:first-child{
            margin-left: 0px;
        }
    }
    
    &__inforamation-img{
        margin-top: 58px;
    }
    &__inforamation-title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        /* identical to box height */
        color: #F0F0F0;
        margin: 44px 0 26px 0;
    }
    &__text, &__subtext{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        a:visited{
            color: #FFFF;
        }
        a{
            color: #FFFF;
        }
    }
.connect-us__input-name, .connect-us__input-mail, .connect-us__input-phone, .connect-us__input-text{
    width: 456px;
    height: 60px;
    background: #111111;
    clip-path: polygon(6% 0, 80% 0, 78% 100%, 4% 100%);
    margin-top: 30px;
    ::placeholder{
        color: #FFC700;
    }

}
.connect-us__input-name{
    margin-top: 0px;
}

}

</style>
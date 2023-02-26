<template>
  <section class="video">
    <div class="conteiner">
        <div class="video__content">
            <div class="video__titles">
                <h3 class="video__title title">Еще есть <span>сомнения?</span></h3>
                <p class="video__subtitle subtitle">Тогда посмотри это видео и сам всё поймёшь</p>
            </div>
            <div class="video__video video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2Vo0lhfE8Jo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
.video{
    &__video{
        text-align: center;
        iframe{
            height: 514px;
            width: 915px;
        }
    }
    &__titles{
        margin-top: 185px;
        margin-bottom: 40px;
    }
    &__title{
        font-weight: 600;
        font-size: 48px;
        line-height: 59px;
        /* identical to box height */
        color: #FFFFFF;
        span{
            color: #FFC700;
        }
    }
    &__subtitle{
        font-weight: 300;
        font-size: 32px;
        line-height: 39px;
        /* identical to box height */


        color: #B8B8B8;
    }
    &__subtitle,  &__title{
        font-family: 'Montserrat';
        font-style: normal;
    }


}
</style>
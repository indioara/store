<template>
    <section class="new-catalog">
      <div class="new-catalog__conteiner conteiner">
        <div class="new-catalog__wraper">
          <div class="new-catalog__top top">
            <div class="new-catalog__titles">
              <h3 class="new-catalog__title">{{ newSelect }}</h3>
              <p class="new-catalog__subTitle">Любые размеры и формы</p>
              <p class="new-catalog__subTitle"></p>
            </div>
            <div class="new-catalog__search-wrap">
              <label for="s">Сортировка 
                <select v-model="selectSort" @change="setSelectedSort(selectSort)">
                  <option value="" disabled>выберете из списка</option>
                  <option :value="option.value" v-for="option of sortOptions" :key="option.value">{{option.name }}</option>
                </select> <p> {{ selectSort }}</p>
              </label>
            </div>
          </div>
          <ul class="new-catalog__list">
            <li class="new-catalog__item" v-for="(item) of sortedOptions" :key="item.id">
              <div class="catalog-img" ><img :src="require('@/assets/images/' + item.img)" alt=""></div>
              <p class="catalog-name">{{ item.name }}</p>
              <p class="catalog-price">{{ item.price }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  
  export default {
    data() {
      return {
        selectSort: ''
      }
    },
    computed: {
      ...mapState({
        list: state => state.catalog.list,
        sortOptions: state => state.catalog.sortOptions,
        newSelect: state => state.catalog.newSelect
      }),
      ...mapGetters({
        sortedOptions: "sortedOptions"
      })
    },
    methods: {
      ...mapMutations({
        setSelectedSort: "setSelectedSort"
      })
    }
  }
  </script>
  

<style lang="scss">
.new-catalog{
    &__titles{
        margin-top: 110px;
    }
    &__title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 59px;
        color: #F0F0F0;
        /* identical to box height */
    }
    &__subTitle{
        font-family: 'Montserrat Alternates';
        font-style: normal;
        font-weight: 300;
        font-size: 32px;
        line-height: 39px;
        /* identical to box height */


        color: #949494;
    }
}
.new-catalog__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 26px;
    row-gap: 100px;
    margin-top: 121px;
}
.new-catalog__item {
    text-align: center;
}
.catalog-img {
    width: 261px;
    height: 281px;
}
.catalog-name {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #FFFFFF;
}
.catalog-price {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    margin-top: 5px;
    color: #F0F0F0;
}
</style>
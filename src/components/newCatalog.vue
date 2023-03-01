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
              <div class="new-catalog__select-sort">
                <p class="new-catalago__select-subtitle">сортировка</p>
                <select v-model="selectSort" @change="setSelectedSort(selectSort)">
                  <option value="" disabled>выберете из списка</option>
                  <option :value="option.value" v-for="option of sortOptions" :key="option.value">{{option.name }}</option>
                </select>
            </div>
            <div class="new-catalog__select-shaw-count">
                <p class="new-catalago__select-subtitle">На странице</p>
                <select v-model="showCount" @change="setShowCount(showCount)">
                    <option value="10">10</option>
                    <option value="16">16</option>
                    <option value="22">22</option>
                </select>
            </div>
            </div>
          </div>
          <ul class="new-catalog__list">
            <li class="new-catalog__item" v-for="(item) of setPagination" :key="item.id">
              <div class="catalog-img" ><img :src="require('@/assets/images/' + item.img)" alt=""></div>
              <p class="catalog-name">{{ item.name }}</p>
              <p class="catalog-price">{{ item.price }}</p>
            </li>
          </ul>
          <div class="new-catalog-paginations">
            <button class="pagination__btn-prev" @click="parse">prev</button>
            <ul class="pagination__list">
                <li class="pagination__page" v-for="(page, index) of setPage" :key="index"><button @click="changeTotalPage(index)">{{ index + 1 }}</button></li>
            </ul>
            <button class="pagination__btn-next" @click="aaa">next</button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
import axios from 'axios'
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  
  export default {
    data() {
      return {
        selectSort: '',
        showCount: 16,
      }
    },
    computed: {
      ...mapState({
        list: state => state.catalog.newList,
        sortOptions: state => state.catalog.sortOptions,
        newSelect: state => state.catalog.newSelect,
        totalPage: state => state.catalog.totalPage,
        showCount: state => state.catalog.showCount
      }),
      ...mapGetters({
        sortedOptions: "sortedOptions",
        setPage: "setPage",
        setPagination: "setPagination",

      })
    },
    methods: {
        aaa(){
            console.log(this.setPagination)
        },
      ...mapMutations({
        setSelectedSort: "setSelectedSort",
        setTotalPage: "setTotalPage",
        setShowCount: "setShowCount",
        parse: "parse",
      })
    },
    created() {
    this.$store.dispatch("fetchList");
    },
  
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

.new-catalog-paginations {
    display: flex;
    justify-content: center;
}
.pagination__btn-prev {
}
.pagination__list {
    display: flex;
}
.pagination__page {
    margin-left: 10px;
}
.pagination__btn-next {
    margin-left: 10px;
}
</style>
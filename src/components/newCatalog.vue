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
                <div class="new-catalog__select-first">
                  <select v-model="selectSort" @change="setSelectedSort(selectSort)">
                    <option value="" disabled>выберете из списка</option>
                    <option :value="option.value" v-for="option of sortOptions" :key="option.value">{{option.name }}</option>
                  </select>
                </div>
            </div>
            <div class="new-catalog__select-shaw-count">
                <p class="new-catalago__select-subtitle">На странице</p>
                <div class="new-catalog__select-last">
                  <select v-model="showCount" @change="setShowCount(showCount)">
                    <option value="10">10</option>
                    <option value="16">16</option>
                    <option value="22">22</option>
                </select>
                </div>
            </div>
            </div>
          </div>
            <ul class="new-catalog__list">
            <li class="new-catalog__item" v-for="(item) of paginatedOptions" :key="item.id" @click="$router.push(`catalog/${item.id}`)">
              <div class="catalog-img" ><img :src="require('@/assets/images/' + item.img)" alt=""></div>
              <p class="catalog-name">{{ item.name }}</p>
              <p class="catalog-price">{{ item.price }}</p>
            </li>
          </ul>
          <div class="new-catalog-paginations" v-if="setPage > 1">
            <button class="pagination__btn-prev" @click="paginationPrev"><img src="@/assets/images/icons/left.svg" alt=""></button>
            <ul class="pagination__list">
                <li class="pagination__page" 
                v-for="(page, index) of setPage" 
                :key="index">
                <button 
                :class="{
                  pagination__page_active : index === pageIndex
                }"
                @click="ara(index)" 
                >
                {{ index + 1 }}
                </button>
              </li>
            </ul>
            <button class="pagination__btn-next" @click="paginationNext"><img src="@/assets/images/icons/right.svg" alt=""></button>
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
        pageIndex: 0,
        selectSort: '',
        showCount:  16,
      }
    },
    computed: {
      ...mapState({
        list: state => state.catalog.newList,
        sortOptions: state => state.catalog.sortOptions,
        newSelect: state => state.catalog.newSelect,
        totalPage: state => state.catalog.totalPage,
        showCount: state => state.catalog.showCount,
        
      }),
      ...mapGetters({
        sortedOptions: "sortedOptions",
        setPage: "setPage",
        setPagination: "setPagination",
        paginatedOptions: "paginatedOptions"

      })
    },
    methods: {
      paginationPrev(){
        console.log(this.paginatedOptions)
        if(this.pageIndex === 0){
          return
        }else {
          this.setTotalPage(this.totalPage -1 )
          this.pageIndex--
          this.setCurrentPage(this.totalPage)
        }
      },
      paginationNext(){
        let a = document.querySelectorAll(".pagination__page")
        if(this.pageIndex == a.length - 1){
          return
        }else{
          this.setTotalPage(this.totalPage + 1)
          this.pageIndex++
          this.setCurrentPage(this.totalPage)
        }
      },
      ara(index){
        this.pageIndex = index
        console.log(this.pageIndex)
        this.setTotalPage(index + 1)
        this.setCurrentPage(this.totalPage)
      },
      ...mapMutations({
        setSelectedSort: "setSelectedSort",
        setTotalPage: "setTotalPage",
        setShowCount: "setShowCount",
      }),
      ...mapActions({
        setCurrentPage: "setCurrentPage"
      })
    },
    beforeMount() {
    this.$store.dispatch("fetchList");
    },
  
  }
  </script>
  

<style lang="scss">
.new-catalog{

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
    &__top{
      display: flex;
      margin-top: 110px;
      justify-content: space-between;
    }
}
.new-catalog__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 26px;
    row-gap: 100px;
    margin-top: 121px;
    margin-bottom: 129px;
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
.new-catalog__search-wrap {
  display: flex;
  margin-top: 22px;
  select{
    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    color: #000000;
  }
}
.new-catalog__select-sort {
  display: flex;

}
.new-catalago__select-subtitle {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin-right: 12px;
  color: #FFFFFF;
}
.new-catalog__select-first, .new-catalog__select-last{
  background: #FFC700;
  clip-path: polygon(7% 0, 100% 0%, 93% 100%, 0% 100%);
  height: 30px;
  padding: 0px 10px;
  select{
    background: #FFC700;
    margin-top: 5px;
  }
}
.new-catalog__select-last{
  clip-path: polygon(23% 0, 100% 0%, 75% 100%, 0% 100%);
  
}
.new-catalog__select-first{
  margin-right: 27px;

}
.new-catalog__select-shaw-count {
  display: flex; 
}



.new-catalog-paginations {
  display: flex;
  justify-content: center;
  
  margin-bottom: 125px;
}
.pagination__btn-prev,  .pagination__btn-next{
  background-color: #070707;
}
.pagination__list {
  display: flex;
  align-items: center;
  button{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    padding: 10px 20px;
    background-color: #252525;
    color: #F0F0F0;
    height: 50px;
    width: 50px;
  }
}
.pagination__page_active{
  background-color: #FFC700 !important;
  color: #070707 !important;
  font-size: 32px !important;
  height: 60px !important;
  width: 60px !important;
}
.pagination__page {
  margin-right: 20px;

  &:last-child{
    margin-right: 40px;
  }
  &:first-child{
    margin-left: 40px;
  }
}
.pagination__btn-next {
}
.pagination__btn-prev{

}

</style>
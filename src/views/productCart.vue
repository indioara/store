<template>
    <div class="page-wrapper">
      <my-header />
      <product></product>
      <main class="content-wrapper">
      </main>
      <my-footer />
    </div>
  </template>
  
  <script>
  import myHeader from '@/components/myHeader.vue'
  import myFooter from "@/components/footer.vue"
  import Product from '@/components/product.vue'
  
  export default {
    components: { 
      myHeader,
      myFooter,
        Product,
    }
  }
  </script>
  
  <style scoped>
  .page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .content-wrapper {
    flex: 1;
  }
  </style>
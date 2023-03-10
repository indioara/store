<template>
    <div class="page-wrapper">
      <my-header />
      <main class="content-wrapper">
        <cart></cart>
      </main>
      <my-footer />
    </div>
  </template>
  
  <script>
  import myHeader from '@/components/myHeader.vue'
  import myFooter from "@/components/footer.vue"
  import cart from "@/components/cart.vue"
  
  export default {
    components: { 
      myHeader,
      myFooter,
      cart,
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
<template>
    <div class="page-wrapper">
      <my-header />
      <main class="content-wrapper">
        <auth></auth>
      </main>
      <my-footer />
    </div>
  </template>
  
  <script>
  import myHeader from '@/components/myHeader.vue'
  import myFooter from "@/components/footer.vue"
  import auth from "@/components/auth.vue"


  
  export default {
    components: { 
      myHeader,
      myFooter,
      auth
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
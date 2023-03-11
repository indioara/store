<template>
    <div class="page-wrapper">
      <my-header />
      <main class="content-wrapper">
        <new-catalog />
        <profile></profile>
      </main>
      <my-footer />
    </div>
  </template>
  
  <script>
  import profile from "@/components/profile.vue"
  import myHeader from '@/components/myHeader.vue'
  import myFooter from "@/components/footer.vue"
  export default {
    components: { 
      myHeader,
      myFooter,
      profile,
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
<template>
  <div class="page-wrapper">
    <my-header />
    <main class="content-wrapper">
      <new-catalog />
    </main>
    <my-footer />
  </div>
</template>

<script>
import myHeader from '@/components/myHeader.vue'
import myFooter from "@/components/footer.vue"
import NewCatalog from '@/components/newCatalog.vue'

export default {
  components: { 
    myHeader,
    myFooter,
    NewCatalog,
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
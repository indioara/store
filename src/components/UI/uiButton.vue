<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
    name: "uiButton"
}
</script>

<style>
    .btn{
        padding: 20px 50px;
    }
</style>
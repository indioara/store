<template>
<div class="product__options">
    <p class="product__size">размер:</p>
        <select v-model="sizeOption" class="product__size-input">
            <option :value="size" v-for="size of list.size" :key="size">{{ size }}</option>
        </select>
        <p class="product__color">Цвет:</p>
        <select v-model="colorOption" class="product__color-input">
            <option :value="color" v-for="color of list.color" :key="color">{{ color }}</option>
        </select>
        <p>Количество: </p> 
    <div class="product__val">
    <button @click="valPrev">-</button> 
    <input type="number" v-model="val" @input="changeVal(list.value)"> 
    <button @click="valNext(list.value)">+</button>
    </div>
</div>
</template>

<script>
export default {
    name: "uiOptions",
    props:{
        list:{
            type: Array,
        }
    },
    data(){

    },

}
</script>

<style>

</style>
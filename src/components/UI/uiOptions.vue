<template>
<div class="product__options">
    <p class="product__size">размер:</p>
        <select v-model="sizeOption" class="product__size-input" @change="changeSize">
            <option :value="size" v-for="size of list.size" :key="size" >{{ size }}</option>
        </select>
        <p class="product__color">Цвет:</p>
        <select v-model="colorOption" class="product__color-input" @change="changeColor">
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
        },
        val:{
            type: Number
        }
    },
    data() {
        return {
            val: 1,
            sizeOption: "xs", // выбранный размер
            colorOption: "yellow" // выбранный цвет
        };
    },
    methods:{
        changeSize(){
            this.$emit("sizeOptions", this.sizeOption)
        },
        changeColor(){
            this.$emit("colorOptions", this.colorOption)
        },
        valNext(count){
            if(this.val == count){
        return
        }else this.val++
        this.$emit("valNext", this.val)
    },
        valPrev(){
            if(this.val == 1){
        return
        }else this.val--
        this.$emit("valPrev", this.val)
    },
        changeVal(value){
            if(this.val >= value){
        this.val = value
        }
        this.$emit("changeVal", this.val)
    },
    }

}
</script>

<style>

</style>
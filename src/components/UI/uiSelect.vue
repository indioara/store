<template>
  <select v-model="localValue" @change="changeOption">
    <option value="" disabled>Выберете из списка</option>
    <option  v-for="option of options" :key="option.value" :value="option.value" >{{ option.name }}</option>
  </select>
</template>

<script>
export default {
 name: "UiSelect",
    props:{
        modelValue: {
            type: String
        },
        options:{
            type : Array,
            default: () => []
        }
    },
 setup(props, context){
    const changeOption = (event) =>{
        context.emit("update:modelValue", event.target.value)
    }
    return{
        changeOption,
    }
 },
 data(){
    return{
        localValue: this.modelValue
    }
 },
 watch:{
    modelValue(newValue){
        this.localValue = newValue
    }
 }
 
}
</script>

<style>

</style>
export default{
    state : ()=>({
        sizeOption: "",
        colorOption: "",
        cartList: [],
        

    }),
    mutations: {
        setSizeOption(state:any, sizeOption:string){
            state.sizeOption = sizeOption
        },
        setColorSize(state:any, colorSize:string){
            state.colorOption = colorSize
        },
        setCartList(state:any, cartList:any){
            state.cartList.push(cartList)
        }
    }
}
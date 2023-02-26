export default{
    state: () => ({
        newList: [],
        
        newSelect: "",

        selectedSort: "",

        sortOptions :[
            {value: "price", name: "дешевле/дороже"},
            {value: "reversePrice", name: "дороже/дешевле"},
            {value: "id", name: "по ID"},
            
            ],

        list: [
            {id: 1, name: "Футболка Белая", price: 100, img: "topSales1.png", type: "tshort"},
            {id: 2, name: "Футболка Белая", price: 88 , img: "topSales1.png",  type: "tshort"},
            {id: 3, name: "Футболка Белая", price: 110, img: "topSales1.png", type: "tshort"},
            {id: 4, name: "Футболка Белая", price: 889 , img: "topSales2.png",  type: "hudi"},
            {id: 5, name: "Футболка Белая", price: 194, img: "topSales2.png", type: "hudi"},
            {id: 6, name: "Футболка Белая", price: 128 , img: "topSales2.png",  type: "hudi"},
            {id: 7, name: "Футболка Белая", price: 160, img: "topSales2.png", type: "hudi"},
            {id: 8, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "tshort"},
            {id: 9, name: "Футболка Белая", price: 101, img: "topSales1.png", type: "tshort"},
            {id: 10, name: "Футболка Белая", price: 89 , img: "topSales1.png",  type: "tshort"},
            {id: 11, name: "Футболка Белая", price: 200, img: "topSales1.png", type: "cup"},
            {id: 12, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},

            
        ],
        select: [
            {id:1, name:"Все", type:"all"},
            {id:2, name:"Футболки", type:"tshort"},
            {id:3, name:"Худи", type:"hudi"},
            {id:4, name:"Кружки", type:"cup"},
            {id:5, name:"Категории", type:"k"},
            {id:6, name:"Категории", type:"k"},
            {id:7, name:"Категории", type:"k"},
        ],

    }),
    getters:{
        sortedOptions(state:any){
            return state.newList.sort((a:any, b:any)=>{
                if(state.selectedSort === "price"){
                    return a.price - b.price
                }else if(state.selectedSort === "reversePrice"){
                    return b.price - a.price
                }
                else {
                    return a.id - b.id
                }

            })
        }
    },
    mutations:{
        setSelectedSort(state:any, selectedSort:string){
            state.selectedSort = selectedSort
        },

        newArr(state:any, payload:any){
            state.newSelect = state.select[payload].name
            let arr = state.list

            if(payload === 0){
                state.newList = arr
            }else {
                
                arr = arr.filter((item:any)=>{
                return item.type === state.select[payload].type
            })
            state.newList = arr
            }
            
            
            
        }
    }
    
   
}
export default{
    state: () => ({
        newList: [],
        
        newSelect: "",

        totalPage: 2,

        showCount: 16,

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
            {id: 13, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 14, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 15, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 16, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 17, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 18, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 19, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 20, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 21, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 22, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 23, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 24, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 25, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 26, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 27, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 28, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 29, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 30, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 31, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 32, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 33, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 34, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 35, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 36, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 37, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 38, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 39, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 40, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 41, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 42, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 43, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 44, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 45, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 46, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 47, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 48, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 49, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 50, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},
            {id: 51, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "cup"},

            
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
        },
        setPage(state:any, getters:any){
            return Math.ceil(getters.sortedOptions.length / state.showCount)
        },
        mathCount(state:any){
            return state.showCount * state.totalPage
        },
        setPagination(state:any, getters:any){
            if(state.totalPage == 1){
                return getters.sortedOptions.slice(0, state.showCount)
            }else if(state.totalPage == 2){
                return getters.sortedOptions.slice(state.showCount, state.showCount * 2)
            }else {
                return getters.sortedOptions.slice(getters.mathCount, getters.mathCount + state.showCount)
            }
        }

    },
    mutations:{
        setSelectedSort(state:any, selectedSort:string){
            state.selectedSort = selectedSort
        },

        newArr(state:any, payload:any){
            state.totalPage = 1
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
            
            
            
        },
        setTotalPage(state:any,index:any){
            state.totalPage = index
        },
        setShowCount(state:any, showCount:number){
            state.showCount = showCount
            state.totalPage = 1
        }
        
   
    }
    
   
}
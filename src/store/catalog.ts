import axios from "axios"
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

        list: [],
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
        parse(state:any){
            console.log(JSON.stringify(state.list)) 
        },
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
        },
        setList(state:any, list:any){
            state.list = list
        }
        
   
    },
    actions: {
        async fetchList(context:any) {
          try {
            const response = await axios.get("http://localhost:3000/catalog");
            context.commit("setList", response.data);
          } catch (error) {
            console.error(error);
          }
        }
      }
      
   
}
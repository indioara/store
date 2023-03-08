import axios from "axios"
export default{
    state: () => ({
        newList: [],
        
        newSelect: "",

        totalPage: 1,

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
            return Math.ceil(getters.sortedOptions.length / state.showCount )
        },
        startIndex: (state:any) => {
            return (state.totalPage - 1) * state.showCount
          },
        endIndex: (state:any, getters:any) => {
            return Math.min(getters.startIndex + state.showCount, getters.sortedOptions.length)
        },
        paginatedOptions: (state:any, getters:any) => {
            return getters.sortedOptions.slice(getters.startIndex, getters.endIndex)
          },

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
        setCurrentPage(state:any, currentPage:number){
            const url = new URL(window.location.href);
            url.searchParams.set('page', currentPage.toString());
            window.history.pushState({}, '', url.href);
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
        },
        setCurrentPage(context:any, currentPage:number){
            context.commit('setCurrentPage', currentPage);
        },
      }
      
   
}
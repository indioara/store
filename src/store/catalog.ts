export default{
    state: () => ({
        newList: [],
        
        newSelect: "",

        selectedSort: "",

        sortOptions :[
            {value: "price", name: "дешевле/дороже"},
            {value: "id", name: "по ID"},
            ],

        list: [
            {id: 1, name: "Футболка Белая", price: 100, img: "topSales1.png", type: "Футболки"},
            {id: 2, name: "Футболка Белая", price: 88 , img: "topSales1.png",  type: "Футболки"},
            {id: 3, name: "Футболка Белая", price: 110, img: "topSales1.png", type: "Футболки"},
            {id: 4, name: "Футболка Белая", price: 889 , img: "topSales2.png",  type: "Футболки"},
            {id: 5, name: "Футболка Белая", price: 194, img: "topSales2.png", type: "Футболки"},
            {id: 6, name: "Футболка Белая", price: 128 , img: "topSales2.png",  type: "Футболки"},
            {id: 7, name: "Футболка Белая", price: 160, img: "topSales2.png", type: "Футболки"},
            {id: 8, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "Футболки"},
            {id: 9, name: "Футболка Белая", price: 101, img: "topSales1.png", type: "Футболки"},
            {id: 10, name: "Футболка Белая", price: 89 , img: "topSales1.png",  type: "Футболки"},
            {id: 11, name: "Футболка Белая", price: 200, img: "topSales1.png", type: "Футболки"},
            {id: 12, name: "Футболка Белая", price: 831 , img: "topSales1.png",  type: "Футболки"},

            
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
            return state.list.sort((a:any, b:any)=>{
                return a[state.selectedSortS] - b[state.selectedSort]
            })
        }
    },
    mutations:{
        setSelectedSort(state:any, selectedSort:string){
            state.selectedSort = selectedSort
        },
        newArr(state:any, payload:any){
            state.newSelect = state.select[payload].name
            
        }
    }
    
   
}
import { createStore } from 'vuex'
import catalogModule from "@/store/catalog"
import productModule from "@/store/product"

export default createStore({
  modules: {
    catalog: catalogModule,
    product: productModule,
  }
})

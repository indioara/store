import { createStore } from 'vuex'
import catalogModule from "@/store/catalog"

export default createStore({
  modules: {
    catalog: catalogModule
  }
})

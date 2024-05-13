import { createStore } from "vuex"
import user from "./modules/user.ts"
import getters from "./getter.ts"

export default createStore({
    getters,
    modules: {
        user,
    }
})
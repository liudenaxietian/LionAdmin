import{ createPinia } from "pinia"
import {type App} from "vue"

const store = createPinia();

export function SetupStore(app:App<Element>){
    app.use(store)
}

export {store}
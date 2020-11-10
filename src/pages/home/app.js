import Vue from "vue"
import ELEMENT from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import App from "./app.vue"

Vue.use(ELEMENT)

new Vue({
  el: "#app",
  render: h => h(App)
})

import Vue from "vue"
import VueCustomElement from "vue-custom-element"
Vue.use(VueCustomElement)
Vue.customElement("im-table", require("./app.vue").default)

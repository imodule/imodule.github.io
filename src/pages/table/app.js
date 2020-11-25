import Vue from "vue"
import im_table from "./app.vue"

import vueCustomElement from "vue-custom-element"
Vue.use(vueCustomElement)
Vue.customElement("im-table", im_table)

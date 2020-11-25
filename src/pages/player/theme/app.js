import Vue from "vue"
import im_player from "./app.vue"

import vueCustomElement from "vue-custom-element"
Vue.use(vueCustomElement)
Vue.customElement("im-player", im_player)

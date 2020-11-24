import Vue from "vue"
import imPlayer from "./app.vue"

import vueCustomElement from "vue-custom-element"
Vue.use(vueCustomElement)
Vue.customElement("im-player", imPlayer)

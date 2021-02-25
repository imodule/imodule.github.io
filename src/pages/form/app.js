import Vue from "vue"
import {
  Validator,
  install as VeeValidate
} from "vee-validate/dist/vee-validate.minimal.esm.js"
import {
  required,
  regex,
  confirmed,
  length,
  min,
  max,
  min_value,
  max_value,
  email,
  url,
  ext,
  alpha,
  alpha_num,
  between,
  numeric,
  decimal,
  included
} from "vee-validate/dist/rules.esm.js"
import en from "vee-validate/dist/locale/en"
import vi from "vee-validate/dist/locale/vi"

// Add the rules you need.
Validator.extend("required", required)
Validator.extend("regex", regex)
Validator.extend("confirmed", confirmed)
Validator.extend("length", length)
Validator.extend("min", min)
Validator.extend("max", max)
Validator.extend("min_value", min_value) //for number
Validator.extend("max_value", max_value) //for number
Validator.extend("email", email)
Validator.extend("ext", ext)
Validator.extend("between", between) //<input v-validate="'between:1,11'" name="between_field" type="text">
Validator.extend("url", url)
Validator.extend("alpha", alpha)
Validator.extend("alpha_num", alpha_num)
Validator.extend("numeric", numeric)
Validator.extend("decimal", decimal)
Validator.extend("included", included)

// Merge the messages.
Validator.localize("en", en)
Validator.localize("vi", vi)

// install the plugin
Vue.use(VeeValidate)
import VueCustomElement from "vue-custom-element"
Vue.use(VueCustomElement)
Vue.customElement("im-form", require("./app.vue").default)

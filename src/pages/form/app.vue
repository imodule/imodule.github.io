<template>
  <div class="wrap-form" v-if="reInit">
    <im-form-builder
      ref="form"
      :class="{ dark: true }"
      v-model="base.data.model"
      :schema="base.data.schema"
      :options="base.data.schema.formOptions"
      @action="onAction"
    >
    </im-form-builder>
    <span v-html="style()"></span>
  </div>
</template>

<script>
import { isEmptyObj } from "@/utils"
import FormBuilder from "@/components/form/form-builder/FormBuilder"
export default {
  name: "im-form",
  components: { [FormBuilder.name]: FormBuilder },
  props: {
    base: {
      type: Object,
      default: () => {
        return { option: {}, data: {} }
      }
    }
  },
  watch: {
    base: {
      handler(val) {
        // hack re-render
        let vm = this
        if (!isEmptyObj(val)) {
          vm.reInit = true
        } else {
          vm.reInit = false
        }
      },
      deep: true
    }
  },
  methods: {
    style() {
      let vm = this

      const style = vm.$slots["style"]
      if (style) {
        const dom = style[0].data.domProps
        if (dom) {
          return "<style scoped>" + dom.innerHTML.trim() + "</style>"
        }
      }
      return ""
    },
    async onAction(e) {
      if (e.type === "submit") {
        const res = await this.$refs.form.$validator.validate()
        if (res) alert("Form is valid")
      }
    }
  },
  mounted() {
    // hack reload when dev
    if (!isEmptyObj(this.base)) {
      this.reInit = !this.reInit
    }
  }
}
</script>

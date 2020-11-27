<template>
  <div class="im-checkbox-group" :name="name">
    <slot />
  </div>
</template>

<script>
export default {
  name: "im-checkbox-group",

  $_veeValidate: {
    name() {
      return this.name
    },
    value() {
      return this.modelValue
    }
  },

  model: {
    prop: "modelValue",
    event: "change"
  },

  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      value: []
    }
  },

  watch: {
    modelValue() {
      this.value = this.modelValue
    },
    value() {
      this.$emit("change", this.value)
    }
  },

  created() {
    this.value = this.modelValue
  }
}
</script>

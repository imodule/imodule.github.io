<template>
  <div class="wrap-table" v-if="reInit">
    <Table
      :class="{ dark: base.option.dark, 'table-border': base.option.border }"
      :table-height="base.option.height"
      :table-data="base.data.cells"
      :table-columns="base.data.columns"
      @dblclick="dblclick"
    >
    </Table>
    <span v-html="style()"></span>
  </div>
</template>

<script>
import Table from "@/components/table/Table"
export default {
  name: "im-table",
  components: { Table },
  props: {
    base: {
      type: Object,
      default: () => {
        return { option: {}, data: {} }
      }
    }
  },
  data() {
    return {
      reInit: true
    }
  },
  watch: {
    base: {
      immediate: true,
      handler() {
        // hack re-render
        let vm = this
        vm.reInit = false
        vm.$nextTick(() => {
          vm.reInit = true
        })
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
    dblclick: function(data, index) {
      this.$emit("dblclick", data, index)
    }
  }
}
</script>

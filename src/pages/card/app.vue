<template>
  <div class="wrap-card">
    <box v-bind="$attrs">
      <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />
    </box>
    <span v-html="style()"></span>
  </div>
</template>

<script>
import Box from "@/components/box/Box"
export default {
  name: "im-card",
  props: {
    header: {},
    main: {},
    footer: {}
  },
  components: { Box },
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
    }
  },
  mounted() {
    console.log(this.$slots)
  }
}
</script>

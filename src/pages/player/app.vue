<template>
  <div class="wrap-player" v-if="reInit">
    <vue-plyr>
      <template
        v-if="
          base.option.provider &&
            (base.option.provider == 'youtube' ||
              base.option.provider == 'vimeo')
        "
      >
        <div
          :data-plyr-provider="base.option.provider"
          :data-plyr-embed-id="base.option.src"
        ></div>
      </template>
      <template v-else>
        <video
          controls
          crossorigin
          playsinline
          :data-poster="base.option.poster"
        >
          <source size="720" :src="base.option.src" type="video/mp4" />
        </video>
      </template>
    </vue-plyr>
    <span v-html="style()"></span>
  </div>
</template>

<script>
import VuePlyr from "@/components/player/VuePlyr"
export default {
  name: "im-player",
  components: { VuePlyr },
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
    }
  }
}
</script>

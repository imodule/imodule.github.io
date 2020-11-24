<template>
  <div class="wrap-player" v-if="reInit">
    <vue-plyr>
      <template
        v-if="
          option.provider &&
            (option.provider == 'youtube' || option.provider == 'vimeo')
        "
      >
        <div
          :data-plyr-provider="option.provider"
          :data-plyr-embed-id="option.src"
        ></div>
      </template>
      <template v-else>
        <video controls crossorigin playsinline :data-poster="option.poster">
          <source size="720" :src="option.src" type="video/mp4" />
        </video>
      </template>
    </vue-plyr>
    <span v-html="style()"></span>
  </div>
</template>

<script>
import VuePlyr from "@/components/player/VuePlyr"
export default {
  name: "imPlayer",
  components: { VuePlyr },
  data() {
    return {
      option: {
        src: "bTqVqk7FSmY",
        provider: "youtube"
      },
      data: {},
      reInit: false
    }
  },
  watch: {
    option: {
      handler() {
        // hack re-render
        let vm = this
        vm.reInit = false
        vm.$nextTick(() => {
          vm.reInit = true
        })
      },
      deep: true
    },
    data: {
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
  },
  mounted() {
    var vm = this
    vm.reInit = true //create dom
    console.log(vm.$slots)
  }
}
</script>

<template>
  <div class="wrap-player" v-if="reInit">
    <vue-plyr>
      <template v-if="base.option.provider">
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
    <tabs-code :data="codeData" v-if="highlight" />
  </div>
</template>

<script>
import VuePlyr from "@/components/player/VuePlyr"
export default {
  name: "imPlayer",
  components: { VuePlyr },
  data() {
    return {
      codeData: [
        {
          label: "html",
          lang: "html",
          code: `<im-player />`
        },
        {
          label: "css",
          lang: "css",
          code: ""
        },
        {
          label: "js",
          lang: "js",
          code: ``
        }
      ],
      base: {
        option: {
          src: "bTqVqk7FSmY",
          provider: "youtube"
        },
        style: {},
        data: {}
      },
      highlight: false,
      reInit: false
    }
  },
  watch: {
    base: {
      handler(val) {
        // do stuff
        console.log(val)
        let vm = this
        vm.reInit = false
        vm.$nextTick(() => {
          vm.reInit = true
        })
      },
      deep: true
    }
  },
  mounted() {
    var vm = this
    vm.reInit = true //create dom

    window.addEventListener("message", function(e) {
      let data = e.data
      if (data.type && data.type === "imodule") {
        vm.base = e.data
      }
    })
  }
}
</script>

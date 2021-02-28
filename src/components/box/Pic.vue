<template>
  <div class="im-pic" :class="[ratio ? 'im-' + ratio : '']" :style="style">
    <div style="background-image:url('/img/800x800.jpg')"></div>
  </div>
</template>
<script>
export default {
  props: {
    ratio: {},
    round: {},
    minWidth: {
      type: String,
      default: "32px"
    }
  },
  computed: {
    style() {
      let vm = this
      return {
        minWidth: vm.minWidth,
        borderRadius: vm.round
      }
    }
  }
}
</script>
<style lang="scss">
.im-pic {
  overflow: hidden;
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  & > * {
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  &.im-3x4 {
    padding-bottom: 133.33%;
  }
  &.im-4x3 {
    padding-bottom: 75%;
  }
  &.im-4x6 {
    padding-bottom: 150%;
  }
  &.im-6x4 {
    padding-bottom: 66.6%;
  }
  &.im-5x8 {
    padding-bottom: 160%;
  }
  &.im-8x5 {
    padding-bottom: 62.5%;
  }
  &.im-9x16 {
    padding-bottom: 177.77%;
  }
  &.im-16x9 {
    padding-bottom: 56.25%;
  }
}
</style>

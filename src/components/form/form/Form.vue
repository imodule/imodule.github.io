<template>
  <div
    :class="{
      'im-form--label-left': labelPosition === 'left',
      'im-form--label-right': labelPosition === 'right',
      'im-form--label-top': labelPosition === 'top'
    }"
    class="im-form"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "im-form-core",

  provide() {
    return {
      form: this
    }
  },

  props: {
    model: {
      type: Object,
      default: () => {}
    },
    labelPosition: {
      type: String,
      default: "right"
    },
    labelWidth: {
      type: String,
      default: "100px"
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/variables";
@import "~@/assets/scss/mixins";

.im-form {
  $r: &;
  width: 400px;
  &--label-right {
    #{$r}__item-label {
      text-align: right;
    }
  }
  &--label-top {
    #{$r}__item {
      flex-flow: column;
      &-label {
        flex-basis: auto !important;
        align-self: flex-start;
        margin-bottom: 15px;
      }
    }
  }
  &__item {
    margin-bottom: 22px;
    display: flex;
    flex-flow: row wrap;
    position: relative;
    &-label {
      box-sizing: border-box;
      font-size: 14px;
      color: $color-text-regular;
      padding-right: 20px;
      align-self: center;
    }
    &-content {
      flex-grow: 1;
    }
    &-error {
      position: absolute;
      font-size: 12px;
      color: $color-danger;
      line-height: 20px;
    }
    &-validate {
      overflow: hidden;
    }
  }
}

.dark .im-form {
  $r: &;
  &__item {
    &-label {
      color: $dark-color-text-regular;
    }
    &-error {
      color: $dark-color-danger;
    }
  }
}
</style>

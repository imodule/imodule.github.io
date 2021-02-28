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
  width: 100%;
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
      color: $text-base;
      padding-right: 20px;
      align-self: center;
    }
    &-content {
      flex-grow: 1;
    }
    &-error {
      position: absolute;
      font-size: 12px;
      color: $danger;
      line-height: 20px;
    }
    &-validate {
      overflow: hidden;
    }
  }
}
@media (max-width: 768px) {
  .im-form {
    $r: &;
    #{$r}__item {
      flex-flow: column;
      &-label {
        flex-basis: auto !important;
        align-self: flex-start;
        margin-bottom: 15px;
      }
    }
  }
}

.dark .im-form {
  $r: &;
  &__item {
    &-label {
      color: $dark-text-base;
    }
    &-error {
      color: $dark-danger;
    }
  }
}
</style>

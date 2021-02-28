<template>
  <button
    :class="{
      'im-button--primary': type === 'primary',
      'im-button--success': type === 'success',
      'im-button--warning': type === 'warning',
      'im-button--danger': type === 'danger'
    }"
    :disabled="disabled"
    class="im-button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "im-button",

  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/variables";
@import "~@/assets/scss/mixins";

.im-button {
  $r: &;
  position: relative;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid $border;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -webkit-appearance: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.3s;
  @include button-hover-active(#fff, $text-base, 0, 5);
  border: 1px solid $border;
  &[disabled] {
    background-color: $color-lighten;
    border-color: $color-lighten;
    cursor: no-drop;
  }
  + #{$r} {
    margin-left: 10px;
  }
  &--primary {
    @include button-hover-active($primary, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($primary, 15);
    }
  }
  &--success {
    @include button-hover-active($success, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($success, 15);
    }
  }
  &--warning {
    @include button-hover-active($warning, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($warning, 10);
    }
  }
  &--danger {
    @include button-hover-active($danger, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($danger, 25);
    }
  }
}

.dark .im-button {
  $r: &;
  border: 1px solid $dark-border;
  @include button-hover-active(#fff, $dark-text-base, 0, 5);
  border: 1px solid $dark-border;
  &[disabled] {
    background-color: $dark-color-lighten;
    border-color: $dark-color-lighten;
  }
  &--primary {
    @include button-hover-active($dark-primary, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($dark-primary, 15);
    }
  }
  &--success {
    @include button-hover-active($dark-success, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($dark-success, 15);
    }
  }
  &--warning {
    @include button-hover-active($dark-warning, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($dark-warning, 10);
    }
  }
  &--danger {
    @include button-hover-active($dark-danger, #fff, 5, 5);
    &[disabled] {
      @include button-disabled($dark-danger, 25);
    }
  }
}
</style>

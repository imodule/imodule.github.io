<template>
  <label
    :class="{
      'im-radio--checked': isChecked,
      'im-radio--disabled': disabled,
      'im-radio--bordered': type === 'border'
    }"
    class="im-radio"
  >
    <span class="im-radio__input">
      <span class="im-radio__inner" />
      <input
        :id="`im-radio-${_uid}`"
        :name="name"
        :checked="isChecked"
        :disabled="disabled"
        :value="value"
        type="radio"
        @change="onChange"
      />
    </span>
    <span class="im-radio__label">
      <span v-if="label">{{ label }}</span>
      <slot v-else />
    </span>
  </label>
</template>

<script>
export default {
  name: "im-radio",

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
      type: [String, Number],
      default: () => {}
    },
    value: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isChecked() {
      return this.modelValue === this.value
    }
  },
  methods: {
    onChange() {
      if (this.disabled) return
      return this.$emit("change", this.value)
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/variables";
@import "~@/assets/scss/mixins";

.im-radio {
  $r: &;
  font-size: 14px;
  cursor: pointer;
  color: $color-text-regular;
  + #{$r} {
    margin-left: 10px;
  }
  &__inner {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    cursor: pointer;
    display: inline-block;
    background-color: $color-base-visited;
    border: $input-border;
    margin-right: 10px;
    position: relative;
    top: 2px;
    box-sizing: border-box;
  }
  &--checked {
    color: $color-primary;
    #{$r}__inner {
      background-color: $color-primary;
      border-color: $color-primary;
      &::after {
        position: absolute;
        content: "";
        width: 6px;
        height: 6px;
        background-color: $color-base-visited;
        border-radius: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &#{$r}--bordered {
      border-color: $color-primary;
    }
  }
  &--disabled {
    color: $color-base-active;
    cursor: no-drop;
    #{$r}__inner {
      background-color: $color-base-hover;
      border-color: $color-base-active;
      &::after {
        background-color: $color-base;
      }
    }
  }
  &--bordered {
    border-color: $color-primary;
    border: $input-border;
    border-radius: $input-border-radius;
    padding: $input-inner-padding;
    line-height: calc(#{$input-height} - 2px);
    height: calc(#{$input-height} - 2px);
    transition: all 0.2s;
    display: inline-block;
  }
  input {
    display: none;
  }
}

.dark .im-radio {
  $r: &;
  color: $dark-color-text-regular;
  &__inner {
    border: $dark-input-border;
    background-color: $dark-color-base-visited;
  }
  &--checked {
    color: $dark-color-primary;
    #{$r}__inner {
      background-color: $dark-color-primary;
      border-color: $dark-color-primary;
      &::after {
        background-color: $dark-color-base-visited;
      }
    }
    &#{$r}--bordered {
      border-color: $dark-color-primary;
    }
  }
  &--disabled {
    color: $dark-color-base-active;
    #{$r}__inner {
      background-color: $dark-color-base-hover;
      border-color: $dark-color-base-active;
      &::after {
        background-color: $dark-color-base;
      }
    }
  }
  &--bordered {
    border: $dark-input-border;
    border-color: $dark-color-primary;
  }
}
</style>

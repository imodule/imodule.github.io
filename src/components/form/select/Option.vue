<template>
  <div
    :class="{
      'im-select__option--selected': isSelected,
      'im-select__option--hovered': index === select.aheadPointer
    }"
    :disabled="disabled"
    class="im-select__option"
    @click="onSelect"
    @mouseover="onHover"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "im-option",

  inject: ["select"],

  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    label: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isSelected() {
      if (this.select.multiple) {
        return !!this.select.selected.find(item => item.value === this.value)
      } else {
        return this.select.value === this.value
      }
    },
    index() {
      if (!Array.isArray(this.select.data) || !this.select.data.length) return
      return this.select.data.findIndex(item => item.value === this.value)
    }
  },

  methods: {
    onSelect() {
      this.select.$emit("option:select", {
        value: this.value,
        label: this.label,
        disabled: this.disabled
      })
    },
    onHover() {
      this.select.aheadPointer = this.index
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/variables";

.im-select__option {
  cursor: pointer;
  margin: 0 -10px;
  padding: 10px 15px;
  font-size: 14px;
  &[disabled] {
    cursor: no-drop !important;
    color: $color-base;
  }
  &--hovered {
    background-color: $color-base-hover;
    &[disabled] {
      background-color: inherit;
    }
  }
  &--selected {
    color: $color-primary;
    &:hover {
      background-color: $color-base-hover;
    }
  }
}

.dark .im-select__option {
  &[disabled] {
    color: $dark-color-base;
  }
  &--hovered {
    background-color: $dark-color-base-hover;
  }
  &--selected {
    color: $dark-color-primary;
    &:hover {
      background-color: $dark-color-base-hover;
    }
  }
}
</style>

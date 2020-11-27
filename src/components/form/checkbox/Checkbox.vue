<template>
  <div class="im-checkbox">
    <label
      :class="{
        'im-checkbox--checked': isChecked,
        'im-checkbox--bordered': type === 'border',
        'im-checkbox--disabled': disabled
      }"
      class="im-checkbox"
    >
      <input
        :id="`im-checkbox-${_uid}`"
        :checked="isChecked"
        :name="name"
        :disabled="disabled"
        :value="value"
        type="checkbox"
        @change="onChange"
      />
      <div class="im-checkbox__inner">
        <i v-if="isChecked" class="icon-check" />
      </div>
      <span class="im-checkbox__label">
        <span v-if="label">{{ label }}</span>
        <slot v-else />
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "im-checkbox",

  $_veeValidate: {
    name() {
      return this.name
    },
    value() {
      return this.checked
    }
  },

  model: {
    prop: "checked",
    event: "change"
  },

  props: {
    checked: Boolean,
    value: {
      type: [String, Number, Boolean],
      default: ""
    },
    name: {
      type: String,
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
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    isGroup() {
      return this.$parent.$options.name === "VueCheckboxGroup"
    },
    isChecked() {
      if (!this.isGroup) return this.checked
      if (this.$parent.modelValue) {
        if (typeof this.value === "object") {
          return !!this.$parent.modelValue.find(
            item => item.id === this.value.id
          )
        }
        if (typeof this.value === "string" || typeof this.value === "number") {
          return !!this.$parent.modelValue.find(item => item === this.value)
        }
      }
      return false
    }
  },

  methods: {
    onChange() {
      if (this.disabled) return
      if (!this.isGroup) return this.$emit("change", !this.checked)

      if (!this.isChecked) {
        this.$parent.value.push(this.value)
      } else {
        this.$parent.value.find(item => {
          if (typeof this.value === "object") {
            this.$nextTick(() => {
              if (item.id === this.value.id)
                this.$parent.value.splice(this.$parent.value.indexOf(item), 1)
            })
          }
          if (
            typeof this.value === "string" ||
            typeof this.value === "number"
          ) {
            this.$nextTick(() => {
              if (item === this.value)
                this.$parent.value.splice(this.$parent.value.indexOf(item), 1)
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/variables";
@import "~@/assets/scss/mixins";
@import "~@/assets/scss/fonts";

.im-checkbox {
  $r: &;
  font-size: 14px;
  cursor: pointer;
  display: inline-table;
  color: $color-text-regular;
  + #{$r} {
    margin-left: 10px;
  }
  &--checked {
    color: $color-primary;
    #{$r}__inner {
      background-color: $color-primary;
      border-color: $color-primary;
    }
    &#{$r}--bordered {
      border-color: $color-primary;
    }
    &#{$r}--disabled {
      #{$r}__inner {
        border-color: $color-base-active;
      }
      i {
        color: $color-base-active;
      }
    }
  }
  &--disabled {
    cursor: no-drop;
    #{$r}__inner {
      background-color: $color-base-hover;
      cursor: no-drop;
    }
    #{$r}__label {
      color: $color-base-active;
    }
  }
  &--bordered {
    border: $input-border;
    border-radius: $input-border-radius;
    padding: $input-inner-padding;
    line-height: calc(#{$input-height} - 2px);
    box-sizing: content-box;
    transition: all 0.2s;
  }
  &:last-of-type {
    margin-right: 0;
  }
  &__label {
    display: table-cell;
    width: 100%;
    line-height: 1.3em;
  }
  &__inner {
    top: 3px;
    width: 14px;
    height: 14px;
    margin-right: 5px;
    background-color: $color-base-visited;
    border: $input-border;
    border-radius: 3px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    i {
      position: absolute;
      color: #fff;
      left: 0;
    }
  }
  input {
    display: none;
  }
}

.dark .im-checkbox {
  $r: &;
  color: $dark-color-text-regular;
  &--checked {
    color: $dark-color-primary;
    #{$r}__inner {
      background-color: $dark-color-primary;
      border-color: $dark-color-primary;
    }
    &#{$r}--bordered {
      border-color: $dark-color-primary;
    }
    &#{$r}--disabled {
      #{$r}__inner {
        border-color: $dark-color-base-active;
      }
      i {
        color: $dark-color-base-active;
      }
    }
  }
  &--disabled {
    #{$r}__inner {
      background-color: $dark-color-base-hover;
    }
    #{$r}__label {
      color: $dark-color-base-active;
    }
  }
  &--bordered {
    border: $dark-input-border;
  }
  &__inner {
    background-color: $dark-color-base-visited;
    border: $dark-input-border;
  }
}
</style>

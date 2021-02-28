<template>
  <div
    v-click-outside="onClosePopper"
    :class="{
      'im-select--opened': showPopper,
      'im-select--disabled': disabled
    }"
    class="im-select"
    @click="togglePopper"
    @keydown.38="scrollByArrow"
    @keydown.40="scrollByArrow"
    @keydown.enter="onEnter"
  >
    <span v-if="multiple" class="im-select__tag">
      <span ref="tags">
        <template v-for="(item, index) in selected">
          <span
            v-if="collapseTags && index < 1"
            :key="item.value"
            class="im-select__tag-item"
          >
            {{ item.label }}
            <i class="icon-close" @click.stop="onRemoveTag(item)" />
          </span>
          <span
            v-if="collapseTags && index === 1"
            :key="item.value"
            class="im-select__tag-item im-select__tag-item--collapsed"
          >
            +{{ selected.length - 1 }}
          </span>
          <span
            v-if="!collapseTags"
            :key="item.value"
            class="im-select__tag-item"
          >
            {{ item.label }}
            <i class="icon-close" @click.stop="onRemoveTag(item)" />
          </span>
        </template>
      </span>
    </span>
    <im-input
      ref="input"
      v-model="selected.label"
      :readonly="true"
      :placeholder="computedPlaceholder"
      :disabled="disabled"
      :name="name"
    >
      <template slot="suffix">
        <i class="icon-chevron-down" />
      </template>
    </im-input>
    <im-popper
      v-if="showPopper"
      ref="popper"
      :append-to="appendEl"
      :full-size="true"
    >
      <div ref="list" class="im-select__option-list">
        <div v-if="!data.length" class="im-select__option-list-empty">
          {{ emptyText }}
        </div>
        <slot v-else />
      </div>
    </im-popper>
  </div>
</template>

<script>
import Input from "../input/Input.vue"
import Popper from "../popper/Popper.vue"
import { clickOutside } from "@/utils/directives"

export default {
  name: "im-select",

  $_veeValidate: {
    name() {
      return this.name
    },
    value() {
      return this.value
    }
  },

  components: {
    [Input.name]: Input,
    [Popper.name]: Popper
  },

  directives: {
    clickOutside
  },

  provide() {
    return {
      select: this
    }
  },

  model: {
    prop: "value",
    event: "change"
  },

  props: {
    data: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number, Array],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    },
    collapseTags: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: "Empty list"
    },
    name: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      appendEl: "",
      selected: this.multiple ? [] : {},
      showPopper: false,
      aheadPointer: 0,
      pointerPosTop: null,
      viewportHeight: null,
      tagsHeight: null
    }
  },

  computed: {
    computedPlaceholder() {
      if (this.multiple) {
        return this.selected.length === 0 ? this.placeholder : ""
      }
      return this.placeholder
    },
    selectedValue() {
      return this.selected.map(i => i.value)
    }
  },

  watch: {
    showPopper(v) {
      if (v) {
        this.$nextTick(() => {
          this.getViewportHeight()
          this.getPointerPosTop()
        })
        this.$refs.input.$el.querySelector("input").focus()
      }
    },
    value() {
      this.setInitValue()
      if (this.multiple) this.refreshInputHeight()
    }
  },

  created() {
    this.setInitValue()
    this.$on("option:select", e => {
      if (this.multiple) {
        this.addItem(e)
        this.refreshInputHeight()
        this.$emit("change", this.selectedValue)
        this.$refs.popper.update()
      } else {
        this.selected = e
        this.$emit("change", e.value)
        this.onClosePopper()
      }
    })
  },

  mounted() {
    this.appendEl = this.$el
    this.refreshInputHeight()
  },

  methods: {
    setInitValue() {
      if (!this.value) return

      if (this.multiple) {
        this.selected = this.value.map(item => {
          return this.data.find(i => i.value === item)
        })
      } else {
        this.selected = this.data.find(item => item.value === this.value)
      }
    },
    togglePopper() {
      if (this.disabled) return

      this.showPopper = !this.showPopper
    },
    onClosePopper() {
      if (this.showPopper) this.showPopper = false
    },
    onClosePopper2() {
      console.warn("sss")
    },
    onEnter() {
      const item = this.data[this.aheadPointer]

      if (this.multiple) {
        this.addItem(item)
        this.$emit("change", this.selectedValue)
      } else {
        this.$emit("change", item.value)
      }
      this.showPopper = false
    },
    getViewportHeight() {
      this.viewportHeight = this.$refs.popper.$el.offsetHeight
    },
    getPointerPosTop() {
      this.pointerPosTop = this.$refs.list.children[this.aheadPointer].offsetTop
    },
    getTagsHeight() {
      if (!this.multiple) return

      this.tagsHeight = this.$refs.tags.offsetHeight
    },
    setInputHeight() {
      if (!this.multiple) return

      const inputEL = this.$refs.input.$el.querySelector("input")

      if (this.tagsHeight > 40) {
        inputEL.style.height = this.tagsHeight + 14 + "px"
      } else {
        inputEL.style.height = 40 + "px"
      }
    },
    addItem(item) {
      if (item.disabled) return

      const index = this.selected.findIndex(i => i.value === item.value)
      index === -1 ? this.selected.push(item) : this.selected.splice(index, 1)
    },
    scrollByArrow(e) {
      if (!this.data || !this.showPopper) return

      const optionItemHeight = this.$refs.list.children[0].offsetHeight
      const popperInner = this.$refs.popper.$el.querySelector(
        ".im-popper__inner"
      )
      const offsetTop = 10
      const offsetBottom = 6

      if (e.keyCode === 38) {
        if (this.aheadPointer > 0) this.aheadPointer--
        this.getPointerPosTop()
      }
      if (e.keyCode === 40) {
        if (this.aheadPointer < this.data.length - 1) this.aheadPointer++
        this.getPointerPosTop()
      }
      if (this.pointerPosTop < popperInner.scrollTop) {
        popperInner.scrollTop = this.pointerPosTop - offsetTop
      }
      if (
        this.pointerPosTop >
        popperInner.scrollTop + this.viewportHeight - optionItemHeight
      ) {
        popperInner.scrollTop =
          this.pointerPosTop -
          this.viewportHeight +
          optionItemHeight +
          offsetBottom
      }
    },
    refreshInputHeight() {
      this.$nextTick(() => {
        this.getTagsHeight()
        this.setInputHeight()
      })
    },
    onRemoveTag(tag) {
      const index = this.selected.findIndex(item => item.value === tag.value)
      this.$emit("remove-tag", this.selected[index])
      this.selected.splice(index, 1)
      this.$emit("change", this.selectedValue)
      if (this.showPopper) this.$refs.popper.update()
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/variables";
@import "~@/assets/scss/mixins";
@import "~@/assets/scss/fonts";

.im-select {
  $r: &;
  display: inline-block;
  cursor: pointer;
  position: relative;
  width: 100%;
  &__tag {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 2px 40px 2px 5px;
    z-index: 10;
    &-item {
      box-sizing: border-box;
      font-size: 14px;
      background-color: $color-lighten;
      border: $input-border;
      border-radius: $input-border-radius;
      color: $text-base;
      padding: 2px 5px;
      flex-shrink: 0;
      margin: 2px;
      display: inline-block;
      > i {
        position: relative;
        top: 1px;
        color: $color-darken;
        &:hover {
          color: $text-base;
        }
      }
    }
  }
  &__option {
    &-list-empty {
      font-size: 14px;
    }
  }
  .im-input {
    &__inner {
      cursor: pointer;
    }
    i {
      transition: all 0.2s;
    }
  }
  &--opened {
    .im-input {
      i {
        transform: rotate(180deg);
      }
    }
  }
  &--disabled {
    .im-input__suffix {
      i {
        color: $color-darken;
      }
    }
    .im-input__inner {
      color: $color-darken;
      cursor: no-drop !important;
    }
  }
}

.dark .im-select {
  $r: &;
  &__tag {
    &-item {
      border: $dark-input-border;
      background-color: $dark-color-lighten;
      color: $dark-text-base;
      > i {
        color: $dark-color-darken;
        &:hover {
          color: $dark-text-base;
        }
      }
    }
  }
  &--disabled {
    .im-input__suffix {
      i {
        color: $dark-color-darken;
      }
    }
    .im-input__inner {
      color: $dark-color-darken;
    }
  }
}
</style>

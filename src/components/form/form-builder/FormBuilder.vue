<template>
  <div class="im-form-builder">
    <im-form-core
      ref="form"
      :model="clonedModel"
      :label-position="options.labelPosition"
      :label-width="options.labelWidth"
      data-vv-scope="form-1"
    >
      <im-form-item
        v-for="(field, index) in schema.fields"
        :key="field.label + index"
        :label="field.label"
        :field="field.model"
      >
        <!-- Input -->
        <template v-if="field.type === 'input'">
          <im-input
            :key="field.name + index"
            :ref="field.name"
            v-model="clonedModel[field.model]"
            v-validate="field.validate"
            :type="field.inputType"
            :name="field.name"
            :readonly="field.readonly"
            :placeholder="field.placeholder"
            :disabled="field.disabled"
            @input="onUpdate"
          />
        </template>
        <!-- Select -->
        <template v-if="field.type === 'select'">
          <im-select
            v-model="clonedModel[field.model]"
            v-validate="field.validate"
            :data="field.options"
            :name="field.name"
            :placeholder="field.placeholder"
            :multiple="Array.isArray(clonedModel[field.model])"
            @change="onUpdate"
          >
            <im-option
              v-for="i in field.options"
              :key="i.value"
              :value="i.value"
              :label="i.label"
            />
          </im-select>
        </template>
        <!-- Checkbox -->
        <template v-if="field.type === 'checkbox'">
          <im-checkbox-group
            v-if="Array.isArray(clonedModel[field.model])"
            v-model="clonedModel[field.model]"
            v-validate="field.validate"
            :name="field.name"
            @change="onUpdate"
          >
            <im-checkbox
              v-for="i in field.options"
              :key="i.value"
              :type="field.inputType"
              :value="i.value"
              :label="i.label"
            />
          </im-checkbox-group>
          <im-checkbox
            v-else
            v-model="clonedModel[field.model]"
            v-validate="field.validate"
            :type="field.inputType"
            :name="field.name"
            :label="field.checkboxLabel"
            @change="onUpdate"
          />
        </template>
        <!-- Radio -->
        <template v-if="field.type === 'radio'">
          <im-radio
            v-for="i in field.options"
            :key="i.value"
            v-model="clonedModel[field.model]"
            v-validate="field.validate"
            :type="field.inputType"
            :name="field.name"
            :value="i.value"
            :label="i.label"
            @change="onUpdate"
          />
        </template>
        <!-- Actions -->
        <template v-if="field.type === 'actions'">
          <im-button
            v-for="(i, idx) in field.buttons"
            :key="idx"
            :type="i.buttonType"
            @click="onAction(i.type)"
          >
            {{ i.buttonLabel }}
          </im-button>
        </template>
      </im-form-item>
    </im-form-core>
  </div>
</template>

<script>
import Form from "../form/Form"
import FormItem from "../form/FormItem"
import Input from "../input/Input"
import Checkbox from "../checkbox/Checkbox"
import CheckboxGroup from "../checkbox/CheckboxGroup"
import Radio from "../radio/Radio"
import Select from "../select/Select"
import Option from "../select/Option"
import Button from "../button/Button"
import { cloneShallow } from "@/utils"

export default {
  name: "im-form-builder",

  components: {
    ImFormCore: Form,
    ImFormItem: FormItem,
    ImInput: Input,
    ImCheckbox: Checkbox,
    ImCheckboxGroup: CheckboxGroup,
    ImRadio: Radio,
    ImSelect: Select,
    ImOption: Option,
    ImButton: Button
  },

  model: {
    prop: "model",
    event: "update"
  },

  props: {
    model: {
      type: Object,
      default: () => {}
    },
    schema: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Object,
      default: () => {
        return {
          labelPosition: undefined,
          labelWidth: undefined
        }
      }
    }
  },

  data() {
    return {
      clonedModel: {}
    }
  },

  created() {
    this.clonedModel = cloneShallow(this.model)
  },

  mounted() {
    // Hack to update validation
    this.$forceUpdate()
  },

  methods: {
    isSelectMultiple(value) {
      return Array.isArray(value)
    },
    onUpdate() {
      this.$emit("update", this.clonedModel)
    },
    onAction(e) {
      this.$emit("action", { type: e, form: this.$refs.form })
    }
  }
}
</script>

<style lang="scss"></style>

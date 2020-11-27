<template>
  <div class="dark wrap-form" v-if="reInit">
    <im-form-builder
      ref="form"
      v-model="model"
      :schema="schema"
      :options="schema.formOptions"
      @action="onAction"
    >
    </im-form-builder>
    <span v-html="style()"></span>
  </div>
</template>

<script>
import FormBuilder from "@/components/form/form-builder/FormBuilder"
export default {
  name: "im-form",
  components: { [FormBuilder.name]: FormBuilder },
  props: {
    base: {
      type: Object,
      default: () => {
        return { option: {}, data: {} }
      }
    }
  },
  data() {
    return {
      reInit: false,
      model: {
        id: 1,
        name: "John Doe",
        password: "",
        passwordConfirm: "",
        skills: [1],
        email: "john.doe@gmail.com",
        status: true,
        addons: [1, 3],
        delivery: 1,
        comment: "Some comment"
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "input",
            label: "ID",
            name: "input",
            model: "id",
            readonly: true,
            disabled: true,
            validate: {
              required: true
            }
          },
          {
            type: "input",
            inputType: "password",
            label: "Password",
            name: "password",
            placeholder: "Type password",
            model: "password",
            validate: {
              required: true
            }
          },
          {
            type: "input",
            inputType: "password",
            label: "Password confirm",
            name: "passwordConfirm",
            placeholder: "Confirm password",
            model: "passwordConfirm",
            validate: {
              required: true,
              confirmed: "password"
            }
          },
          {
            type: "select",
            label: "Skills",
            model: "skills",
            name: "skills",
            placeholder: "Select",
            options: [
              {
                label: "label 1",
                value: 1
              },
              {
                label: "label 2",
                value: 2
              },
              {
                label: "label 3",
                value: 3
              }
            ],
            validate: {
              required: true,
              included: [1, 2]
            }
          },
          {
            type: "input",
            inputType: "input",
            label: "Email",
            name: "email",
            placeholder: "Type email",
            model: "email",
            validate: {
              required: true,
              email: true
            }
          },
          {
            type: "checkbox",
            label: "Status",
            name: "status",
            checkboxLabel: "Some text",
            model: "status",
            validate: {
              required: [true]
            }
          },
          {
            type: "checkbox",
            label: "Addons",
            name: "addons",
            model: "addons",
            options: [
              {
                label: "label 1",
                value: 1
              },
              {
                label: "label 2",
                value: 2
              },
              {
                label: "label 3",
                value: 3
              }
            ],
            validate: {
              required: true
            }
          },
          {
            type: "radio",
            label: "Delivery",
            name: "delivery",
            model: "delivery",
            options: [
              {
                label: "label 1",
                value: 1
              },
              {
                label: "label 2",
                value: 2
              },
              {
                label: "label 3",
                value: 3
              }
            ],
            validate: {
              required: true
            }
          },
          {
            type: "input",
            inputType: "textarea",
            name: "comment",
            label: "Comment",
            model: "comment",
            validate: {
              required: true,
              min: 10
            }
          },
          {
            type: "actions",
            buttons: [
              {
                type: "cancel",
                buttonType: "default",
                buttonLabel: "Cancel"
              },
              {
                type: "submit",
                buttonType: "success",
                buttonLabel: "Submit"
              }
            ]
          }
        ],
        formOptions: {
          labelPosition: "right",
          labelWidth: "120px"
        }
      }
    }
  },
  watch: {
    base: {
      handler() {
        // hack re-render
        let vm = this
        vm.reInit = false
        vm.$nextTick(() => {
          vm.reInit = true
        })
      },
      deep: true
    }
  },
  methods: {
    style() {
      let vm = this

      const style = vm.$slots["style"]
      if (style) {
        const dom = style[0].data.domProps
        if (dom) {
          return "<style scoped>" + dom.innerHTML.trim() + "</style>"
        }
      }
      return ""
    },
    async onAction(e) {
      if (e.type === "submit") {
        const res = await this.$refs.form.$validator.validate()
        if (res) alert("Form is valid")
      }
    }
  },
  mounted() {
    var vm = this
    vm.reInit = true //create dom
  }
}
</script>

import type { Plugin } from 'vue'
import { Form as VeeForm, Field as VeeField } from 'vee-validate'

export default {
  install(app, option) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
  }
} as Plugin

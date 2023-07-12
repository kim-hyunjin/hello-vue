import type { Directive } from 'vue'

export default {
  beforeMount(el) {
    el.innerHtml += `<i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i>`
  }
} as Directive

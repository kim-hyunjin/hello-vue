let vm = Vue.createApp({
  data() {
    return {
      message: 'Hello world!',
    };
  },
  // https://vuejs.org/guide/essentials/lifecycle.html
  beforeCreate() {
    console.log('beforeCreate() fn called!', this.message);
  },
  created() {
    console.log('created() fn called!', this.message);
  },
  beforeMount() {
    console.log('beforeMount() fn called!', this.$el);
  },
  mounted() {
    console.log('mounted() fn called!', this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate() fn called!', this.message);
  },
  updated() {
    console.log('updated() fn called!', this.message);
  },
  beforeUnmount() {
    console.log('beforeUnmount() fn called!', this.$el);
  },
  unmounted() {
    console.log('unmounted() fn called!', this.$el);
  },
});

vm.mount('#app');

// setTimeout(() => {
//   vm.mount('#app');
// }, 3000);

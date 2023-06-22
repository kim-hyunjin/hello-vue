const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
}).mount('#app1');

setTimeout(() => {
  // without proxy
  vm.$data.firstName = 'Bob';

  // with proxy
  vm.lastName = 'Bob';
}, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'John',
//       lastName: 'Doe',
//     };
//   },
// }).mount('#app2');

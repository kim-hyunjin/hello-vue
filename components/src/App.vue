<template>
  <h3>Hey!</h3>
  <Greeting :age="age" />
  <user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></user>
  <app-form>
    <template v-slot:help>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" />
      <input type="text" />
    </template>
    <template v-slot:buttons>
      <button>button</button>
    </template>
    <p>this is goes to default slot</p>
  </app-form>
</template>

<script>
import Greeting from '@/components/Greeting.vue';
import User from '@/components/User.vue';
import AppForm from '@/components/Form.vue';

export default {
  name: 'MyApp',
  components: {
    Greeting,
    User,
    AppForm,
  },
  data() {
    return {
      age: 20,
      help: 'this is some help text.',
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>

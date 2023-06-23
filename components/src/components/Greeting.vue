<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'Greeting',
  data() {
    return {
      msg: 'hello world!',
    };
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>

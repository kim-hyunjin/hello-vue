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

<style scoped lang="scss">
p {
  color: red;
  &:hover {
    color: darken($color: #cc4444, $amount: 15%);
  }
}
</style>

<template>
  <div>The User is {{ age }} years old</div>
  <button @click="onClickAge">Updage Age</button>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: 'User',
  props: ['age'],
  emits: ['age-change'],
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit('age-change', 3);
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <button @click="flag = !flag">Toggle</button>
  <transition name="fade">
    <h2 v-if="flag">Hello world</h2>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.25s linear;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}
</style>

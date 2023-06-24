<template>
  <button @click="flag = !flag">Toggle</button>
  <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="1">Hello fade</h2>
    <h2 v-else key="2">Another fade</h2>
  </transition>

  <transition name="zoom">
    <h2 v-if="flag">Zoom</h2>
  </transition>

  <transition name="zoom" appear>
    <h2>Zoom amimate at first</h2>
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
  transition: all 1s linear;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>

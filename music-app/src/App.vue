<script lang="ts">
import { defineComponent } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppAuth from '@/components/AppAuth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from './includes/firebase'

import AppPlayer from './components/AppPlayer.vue'
export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppAuth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
})
</script>

<template>
  <app-header></app-header>
  <suspense>
    <router-view />
  </suspense>
  <app-player />
  <app-auth></app-auth>
</template>

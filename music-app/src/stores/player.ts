import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { SongWithID } from '@/models/song'

import { Howl } from 'howler'

export const usePlayerStore = defineStore('player', () => {
  const currentSong = ref<SongWithID>()
  const sound = ref<Howl>()

  const playing = computed(() => sound.value?.playing())

  async function playSong(song: SongWithID) {
    currentSong.value = song
    sound.value = new Howl({
      src: [song.url],
      html5: true
    })

    sound.value.play()
  }

  async function pauseSong() {
    if (!sound.value) return

    if (sound.value.playing()) {
      sound.value.pause()
    }
  }

  async function toggleAudio() {
    if (!sound.value) return

    if (sound.value.playing()) {
      sound.value.pause()
    } else {
      sound.value.play()
    }
  }

  return { playSong, pauseSong, toggleAudio, playing }
})

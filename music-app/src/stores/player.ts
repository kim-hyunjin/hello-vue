import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SongWithID } from '@/models/song'

import { Howl } from 'howler'

export const usePlayerStore = defineStore('player', () => {
  const currentSong = ref<SongWithID>()
  const sound = ref<Howl>()

  async function playSong(song: SongWithID) {
    currentSong.value = song
    sound.value = new Howl({
      src: [song.url],
      html5: true
    })

    sound.value.play()
  }

  return { playSong }
})

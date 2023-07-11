import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { SongWithID } from '@/models/song'

import { Howl } from 'howler'
import { formatTime } from '@/includes/helper'

export const usePlayerStore = defineStore('player', () => {
  const currentSong = ref<SongWithID>()
  const sound = ref<Howl>()
  const seek = ref('00:00')
  const duration = ref('00:00')

  const playing = computed(() => sound.value?.playing())

  async function playSong(song: SongWithID) {
    currentSong.value = song
    sound.value = new Howl({
      src: [song.url],
      html5: true
    })

    sound.value.play()

    sound.value.on('play', () => {
      requestAnimationFrame(progress)
    })
  }

  function progress() {
    seek.value = formatTime(sound.value?.seek() ?? 0)
    duration.value = formatTime(sound.value?.duration() ?? 0)

    if (sound.value?.playing()) {
      requestAnimationFrame(progress)
    }
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

  return { playSong, pauseSong, toggleAudio, playing, seek, duration, currentSong }
})

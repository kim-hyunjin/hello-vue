import type { SongWithID } from '@/models/song'
import SongItemVue from '../SongItem.vue'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('SongItem.vue', () => {
  test('renders song.display_name', () => {
    const song: SongWithID = {
      display_name: 'test',
      comment_count: 0,
      doc_id: 'test',
      genre: 'test',
      modified_name: 'test',
      original_name: 'test',
      uid: 'test',
      url: 'test'
    }
    const wrapper = shallowMount(SongItemVue, {
      props: { song },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    const compositionAuthor = wrapper.find('.text-gray-500')

    expect(compositionAuthor.text()).toBe(song.display_name)
  })
})

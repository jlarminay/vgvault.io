import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import DictionaryComponent from '@/components/DictionaryComponent.vue'
import createDictionaryStore from '@/stores/dictionary.store'

const wrapper = mount(DictionaryComponent, {
  global: {
    plugins: [createTestingPinia({ createSpy: vi.fn() })],
  },
})
const dictionaryStore = createDictionaryStore()

describe('DictionaryComponent', () => {
  it('renders properly', async () => {
    // arrange
    // act
    // assert
    expect(wrapper.text()).toContain('Status:')
  })

  it('store function is called', async () => {
    // arrange
    const spy = {
      search: vi.spyOn(dictionaryStore, 'search'),
    }
    const search = wrapper.find('#search')
    const button = wrapper.find('button')

    // act
    await search.setValue('man')
    await button.trigger('click')

    // assert
    expect(spy.search).toHaveBeenCalledWith('man')
  })
})

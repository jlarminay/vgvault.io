import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import UsersComponent from '@/components/UsersComponent.vue'
import { useUsersStore } from '@/stores/users.store'

const wrapper = mount(UsersComponent, {
  global: {
    plugins: [createTestingPinia({ createSpy: vi.fn() })],
  },
})
const usersStore = useUsersStore()

beforeEach(async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  // await wrapper.vm.$nextTick()
})

describe('UsersComponent', () => {
  it('renders properly', async () => {
    // arrange
    // act
    // assert
    expect(wrapper.text()).toContain('Status:')
  })

  it('store function is called', async () => {
    // arrange
    console.log(usersStore.getAll)
    const spy = {
      getAllUsers: vi.spyOn(wrapper.vm, 'getAllUsers'),
      resetStatus: vi.spyOn(usersStore, 'resetStatus'),
      // getAll: vi.spyOn(usersStore, 'getAll'),
    }
    const button = wrapper.find('button')
    console.log(usersStore.getAll)

    // act
    await button.trigger('click')
    console.log(usersStore.getAll)

    // assert
    console.log(usersStore.getAll)
    expect(spy.getAllUsers).toHaveBeenCalled()
    // expect(spy.getAll).toHaveBeenCalled()
  })

  it('store returns an error', async () => {
    // arrange
    // act
    usersStore.status = 'error'
    await wrapper.vm.$nextTick()
    // assert
    expect(wrapper.text()).toContain('Nothing found')
  })
})

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HomeComponent from '@/components/HomeComponent.vue'

const wrapper = mount(HomeComponent, { props: { msg: 'Hello Vitest' } })

describe('HomeComponent', () => {
  it('renders properly w/ props', async () => {
    // arrange
    // act
    // assert
    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.text()).toContain('**Hello Vitest**')
  })

  it('button adds to counter', async () => {
    // arrange
    const counter = wrapper.find('#value')
    const button = wrapper.find('button')

    // act
    expect(counter.text()).toContain('0')
    await button.trigger('click')

    // assert
    expect(counter.text()).toContain('1')
  })
})

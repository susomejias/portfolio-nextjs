import React from 'react'
import { mount } from 'enzyme'
import * as nextRouter from 'next/router'

import NavButton from './index'

describe('<NavButton>', () => {
  nextRouter.useRouter = jest.fn()
  nextRouter.useRouter.mockImplementation(() => ({ pathname: '/' }))

  const componentProps = {
    text: 'navButtonText',
    url: '/',
    iconClass: 'fas fa-home'
  }
  const wrapperCurrentRoute = mount(<NavButton {...componentProps} />)

  it('should render', () => {
    expect(wrapperCurrentRoute).toBeDefined()
  })

  it('should be the highlighted button because its url is toEqual to the current url', () => {
    expect(wrapperCurrentRoute.find('.current').length).toEqual(1)
    expect(wrapperCurrentRoute.find('.fas.fa-home').length).toEqual(1)
    expect(wrapperCurrentRoute.find('.current span').text()).toEqual(
      'navButtonText'
    )
  })

  nextRouter.useRouter = jest.fn()
  nextRouter.useRouter.mockImplementation(() => ({ pathname: '/project' }))

  const componentPropsNotCurrentRoute = {
    text: 'navButtonText',
    url: '/url-test',
    iconClass: 'fas fa-briefcase'
  }
  const wrapperNotCurrentRoute = mount(
    <NavButton {...componentPropsNotCurrentRoute} />
  )

  it('should render', () => {
    expect(wrapperNotCurrentRoute).toBeDefined()
  })

  it('should not be the highlighted button because its url is not toEqual to the current url', () => {
    expect(wrapperNotCurrentRoute.find('.current').length).toEqual(0)
    expect(wrapperNotCurrentRoute.find('.fas.fa-briefcase').length).toEqual(1)
    expect(wrapperNotCurrentRoute.find('span').text()).toEqual('navButtonText')
  })
})

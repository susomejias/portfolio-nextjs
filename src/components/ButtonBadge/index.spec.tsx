import React from 'react'
import { mount } from 'enzyme'

import ButtonBadge from './index'

describe('<ButtonBadge>', () => {
  const componentProps = {
    text: 'Link test',
    isLink: true,
    url: 'https://google.es',
    isTargetBlank: true
  }
  const wrapperWithPropsLinkButton = mount(<ButtonBadge {...componentProps} />)

  it('wrapperWithPropsLinkButton: should render', () => {
    expect(wrapperWithPropsLinkButton).toBeDefined()
  })
  it('wrapperWithPropsLinkButton: should render with text Link test', () => {
    expect(wrapperWithPropsLinkButton.find('a').text()).toEqual('Link test')
  })
  it('wrapperWithPropsLinkButton: should render with url https://google.es/', () => {
    expect(wrapperWithPropsLinkButton.find('Link').at(0).props().href).toEqual(
      'https://google.es'
    )
  })
  it('wrapperWithPropsLinkButton: should render with target _blank', () => {
    expect(wrapperWithPropsLinkButton.find('a').prop('target')).toEqual(
      '_blank'
    )
  })

  it('wrapperWithPropsLinkButton: simulate click', () => {
    wrapperWithPropsLinkButton.find('a').simulate('click')
  })

  const componentPropsNotLinkbutton = {
    text: 'Link test',
    isLink: false,
    url: '#',
    isTargetBlank: false
  }
  const wrapperWithPropsNotLinkbutton = mount(
    <ButtonBadge {...componentPropsNotLinkbutton} />
  )
  it('wrapperWithPropsNotLinkbutton: should render', () => {
    expect(wrapperWithPropsNotLinkbutton).toBeDefined()
  })
  it('wrapperWithPropsNotLinkbutton: should render with text', () => {
    expect(wrapperWithPropsNotLinkbutton.find('p').text()).toEqual('Link test')
  })
  it('wrapperWithPropsNotLinkbutton: should not render with a element', () => {
    expect(wrapperWithPropsNotLinkbutton.find('a').length).toEqual(0)
  })
})

import React, { Component } from 'react'

// eslint-disable-next-line no-unused-vars
import theme from '@instructure/ui-themes/lib/canvas'

import View from '@instructure/ui-layout/lib/components/View'
import Heading from '@instructure/ui-elements/lib/components/Heading'
import debounce from '@instructure/ui-utils/lib/debounce'
import CustomPropTypes from '@instructure/ui-utils/lib/react/CustomPropTypes'

import deprecatedComponents from './deprecatedComponents'
import Dialog from './deprecatedPropNameExamples/DeprecatedDialog'
import Example from './Example'
import Mask from './deprecatedPropNameExamples/DeprecatedMask'
import MenuItem from './deprecatedPropNameExamples/DeprecatedMenuItem'
import Modal from './deprecatedPropNameExamples/DeprecatedModal'
import Popover from './deprecatedPropNameExamples/DeprecatedPopover'
import SVGIcon from '.deprecatedPropNameExamples/DeprecatedSVGIcon'
import Tray from './deprecatedPropNameExamples/DeprecatedTray'

class App extends Component {
  static propTypes = {
    foo: CustomPropTypes.Children.oneOf([View, Heading])
  }
  static defaultProps = {
    foo: null
  }

  componentWillMount () {
    debounce(() => {})
  }

  render () {
    return (
      <View
        display="block"
        padding="medium"
      >
        <Dialog />
        <Mask />
        <MenuItem />
        <Modal />
        <Popover />
        <SVGIcon />
        <Tray />

        <Heading
          level="h1"
          as="h1"
          margin="0 0 medium 0"
        >
          Components
        </Heading>
        {deprecatedComponents.map(({ Component, props, origin }) => {
          return (
            <Example
              key={`${Component.displayName}--${origin}`}
              displayName={Component.displayName}
              origin={origin}
            >
              <Component {...(props || {})} />
            </Example>
          )
        })}
      </View>
    )
  }
}

export default App

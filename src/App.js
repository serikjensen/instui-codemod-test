import React, { Component } from 'react'

// eslint-disable-next-line no-unused-vars
import theme from '@instructure/ui-themes/lib/canvas'

import View from '@instructure/ui-layout/lib/components/View'
import Heading from '@instructure/ui-elements/lib/components/Heading'

import deprecatedComponents from './deprecatedComponents'
import Example from './Example'

class App extends Component {
  render () {
    return (
      <View
        display="block"
        padding="medium"
      >
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

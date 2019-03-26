import React from 'react'
import PropTypes from 'prop-types'

import Text from '@instructure/ui-elements/lib/components/Text'
import View from '@instructure/ui-layout/lib/components/View'
import Flex, { FlexItem } from '@instructure/ui-layout/lib/components/Flex'

export default class Example extends React.Component {
  static propTypes = {
    displayName: PropTypes.string.isRequired,
    children: PropTypes.node
  }

  static defaultProps = {
    children: null
  }

  render () {
    return (
      <View
        display="block"
        margin="0 0 large 0"
        shadow="above"
        background="default"
      >
        <View
          display="block"
          borderWidth="0 0 small 0"
          textAlign="start"
          padding="small"
          background="inverse"
        >
          <Flex justifyItems="space-between">
            <FlexItem>
              {this.props.displayName}
            </FlexItem>
            <FlexItem>
              <Text fontStyle="italic">
                {this.props.origin}
              </Text>
            </FlexItem>
          </Flex>
        </View>
        <View
          display="block"
          padding="medium small medium small"
        >
          {/* Make this a positioned parent */}
          <span style={{ position: 'relative' }}>
            {this.props.children}
          </span>
        </View>
      </View>
    )
  }
}

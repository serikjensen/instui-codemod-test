/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react'
import PropTypes from 'prop-types'

import themeable from '@instructure/ui-themeable/lib/themeable'
import { Text } from '@instructure/ui-text'
import { Flex, FlexItem } from '@instructure/ui-flex'
import { View } from '@instructure/ui-view'

@themeable()
export default class Example extends React.Component {
  static propTypes = {
    displayName: PropTypes.string.isRequired,
    children: PropTypes.node
  }

  static defaultProps = {
    children: null
  }

  /* eslint-disable react/prop-types */
  render() {
    return (
      <View
        display="block"
        margin="0 0 large 0"
        shadow="above"
        background="primary"
      >
        <View
          display="block"
          borderWidth="0 0 small 0"
          textAlign="start"
          padding="small"
          background="primary-inverse"
        >
          <Flex justifyItems="space-between">
            <FlexItem>{this.props.displayName}</FlexItem>
            <FlexItem>
              <Text fontStyle="italic">{this.props.origin}</Text>
            </FlexItem>
          </Flex>
        </View>
        <View display="block" padding="medium small medium small">
          {/* Make this a positioned parent */}
          <span style={{ position: 'relative' }}>{this.props.children}</span>
        </View>
      </View>
    )
  }
  /* eslint-enable react/prop-types */
}

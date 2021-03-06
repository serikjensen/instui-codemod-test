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

import React, { Component } from 'react'

import themeable from '@instructure/ui-themeable'

import Heading from '@instructure/ui-elements/lib/components/Heading'
import Text from '@instructure/ui-elements/lib/components/Text'
import View from '@instructure/ui-layout/lib/components/View'
import IconCheckMarkSolid from '@instructure/ui-icons/lib/Solid/IconCheckMark'

import debounce from '@instructure/ui-utils/lib/debounce'
import CustomPropTypes from '@instructure/ui-utils/lib/react/CustomPropTypes'

import deprecatedComponents from '../deprecatedComponents'
import Dialog from '../deprecatedPropNameExamples/DeprecatedDialog'
import Example from '../Example'
import Mask from '../deprecatedPropNameExamples/DeprecatedMask'
import MenuItem from '../deprecatedPropNameExamples/DeprecatedMenuItem'
import Modal from '../deprecatedPropNameExamples/DeprecatedModal'
import Popover from '../deprecatedPropNameExamples/DeprecatedPopover'
// import SVGIcon from '.deprecatedPropNameExamples/DeprecatedSVGIcon'
import Tray from '../deprecatedPropNameExamples/DeprecatedTray'

import Panda from './Panda'

import styles from './styles.css'
import theme from './theme.js'

@themeable(theme, styles)
class Banner extends Component {
  render() {
    return (
      <View
        as="main"
        padding="large medium none"
        minHeight="100%"
        textAlign="center"
      >
        <View
          padding="small"
          display="inline-block"
          borderRadius="large"
          shadow="topmost"
        >
          <IconCheckMarkSolid size="medium" inline={false} />
        </View>
        <div className={styles.banner}>
          <View
            maxWidth="40rem"
            margin="0 auto"
            padding="x-large medium medium"
            display="block"
            background="light"
            borderRadius="large"
            shadow="above"
          >
            <Panda />
            <Heading level="h1" margin="none none small">You&apos;re all ready to go!</Heading>
            <Text size="large">Just edit <Text weight="bold" size="large">App.js</Text> to start building with Instructure UI.</Text>
          </View>
        </div>
        <View
          display="block"
          padding="medium"
        >
          <Dialog />
          <Mask />
          <MenuItem />
          <Modal />
          <Popover />
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
      </View>
    )
  }
}

export default Banner

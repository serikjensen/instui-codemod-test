import React from 'react'
import Alert from '@instructure/ui-core/lib/components/Alert'

export default function () {
  return (
    <div>
      <Alert transitionType="fade" />
      <Alert transitionType="none" />
    </div>
  )
}

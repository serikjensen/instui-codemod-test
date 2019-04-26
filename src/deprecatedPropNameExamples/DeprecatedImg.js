import React from 'react'
import Img from '@instructure/ui-elements/lib/components/Img'

export default function () {
  return (
    <div>
      <Img cover />
      <Img cover={false} />
    </div>
  )
}

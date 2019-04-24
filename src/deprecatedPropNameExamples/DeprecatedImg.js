import React from 'react'
import Image from '@instructure/ui-core/lib/components/Image'

export default function () {
  return (
    <div>
      <Image cover />
      <Image cover={false} />
    </div>
  )
}

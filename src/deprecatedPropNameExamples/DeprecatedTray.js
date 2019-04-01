import React from 'react'
import Tray from '@instructure/ui-core/lib/components/Tray'

export default function () {
	return (
		<Tray
			label="hello"
			closeButtonLabel="Close"
  		closeButtonRef={() => {}}
  		closeButtonVariant="icon"
  		applicationElement={() => {}}
  	/>
	)
}
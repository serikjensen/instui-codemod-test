import React from 'react'
import Modal from '@instructure/ui-core/lib/components/Modal'

export default function () {
	return (
		<Modal 
			label="hello" 
			closeButtonLabel="hello"
  		closeButtonRef={() => {}}
  		applicationElement={() => {}}
  		shouldCloseOnOverlayClick={false}
  	/>

	)
}
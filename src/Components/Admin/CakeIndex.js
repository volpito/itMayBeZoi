import React from 'react'
import { XIcon } from "@heroicons/react/outline";


function CakeIndex(props) {
  const { onClose } = props;
  return (
    <div className='absolute text-4xl bg-red-50 z-50 w-full h-full -m-24'>
      <XIcon onClick={onClose} className="m-6 w-7 h-7" />
      hello index
    </div>
  )
}

export default CakeIndex

import React from 'react'

type Props = {
    children : React.ReactNode
}

function Box({children}: Props) {
  return (
    <div className="md:h-[50vh] md:w-[50vw] h-[60vh] w-[80vw] border-white border-solid border-2 m-auto shadow-lg rounded-2xl shadow-green-200">
        {children}
    </div>
  )
}

export default Box
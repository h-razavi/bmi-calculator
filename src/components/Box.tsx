import React from 'react'

type Props = {
    children : React.ReactNode
}

function Box({children}: Props) {
  return (
    <div className=" md:w-[50vw] pb-8 w-[80vw] overflow-visible border-white border-solid border-2 m-auto shadow-lg rounded-2xl shadow-green-200">
        {children}
    </div>
  )
}

export default Box
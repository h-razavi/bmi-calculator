import React from 'react'

type Props = {
    children : React.ReactNode
}

const Button = ({children}: Props) => {
  return (
        <button className='my-6 bg-[var(--primary-button)] p-3 rounded-lg hover:bg-[var(--primary-link)] font-extrabold text-xl'>{children}</button>
  )
}

export default Button
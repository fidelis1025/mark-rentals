import React from 'react'

const Button = ({className, children}) => {
  return (
    <div>
        <button className={`md:text-base md:font-normal md:bg-[#F4511E] ${className}`} type='button'>
            {children}
        </button>
    </div>
  )
}

export default Button
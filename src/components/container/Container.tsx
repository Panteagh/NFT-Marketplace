import React from 'react'

function Container({children}) {
  return (
    <div className='container mx-auto max-w-11/12'>
      {children}
    </div>
  )
}

export default Container

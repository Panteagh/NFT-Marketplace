import React from 'react'

function Container({children}) {
  return (
    <div className='container mx-auto p-3'>
      {children}
    </div>
  )
}

export default Container

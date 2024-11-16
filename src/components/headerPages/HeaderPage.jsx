import React from 'react'

function HeaderPage({PageHeader , description}) {
  return (
    <div>
      <h1 className="lg:mt-28 md:mt-14 font-bold text-white lg:text-5xl md:text-4xl max-md:text-2xl font-sans leading-tight lg:w-96">
          {PageHeader}
        </h1>

        <p className="mt-6 md:mt-4 text-white lg:text-2xl max-md:text-lg font-sans ">
         {description}
        </p>
    </div>
  )
}

export default HeaderPage

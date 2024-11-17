import React from 'react'

function CategoryCard({img , CategoryName}) {
  return (
    <div className='flex flex-col lg:w-60 lg:h-[316px] max-md:w-36 max-md:h-56 max-sm:w-36 max-sm:h-52 hover:scale-95 duration-700'>
        <img className='w-full h-60' src={img} alt="" />
        <h3 className='h-16 bg-[#3B3B3B] rounded-b-3xl text-white font-bold lg:text-xl md:text-lg max-sm:text-base px-4 py-4'>{CategoryName}</h3>     
    </div>
  )
}

export default CategoryCard

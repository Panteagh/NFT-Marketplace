import React from 'react'

function BorderedButton({icon , label , style , ...res}) {
  return (
    <div>
       <button {...res} className={`${style} bg-transparent border-2 border-purple-500 rounded-3xl h-14 flex justify-center items-center gap-2 font-sans font-semibold text-base text-white button transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400`}>
        {icon}
        {label}   
      </button>
    </div>
  )
}

export default BorderedButton

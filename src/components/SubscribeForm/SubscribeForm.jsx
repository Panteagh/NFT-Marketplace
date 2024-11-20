import React from 'react'
import Input from '../inputs/Input'
import Button from '../Button/Button'

function SubscribeForm() {
  return (
    <div>
       <div className="flex max-sm:flex-col w-full justify-center items-center relative ">
              <Input
                style="lg:w-[179px] md:w-[100px] relative "
                placeholder="Enter your email here"
                
              />
                  <Button
                    style="h-[40px] lg:w-[100px] md:w-[100px] right-0 rounded-2xl text-white absolute top-7 left-52  "
                    label="Subscribe"
                  />
            </div>
    </div>
  )
}

export default SubscribeForm

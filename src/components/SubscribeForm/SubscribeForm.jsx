import React from 'react'

function SubscribeForm() {
  return (
    <div>
       <div className="flex max-sm:flex-col w-full justify-center items-center relative ">
              <Input
                style="w-[179px relative] "
                placeholder="Enter your email here"
                
              />
                  <Button
                    style="h-[40px] w-[100px] right-0 rounded-2xl text-white absolute top-7 left-44  "
                    label="Subscribe"
                  />
            </div>
    </div>
  )
}

export default SubscribeForm

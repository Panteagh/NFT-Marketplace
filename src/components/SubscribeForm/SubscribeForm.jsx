import React from 'react'

function SubscribeForm() {
  return (
    <div>
        <Input
                style="w-[179px relative] "
                placeholder="Enter your email here"
                button={
                  <Button
                    style="h-[40px] w-[100px] right-0 rounded-2xl taxt-white"
                    label="Subscribe"
                    
                  />
                }
              />
    </div>
  )
}

export default SubscribeForm

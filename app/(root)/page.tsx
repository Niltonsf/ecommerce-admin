import { UserButton } from '@clerk/nextjs'
import React from 'react'

const SetupPage = () => {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/" />
    </div>
  )
}

export default SetupPage

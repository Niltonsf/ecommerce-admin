import prismadb from '@/lib/prismadb'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

interface SetupLayoutProps {
  children: ReactNode
}

const SetupLayout = async ({ children }: SetupLayoutProps) => {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const store = await prismadb.store.findFirst({
    where: {
      userId,
    },
  })

  if (store) {
    redirect(`/${store.id}`)
  }

  return <>{children}</>
}

export default SetupLayout

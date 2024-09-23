'use client'

import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { OrderColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'

interface OrderClientProps {
  data: OrderColumn[]
}

const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <React.Fragment>
      <Heading
        title={`Orders (${data?.length})`}
        description="Manage orders for your store"
      />

      <Separator />

      <DataTable columns={columns} data={data} searchKey="label" />
    </React.Fragment>
  )
}

export default OrderClient

'use client'

import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/heading'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { SizeColumn, columns } from './columns'
import { DataTable } from '@/components/ui/data-table'
import ApiList from '@/components/ui/api-list'

interface SizeClientProps {
  data: SizeColumn[]
}

const SizeClient = ({ data }: SizeClientProps) => {
  const router = useRouter()
  const params = useParams()

  return (
    <React.Fragment>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data?.length})`}
          description="Manage sizes for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="h-4 w-4 mr-2" />
          Add new
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="name" columns={columns} data={data} />

      <Heading title="API" description="API calls for Sizes" />

      <Separator />

      <ApiList entityName={'sizes'} entityIdName={'sizeId'} />
    </React.Fragment>
  )
}

export default SizeClient

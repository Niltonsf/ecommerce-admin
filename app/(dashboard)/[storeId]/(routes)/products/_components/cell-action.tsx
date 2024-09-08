'use client'

import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Copy, Edit, MoreHorizontal, Trash } from 'lucide-react'
import toast from 'react-hot-toast'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
import AlertModal from '@/components/modals/alert-modal'
import { ProductColumn } from './columns'

interface CellActionProps {
  row: ProductColumn
}

const CellAction = ({ row }: CellActionProps) => {
  const router = useRouter()
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const onCopy = () => {
    navigator.clipboard.writeText(row.id)
    toast.success('Porduct ID Copied to clipboard!')
  }

  const onUpdate = () => {
    router.push(`/${params.storeId}/products/${row.id}`)
  }

  const onDelete = async () => {
    try {
      setLoading(true)

      await axios.delete(`/api/${params.storeId}/products/${row.id}`)

      router.refresh()

      toast.success('Product deleted.')
    } catch (error) {
      toast.error('Make sure you removed all categories using this product.')
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            <DropdownMenuItem onClick={onCopy}>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onUpdate}>
              <Edit className="mr-2 h-4 w-4" />
              Update
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpen(true)}>
              <Trash className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
    </React.Fragment>
  )
}

export default CellAction

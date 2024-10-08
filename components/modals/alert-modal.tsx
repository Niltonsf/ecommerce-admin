'use client'

import React, { useEffect, useState } from 'react'
import Modal from '../ui/modal'
import { Button } from '../ui/button'

interface AlertModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  loading: boolean
}

const AlertModal = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: AlertModalProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      title="Are you sure?"
      description="This action cannot be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-5 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} onClick={onClose} variant={'outline'}>
          Cancel
        </Button>
        <Button disabled={loading} onClick={onConfirm} variant={'destructive'}>
          Continue
        </Button>
      </div>
    </Modal>
  )
}

export default AlertModal

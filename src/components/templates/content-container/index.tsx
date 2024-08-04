import { cn } from '@/utils/cn'
import React from 'react'

type Props = {
  children: React.ReactNode,
  className?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn('max-w-7xl mx-auto px-4', className)}>
      {children}
    </div>
  )
}

export default Container
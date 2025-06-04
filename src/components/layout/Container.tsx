// src/components/layout/Container.tsx

import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`
        w-full max-w-4xl mx-auto flex flex-col items-center justify-center
        p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  )
}

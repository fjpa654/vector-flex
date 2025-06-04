// src/components/ui/Button.tsx

import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-block font-medium text-lg rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
  }

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className} px-6 py-3`}
    >
      {children}
    </button>
  )
}

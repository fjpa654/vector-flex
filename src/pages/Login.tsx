// src/pages/Login.tsx

import { useState } from 'react'
import Button from '../components/ui/Button'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Sign In to Vector Flex
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 items-center">
          <div className="w-full flex items-center justify-center space-x-4">
            <label
              htmlFor="email"
              className="w-1/3 text-sm font-medium text-gray-700 dark:text-gray-300 text-right"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-2/3 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex items-center justify-center space-x-4">
            <label
              htmlFor="password"
              className="w-1/3 text-sm font-medium text-gray-700 dark:text-gray-300 text-right"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-2/3 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-full flex justify-center">
            <Button type="submit" variant="primary" className="max-w-xs">
              Sign In
            </Button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Don’t have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

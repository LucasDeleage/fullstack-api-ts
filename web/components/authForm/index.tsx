import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { setLocalStorageItem } from '../../utils/localStorage'
import { Alert } from './alert'

type AppProps = {
  title: string
}

export function AuthForm({ title }: AppProps): JSX.Element {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<JSX.Element>()

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = e.target.value
    switch (e.target.id) {
      case 'email-address':
        setEmail(value)
        break

      case 'password':
        setPassword(value)
        break

      default:
        break
    }
  }

  const handleSubmit = async (e): Promise<void> => {
    e.preventDefault()

    const fetchResponse = await axios.post(
      'http://localhost:3000/api/v1/users',
      {
        userName: email,
        password,
      }
    )

    if (fetchResponse.data.success) {
      setLocalStorageItem(fetchResponse.data, 'user')
      router.push('/')
    }

    setError(<Alert type="error" />)
  }

  return (
    <div className="flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-20">
        <div>
          <Image
            className="mx-auto h-12 w-auto"
            height={12}
            width={12}
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>
        <form className="mt-8 space-y-10" onSubmit={handleSubmit} method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            {title.includes('Sign in') && (
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              {title.includes('Signup') ? 'Sign up' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

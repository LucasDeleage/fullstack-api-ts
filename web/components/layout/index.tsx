import { useRouter } from 'next/router'

import { Calendar } from '../../icons/calendar'
import { Dashboard } from '../../icons/dashboard'
import { Folder } from '../../icons/folder'
import { Users } from '../../icons/users'
import { Card } from './card'
import { NavBar } from './navBar'

type AppProps = {
  children: JSX.Element
}

export type Page = {
  name: string
  path: string
  navbar: boolean
  icon?: JSX.Element
}

export const Layout = ({ children }: AppProps): JSX.Element => {
  const router = useRouter()
  const path: string = router.asPath

  const pages: Array<Page> = [
    { name: 'Dashboard', navbar: true, path: '/', icon: <Dashboard /> },
    { name: 'Customers', navbar: true, path: '/customers', icon: <Users /> },
    { name: 'Invoices', navbar: true, path: '/invoices', icon: <Folder /> },
    { name: 'Calendar', navbar: true, path: '/calendar', icon: <Calendar /> },
    { name: 'Login', navbar: false, path: '/login' },
    { name: 'SignUp', navbar: false, path: '/signup' },
  ]

  const handleTitle = (): string | undefined => {
    const actualPage: Page | undefined = pages
      .filter(page => page.path === path)
      .shift()

    const pageName: string | undefined = actualPage?.name

    return pageName
  }

  return (
    <div className="flex flex-col min-h-screen pt-12 px-36">
      <div className="absolute top-0 left-0 h-80 w-screen bg-gradient-to-r from-indigo-600 to-purple-500" />
      <div className="w-full z-10 grid grid-cols-12">
        <div className="col-span-9 space-y-6">
          <NavBar pages={pages} />
          <Card title={handleTitle()}>{children}</Card>
        </div>
      </div>
    </div>
  )
}

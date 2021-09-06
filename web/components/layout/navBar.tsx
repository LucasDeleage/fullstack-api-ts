import { Page } from './index'

type AppProps = {
  pages: Array<Page>
}

export const NavBar = ({ pages }: AppProps): JSX.Element => {
  return (
    <nav className="flex justify-between">
      {pages
        .filter(page => page.navbar)
        .map(
          (page: Page): JSX.Element => (
            <div
              key={page.name}
              className="flex items-center space-x-4 cursor-pointer"
            >
              {page.icon}
              <p className="subpixel-antialiased font-sans text-gray-300">
                {page.name}
              </p>
            </div>
          )
        )}
    </nav>
  )
}

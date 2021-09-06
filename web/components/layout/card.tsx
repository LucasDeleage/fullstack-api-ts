type AppProps = {
  title: string | undefined
  children: JSX.Element
}

export const Card = ({ title, children }: AppProps): JSX.Element => {
  return (
    <div className="flex w-full">
      <div className="flex w-full flex-col rounded-md bg-white shadow">
        <div className="w-full bg-gray-200 rounded-t-md h-12 dark:bg-gray-800 flex items-center pl-4">
          <p>{title || ''}</p>
        </div>
        <div className="w-full dark:bg-gray-800">{children}</div>
      </div>
    </div>
  )
}

type AppProps = {
  type: string
}

export const Alert = ({ type }: AppProps): JSX.Element => {
  const message = (): string | undefined => {
    switch (type) {
      case 'error':
        return 'An unexpected error occured'
      case 'success':
        return 'Relax, everything goes well'

      default:
        break
    }
  }

  return (
    <div
      className={`flex items-center justify-center bg-${
        type === 'success' ? 'green' : 'red'
      }`}
    >
      {message}
    </div>
  )
}

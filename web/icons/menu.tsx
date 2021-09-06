export const Menu = (): JSX.Element => {
  return (
    <div className="rounded-full flex justify-center items-center h-10 w-10 hover:bg-gray-100 cursor-pointer hover:shadow-md hover:bg-opacity-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  )
}

export default function InstagramIcon ({ ...props }) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.25'
      viewBox='0 0 24 24'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z' />
      <path d='M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0M16.5 7.5v.01' />
    </svg>
  )
}

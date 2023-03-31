import { PropsWithChildren } from 'react'
import Link from 'next/link'

interface LinkButtonProps {
  href: string
}

export default function LinkButton({
  href,
  children,
}: PropsWithChildren<LinkButtonProps>) {
  return (
    <Link
      href={href}
      className="px-2 py-1 bg-gray-100 rounded-md text-blue-600"
    >
      {children}
    </Link>
  )
}

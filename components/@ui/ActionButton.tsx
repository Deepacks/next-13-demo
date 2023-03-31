import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react'

export default function ActionButton(
  props: PropsWithChildren<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >,
) {
  const { children, className, ...buttonProps } = props

  return (
    <button
      className={`py-2 px-4 bg-blue-500 text-white font-bold rounded-lg ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  )
}

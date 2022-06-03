import { forwardRef, InputHTMLAttributes } from 'react'

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    ref={ref}
    className="h-10 px-4 border border-sky-300 rounded-lg"
    {...props}
  />
))

Input.displayName = 'Input'

export default Input

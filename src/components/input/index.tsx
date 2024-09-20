import { ComponentProps } from "react"

type InputProps = ComponentProps<'input'>

export function Input ({...props}: InputProps) {
    return (
        <input {...props} className="p-[1.125rem] rounded-md bg-gray900 w-full border-none placeholder:text-gray500 placeholder:text-sm text-sm text-gray400" />
    )
}
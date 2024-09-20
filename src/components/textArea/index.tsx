import { ComponentProps } from "react"

type TextAreaProps = ComponentProps<'textarea'>

export function TextArea ({...props}: TextAreaProps) {
    return (
        <textarea {...props} className="p-[1.125rem] rounded-md h-[10rem] bg-gray900 w-full border-none placeholder:text-gray500 placeholder:text-sm text-sm text-gray400" />
    )
}
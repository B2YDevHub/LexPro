import * as React from "react"

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(({...props}, ref) => {
    return (
        <textarea {...props} ref={ref} className="p-[1.125rem] rounded-md h-[10rem] bg-gray900 w-full border-none placeholder:text-gray500 placeholder:text-sm text-sm text-gray400" />
    )
})
'use client'

import React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({...props}, ref) => {
    return (
        <input {...props} ref={ref} className="p-[1.125rem] rounded-md bg-gray900 w-full border-none placeholder:text-gray500 placeholder:text-sm text-sm text-gray400" />
    )
})
'use client'

import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { submitForm } from './actions'

const intialState = { message: '' }

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} type='submit' className={`${pending ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-700'}  text-white font-bold py-2 px-4 rounded`}>Submit</button>
    )
}

export const ExampleForm = () => {
    const [state, formAction] = useFormState(submitForm, intialState)
    return (
        <form className="flex flex-col gap-4 items-center justify-center" action={formAction}>
            <SubmitButton />
        </form>
    )
}

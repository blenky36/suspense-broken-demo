'use server'

import { sleep } from "@/sleep"
import { redirect } from "next/navigation"

export const submitForm = async (_: any, __: FormData) => {
    await sleep(0.5)
    redirect('/suspense')
}
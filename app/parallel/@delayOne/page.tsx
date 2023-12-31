import { sleep } from '@/sleep'
import React from 'react'
export const dynamic = 'force-dynamic'
const getData = async () => {
    await sleep(5)
    return '5s parallel'
}

const DelayOnePage = async () => {
    const data = await getData()
    return (
        <div>{data}</div>
    )
}

export default DelayOnePage
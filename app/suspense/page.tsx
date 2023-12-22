import { FiveSecondSuspense } from '@/components/FiveSecondSuspense'
import { TenSecondSuspense } from '@/components/TenSecondSuspense'
import { sleep } from '@/sleep'
import React, { Suspense } from 'react'

export const dynamic = 'force-dynamic'
const getData = async () => {
    await sleep(2)
    return 'Page slept for 2s'
}

const SuspensePage = async () => {
    const data = await getData()
    return (
        <>
            <p>{data}</p>
            <Suspense fallback={<p>Loading 5s suspense...</p>}>
                <FiveSecondSuspense />
            </Suspense>
            <Suspense fallback={<p>Loading 10s suspense...</p>}>
                <TenSecondSuspense />
            </Suspense>
        </>
    )
}

export default SuspensePage
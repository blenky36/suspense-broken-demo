import { FiveSecondSuspense } from '@/components/FiveSecondSuspense'
import { sleep } from '@/sleep'
import React, { Suspense } from 'react'

const getData = async () => {
    await sleep(0.5)
    return 'Mock data from pretend api'
}

const SuspensePage = async () => {
    const data = await getData()
    return (
        <>
            <p>{data}</p>
            <Suspense fallback={<p>Loading 5s suspense...</p>}>
                <FiveSecondSuspense />
            </Suspense>
        </>
    )
}

export default SuspensePage
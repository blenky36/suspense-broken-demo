import { FiveSecondSuspense } from '@/components/FiveSecondSuspense'
import { sleep } from '@/sleep'
import React, { Suspense } from 'react'

const getData = async () => {
    await sleep(0.5)
    return 'Response from server component async call'
}

const SuspensePage = async () => {
    const data = await getData()
    return (
        <div className='min-h-[100vh]'>
            <p>{data}</p>
            <Suspense fallback={<p>Loading 5s suspense...</p>}>
                <FiveSecondSuspense />
            </Suspense>
        </div>
    )
}

export default SuspensePage
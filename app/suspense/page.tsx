import { DelaySuspense } from '@/components/DelaySuspense'
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
            <Suspense key={'2.5s'} fallback={<p>Loading 2.5s suspense...</p>}>
                <DelaySuspense seconds={2.5} />
            </Suspense>
            <Suspense key={'5s'} fallback={<p>Loading 5s suspense...</p>}>
                <DelaySuspense seconds={5} />
            </Suspense>
        </div>
    )
}

export default SuspensePage
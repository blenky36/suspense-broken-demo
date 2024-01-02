import { sleep } from '@/sleep'
import React from 'react'

export const dynamic = 'force-dynamic'
const loadData = async (seconds: number) => {
    await sleep(seconds)
    return `Hello from ${seconds}s suspense`
}
 
export const DelaySuspense = async ({ seconds }: { seconds: number }) => {
  const data = await loadData(seconds)
  return (
    <p>{data}</p>
  )
}

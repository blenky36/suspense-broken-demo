import { sleep } from '@/sleep'
import React from 'react'

const loadData = async () => {
    await sleep(10)
    return 'Hello from 10s suspense'
}
 
export const TenSecondSuspense = async () => {
  const data = await loadData()
  return (
    <p>{data}</p>
  )
}

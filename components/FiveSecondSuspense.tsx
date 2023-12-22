import { sleep } from '@/sleep'
import React from 'react'

const loadData = async () => {
    await sleep(5)
    return 'Hello from 5s suspense'
}
 
export const FiveSecondSuspense = async () => {
  const data = await loadData()
  return (
    <p>{data}</p>
  )
}

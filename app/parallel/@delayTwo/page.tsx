import { sleep } from '@/sleep'
import React from 'react'
export const dynamic = 'force-dynamic'
const getData = async () => {
  await sleep(7)
  return '7s parallel'
}

const DelayTwoPage = async () => {
  const data = await getData()
  return (
    <div>{data}</div>
  )
}

export default DelayTwoPage
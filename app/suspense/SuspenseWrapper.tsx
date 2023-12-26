import { FiveSecondSuspense } from '@/components/FiveSecondSuspense'
import React, { Suspense } from 'react'

export const SuspenseWrapper = () => {
  return (
    <Suspense fallback={<p>Loading delay comp with suspense...</p>}>
        <FiveSecondSuspense />
    </Suspense>
  )
}

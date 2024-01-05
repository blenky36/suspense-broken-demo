import React, { ReactNode } from 'react'

const ParallelRoutesLayout = ({ children, delayOne, delayTwo }: { delayOne: ReactNode, delayTwo: ReactNode, children: ReactNode }) => {
  return (
    <>
      {children}
      {delayOne}
      {delayTwo}
    </>
  )
}

export default ParallelRoutesLayout
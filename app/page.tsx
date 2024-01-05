'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ExampleForm } from "@/components/ExampleForm";

export default function Home() {
  const { push } = useRouter()

  const onSubmitSuspense = (e: any) => {
    e.preventDefault()
    push('/suspense')
  }
  const onSubmitParallel = (e: any) => {
    e.preventDefault()
    push('/parallel')
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-24">
      <section className='flex flex-col items-center justify-center w-full'>
        <h1>SUSPENSE</h1>
        <p className="mb-4">This button will submit a form on the server and then navigate to /suspense using next/navigation. Navigation gets blocked for 5s whilst the server actions on /suspense resolve. No fallback UI from the Suspense is shown.</p>
        <ExampleForm />
        <p className="mt-12">This button is a client side navigation using next/link. It behaves as expected showing fallback UI whilst the promises resolve.</p>
        <Link href='/suspense' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded">Link Nav</Link>
        <p className="mt-12">This button is a client side navigation using push from next/navigation useRouter. It behaves as expected showing fallback UI whilst the promises resolve.</p>
        <button onClick={onSubmitSuspense} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded">Client push nav</button>
      </section>
      <section className='flex flex-col items-center justify-center w-full'>
        <h1>PARALLEL ROUTES</h1>
        <p className="mb-4">This button will submit a form on the server and then navigate to /suspense using next/navigation. Navigation gets blocked for 5s whilst the server actions on /suspense resolve. No fallback UI from the Suspense is shown.</p>
        <ExampleForm />
        <p className="mt-12">This button is a client side navigation using next/link. It behaves as expected showing fallback UI whilst the promises resolve.</p>
        <Link href='/parallel' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded">Link Nav</Link>
        <p className="mt-12">This button is a client side navigation using push from next/navigation useRouter. It is blocked on navigation until the first promise is resolved (5s delay).</p>
        <button onClick={onSubmitParallel} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded">Client push nav</button>
      </section>
    </main>
  )
}

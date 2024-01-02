import { ExampleForm } from "@/components/ExampleForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col items-center justify-center w-full' >
        <p>This button will submit a form on the server and then navigate to /suspense using next/navigation. Navigation gets blocked for 5s whilst the server actions on /suspense resolve. No fallback UI from the Suspense is shown.</p>
        <ExampleForm />
        <p className="mt-12">This button is a client side navigation using next/link. It behaves as expected showing fallback UI whilst the promises resolve.</p>
        <Link href='/suspense' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded">Client Nav</Link>
  
      </div>
    </main>
  )
}

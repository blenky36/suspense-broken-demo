import { ExampleForm } from "@/components/ExampleForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col items-center justify-center w-full' >
        <ExampleForm />
        <p className="mt-12">This form will submit on the server and redirect to /suspense after 0.5s</p>
        <p className="mt-4">/suspense is a server component resolving some data after 0.5s</p>
        <p className="mt-4">/suspense also contains another server component wrapped in a React Suspense, which resolves after 5s</p>
        <p className="mt-4">We should be redirected to and see the initial render of /suspense after 1s, including the fallback whilst the 5s server component resolves. </p>
        <p className="mt-4">However, on submission the page waits for the full 5s before redirecting to /suspense with all resolved content rendered and no falback.</p>
      </div>
    </main>
  )
}

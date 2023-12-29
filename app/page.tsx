import { ExampleForm } from "@/components/ExampleForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col items-center justify-center w-full' >
        <ExampleForm />
        <p className="mt-12">This form will submit on the server and redirect to /suspense after 0.5s.</p>
        <p className="mt-4">The suspense page is a server component that resolves its main promise in 0.5s. It also renders a server component wrapped in Suspense that resolves after a 5s delay.</p>
        <p className="mt-4">On form submit we should see the initial suspense page after 1s and the other server component should display the fallback until it resolves after 5s.</p>
        <p className="mt-4">However, on submission the page waits for the full 5s before redirecting to the suspense page with all content rendered (no falback).</p>
      </div>
    </main>
  )
}

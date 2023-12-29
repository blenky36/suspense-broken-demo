### NextJS Server Components Suspense Broken

Server components are blocking on page navigation using redirect in a server component.

- This app contains a form that will submit on the server and redirect to /suspense after 0.5s.
- The suspense page is a server component that resolves its main promise in 0.5s. It also renders a server component wrapped in Suspense that resolves after a 5s delay.
- On form submit we should see the initial suspense page after 1s and the other server component should display the fallback until it resolves after 5s.
- However, on submission the page waits for the full 5s before redirecting to the suspense page with all content rendered (no falback).

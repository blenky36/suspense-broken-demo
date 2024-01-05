### NextJS App Router Streaming Navigation Blocked

- Server components are blocking on page navigation using redirect in a server component. After requesting a redirect, the browser waits until all promises are resolved and shows no fallback UI.

- Parallel routes are blocked on client side navigation when there is no loading.tsx in the route directory. The loading.tsx of the first parallel route isn't registered, but the second one is.
- Parallel routes are not blocked on client side navigation when there is a loading.tsx in the route directory, but it only applies to the first parallel route. Same as above point, the second parallel route loading.tsx works as expected.



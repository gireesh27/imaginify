import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
  "/",              // <-- Add this line to make home page public
]);

export default clerkMiddleware(
  (auth, request) => {
    if (!isPublicRoute(request)) {
      auth().protect();
    }
  }
);

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

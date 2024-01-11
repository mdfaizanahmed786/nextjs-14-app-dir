import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  // "/" will be accessible to all users
  publicRoutes: ["/", "/comments/[id]"]
});
 
export const config = {
  matcher: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)"],
};
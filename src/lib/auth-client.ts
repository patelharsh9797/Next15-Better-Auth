import { createAuthClient } from "better-auth/react";

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  baseURL: "http://localhost:3000",
});

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // the base url of your auth server
});

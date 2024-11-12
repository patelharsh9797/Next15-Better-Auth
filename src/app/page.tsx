import LogoutButton from "@/components/auth/logout";
import SignInButton from "@/components/auth/sign-in";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 text-center items-center sm:items-start">
        <h1 className="text-2xl">Hello Better Auth!!!</h1>
        {!session ? (
          <SignInButton />
        ) : (
          <div>
            <p>User ID: {session.user.id}</p>
            <LogoutButton />
          </div>
        )}
      </main>
    </div>
  );
}

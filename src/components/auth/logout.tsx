"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() =>
          signOut({
            fetchOptions: {
              onSuccess: () => router.push("/"),
            },
          })
        }
      >
        Sign out
      </Button>
    </>
  );
};
export default LogoutButton;

"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn, useSession } from "@/lib/auth-client";

const SignInButton = () => {
  const { isPending } = useSession();
  const onClick = async () => {
    await signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  return (
    <>
      <Button onClick={onClick}>
        {isPending ? "Signing in....." : "Sign In w/ GitHub"}
      </Button>
    </>
  );
};
export default SignInButton;

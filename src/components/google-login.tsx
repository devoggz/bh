"use client";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";
import { login } from "../../actions/auth";

export default function GoogleLogin() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 mt-2">
      <p>or</p>
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => login("google")}
      >
        {" "}
        <Image
          src="/images/googleicon.svg"
          alt="Google"
          width={24}
          height={24}
          className="mr-4 text-slate-400"
        />
        Continue with Google
      </Button>
    </div>
  );
}

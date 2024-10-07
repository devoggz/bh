"use client";

import clsx from "clsx";
import SignInForm from "./sign-in-form";
import { Image, Link } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import UserButton from "../UserButton";
import RegisterForm from "./register-form";

export default function Register({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <div className={clsx("container align-middle px-4 mb-16", className)}>
      <div className="m-auto w-full max-w-[496px] rounded-lg border border-gray-200 bg-white p-6 pt-9 sm:p-12">
        <div className="flex items-center justify-center">
          <Image
            width={150}
            height={120}
            src="/images/logomark.png"
            alt="logo"
          />
        </div>
        <div className="mt-6 mb-6 ">
          <h2
            className=" text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text text-2xl font-bold titlecase leading-[48px] "
          >
            Create Account
          </h2>
        </div>
        <RegisterForm />
        <div className="mt-2 mb-2">
          <p className="text-center text-small">
            Already have an account?{" "}
            <Link
              className="cursor-pointer"
              size="sm"
              onPress={() => router.replace("/login")}
            >
              Login
            </Link>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

"use client";

import clsx from "clsx";
import SignUpForm from "./sign-up-form";
import NameForm from "./name-form";
import { Image, Link } from "@nextui-org/react";
import LoginForm from "./login-form";
import { useRouter } from "next/navigation";
import GoogleLogin from "../google-login";
import { Separator } from "../ui/separator";

export default function Login({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <div className={clsx("container mb-12  px-2 lg:mb-16", className)}>
      <div className="flex items-center justify-center mt-6">
        <Image src="/images/welcome.png" alt="welcome" height={240} />
      </div>
      <div className="m-auto w-full max-w-[430px] rounded-lg border border-gray-200 bg-white p-6 pt-9 sm:p-12">
        <div className="mb-6">
          <h2
            className=" text-transparent rounded-lg bg-clip-text bg-gradient-to-r    
            from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
            animate-text text-2xl font-bold titlecase leading-[48px] "
          >
            Login
          </h2>
        </div>
        <LoginForm />
        <div className=" mb-2">
          <p className="text-center text-small">
            Dont have an account?{" "}
            <Link
              className="cursor-pointer font-bold text-emerald-500"
              size="sm"
              onPress={() => router.replace("/register")}
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

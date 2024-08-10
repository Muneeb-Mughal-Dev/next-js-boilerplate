"use client";
import Link from "next/link";
import { forwardRef } from "react";
import { APP_TITLE } from "@/constants/variables";
// import { Image } from "@/components/ui";

export const Logo = forwardRef(() => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-0.5 lg:gap-2"
    >
      {/* <Image
        src={logoIcon}
        alt="Awal-solution-logo-icon"
        className="w-8 lg:w-10"
      /> */}
      <h1 className="capitalize text-xl font-syne font-semibold">
        {APP_TITLE}
      </h1>
    </Link>
  );
});

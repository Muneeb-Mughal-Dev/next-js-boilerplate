"use client";
import { Suspense } from "react";
import { useTheme } from "@/hooks";
import { Loader } from "@/components/ui";

import "@/assets/styles/index.css";

export const Theme = ({ children }: Children) => {
  const { theme } = useTheme();
  return (
    <body className={theme}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </body>
  );
};

"use client";
import { Suspense } from "react";
import { useTheme } from "@/hooks";
import { Loader } from "@/components/ui";

export const AppBaseLayout = ({ children }: Children) => {
  const { theme } = useTheme();
  return (
    <body className={theme}>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </body>
  );
};

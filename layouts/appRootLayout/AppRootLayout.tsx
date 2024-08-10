import { AppNavbar } from "@/components/AppNavbar";

export const AppRootLayout = ({ children }: Children) => {
  return (
    <>
      <AppNavbar />
      <main>{children}</main>
      <footer>App footer</footer>
    </>
  );
};

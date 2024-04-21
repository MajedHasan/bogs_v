import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "HelperPlace",
  description: "Domestic Helpers & Maids in Hong Kong & More",
};

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

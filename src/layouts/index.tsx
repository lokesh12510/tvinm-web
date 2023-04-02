import React from "react";
import Header from "./header";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

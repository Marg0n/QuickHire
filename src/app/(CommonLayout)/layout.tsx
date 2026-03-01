
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="">
      
      <main className="">{children}</main>
      
    </section>
  );
};

export default CommonLayout;

import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="font-clash overflow-x-hidden">
      
      <main className="">{children}</main>
      
    </section>
  );
};

export default CommonLayout;
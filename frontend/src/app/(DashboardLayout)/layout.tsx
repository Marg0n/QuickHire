import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <main>{children}</main>
    </section>
  );
};

export default DashboardLayout;

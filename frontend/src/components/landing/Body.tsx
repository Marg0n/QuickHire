import Category from "./category/Category";
import Company from "./company/Company";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Latest from "./latest/Latest";
import CTA from "./newsletter/CTA";

const Body = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Company/>
      <Category/>
      <CTA />
      <Featured/>
      <Latest/>
    </div>
  );
};

export default Body;

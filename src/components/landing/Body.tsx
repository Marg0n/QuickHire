import Category from "./category/Category";
import Company from "./company/Company";
import Hero from "./hero/Hero";

const Body = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Company/>
      <Category/>
    </div>
  );
};

export default Body;

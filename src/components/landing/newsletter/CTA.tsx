import rect from "@/assets/images/Rectangle.png";
import Button from "@/components/ui/Button";
import dashboard from "@/assets/images/Dashboard.png"
import Image from "next/image";

const CTA = () => {
  return (
    <div
      className="relative"
    >
      {/* Background  */}
     <div className="xl:py-24 py-14 lg:px-22 px-0 xl:px-20 bg-transparent  min-h-[50vh] xl:min-h-94  clip-cta lg:mx-[90px] xl:mx-[120px]">

        {/* texts */}
        <div className="flex  flex-col justify-center items-start space-y-4 w-80 xl:w-94 xl:pl-8 pt-8 ">
          <h2 className="text-5xl text-wrap text-white font-bold">Start posting jobs today</h2>
          <p className="text-white">Start posting jobs for only $10.</p>
          <Button variant={2} className="bg-white font-semibold w-60">
            Sign Up For Free
          </Button>
        </div>

     </div>
        {/* dashboard pic */}
        <div className="absolute right-36 xl:right-46 bottom-0 z-10 w-[350px] xl:w-[500px]">
          <Image src={dashboard} alt="background" height={550}/>
        </div>

    </div>
  );
};

export default CTA;

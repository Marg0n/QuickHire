import rect from "@/assets/images/Rectangle.png";
import Button from "@/components/ui/Button";
import dashboard from "@/assets/images/Dashboard.png"
import Image from "next/image";

const CTA = () => {
  return (
    <div
      className="xl:py-24 py-14 lg:px-22 px-6 xl:px-60 bg-transparent w-full min-h-[50vh] xl:min-h-94 relative"
      style={{
        backgroundImage: `url(${rect.src})`,
        backgroundPosition: "center",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll",
      }}
    >
      {/* texts */}
      <div className="flex  flex-col justify-center items-star space-y-4 w-80">
        <h2 className="text-5xl text-wrap text-white font-bold">Start posting jobs today</h2>
        <p className="text-white">Start posting jobs for only $10.</p>
        <Button variant={2} className="bg-white font-semibold w-60">
          Sign Up For Free
        </Button>
      </div>

      {/* dashboard pic */}
      <div className="absolute right-16 xl:right-56 bottom-0">
        <Image src={dashboard} alt="background" width={500} height={550}/>
      </div>
    </div>
  );
};

export default CTA;

import pic from "@/assets/images/Pic.png";
import pattern from "@/assets/images/Pattern.png";
import Image from "next/image";

const Right = () => {
  return (
    <div
      className="hidden md:flex flex-col justify-center bg-cover bg-center min-h-full md:w-1/2 relative" // Flex for desktop, hidden for mobile
    style={{
        backgroundImage: `url(${pattern.src})`, 
        backgroundPosition: "left", 
        backgroundSize: "contain", 
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll", 
      }}
    >
      <div className="relative w-full h-full flex justify-center items-center absolute">
        <Image src={pic} width={500} height={500} alt="model picture" />
      </div>
    </div>
  );
};

export default Right;

import vec from "@/assets/images/Vec1.png";
import Image from "next/image";
import { IoLocationOutline, IoSearch } from "react-icons/io5";
import Button from "../../ui/Button";
import Left from "./Left";

const Hero = () => {
  return (
    <div className="min-h-[60vh] grid grid-col-1 md:grid-col-2">
      <Left/>
    </div>
  );
};

export default Hero;

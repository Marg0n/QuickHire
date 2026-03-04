"use client";

import Link from "next/link";
import { FaArrowRight, FaDropbox } from "react-icons/fa";
import FeaturedBox from "./FeaturedBox";

//? Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//? Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

//? import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

//? cards
const cards = Array(8).fill({
  icon: <FaDropbox />,
  type: "Full Time",
  title: "Design",
  platform: "Dropbox",
  address: "San Fransisco, US",
  tags: ["Design", "Business"],
  description:
    "Dropbox is looking for Brand Designer to help the team to create a new brand identity for the company.",
});

const Featured = () => {
  return (
    <div className="xl:py-24 py-14 lg:px-22 px-6 xl:px-32 bg-transparent w-full h-full">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          Featured <span className="text-[#26A4FF]">jobs</span>
        </h1>

        <Link
          href={"/showall"}
          className="hidden md:block md:flex justify-between items-center gap-2 text-blue-700 text-semibold"
        >
          Show all jobs
          <FaArrowRight />
        </Link>
      </div>

      {/* content */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-6">       
          {[...Array(8)].map((_, i) => (
            <div key={i} >
              <FeaturedBox
                icon={<FaDropbox />}
                type="Full Time"
                title="Design"
                platform="Dropbox"
                address="San Fransisco, US"
                tags={["Design", "Business"]}
                description="Dropbox is looking for Brand Designer to help the team to create a new brand identity for the company."
              />
            </div>
          ))}
      </div>

      <div className="my-12 cursor-grab lg:hidden">
        <Swiper
          slidesPerView={1} // 1 slide on mobile
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          // navigation
          // pagination={{ clickable: false }}
          // scrollbar={{ draggable: false }}
          modules={[Keyboard, Navigation, Pagination, Scrollbar]}
        >
          {cards.map((item, index) => (
            <SwiperSlide key={index}>
              <FeaturedBox {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Link
        href={"/showall"}
        className=" md:hidden flex justify-start items-center gap-2 text-blue-700 font-semibold"
      >
        Show all jobs
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Featured;

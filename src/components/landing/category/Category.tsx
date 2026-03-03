import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Category = () => {
    return (
        <div className="xl:py-24 py-14 lg:px-22 px-6 xl:px-32 bg-transparent w-full h-full">
            {/* title */}
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-bold'>
                    Explore by <span className="text-[#26A4FF]">category</span>
                </h1>

                <Link href={'/showall'} className="flex justify-between items-center gap-2 text-blue-700 text-bold">
                    Show all jobs
                    <FaArrowRight />
                </Link>
            </div>

            {/* content */}
            <div>
                
            </div>
        </div>
    );
};

export default Category;
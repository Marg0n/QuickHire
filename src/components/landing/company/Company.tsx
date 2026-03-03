import Image from 'next/image';
import vodafone from '@/assets/images/vodafone.png';
import tesla from '@/assets/images/tesla.png';
import talkit from '@/assets/images/talkit.png';
import intel from '@/assets/images/intel.png';
import amd from '@/assets/images/amd.png';

const Company = () => {
    return (
        <div className='xl:py-24 py-14 lg:px-22 px-6 xl:px-32 bg-transparent w-full h-full"'>
            <p className="text-gray-500 mb-8">Companies we helped grow</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-between items-center">
                <Image src={vodafone} alt="vodafone"/>
                <Image src={intel} alt="intel"/>
                <Image src={tesla} alt="tesla"/>
                <Image src={amd} alt="amd"/>
                <Image src={talkit} alt="talkit"/>
            </div>
        </div>
    );
};

export default Company;
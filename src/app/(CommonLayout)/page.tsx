import Body from "@/components/landing/Body";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export const metadata = {
    title: "Quick Hire",
    description: "Find your jobs here",
}

const LandingPage = () => {
    return (
        <div className="z-50">
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default LandingPage;
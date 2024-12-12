import BookingBenefits from "@/components/home/BookingBenefits";
import DownloadAppCTA from "@/components/home/DownloadAppCTA";
import Footer from "@/components/home/Footer";
import HomeBanner from "@/components/home/HomeBanner";
import ReachOutCTA from "@/components/home/ReachOutCTA";
import ServicesWeOffer from "@/components/home/ServicesWeOffer";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="grid gap-[8rem]">
      <HomeBanner />
      <ServicesWeOffer />
      <DownloadAppCTA />
      <WhyChooseUs />
      <BookingBenefits />
      <Testimonials />
      <ReachOutCTA />
      <Footer />
    </div>
  );
}

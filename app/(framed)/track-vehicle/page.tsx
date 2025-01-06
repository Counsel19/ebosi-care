import BookingBenefits from "@/components/home/BookingBenefits";
import DownloadAppCTA from "@/components/home/DownloadAppCTA";
import HomeBanner from "@/components/home/HomeBanner";
import ReachOutCTA from "@/components/home/ReachOutCTA";
import ServicesWeOffer from "@/components/home/ServicesWeOffer";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function TrackVehicle() {
  return (
    <div className="grid gap-[8rem]">
      <HomeBanner trackVehicle />
      <ServicesWeOffer />
      <DownloadAppCTA />
      <WhyChooseUs />
      <BookingBenefits />
      <Testimonials />
      <ReachOutCTA />

    </div>
  );
}

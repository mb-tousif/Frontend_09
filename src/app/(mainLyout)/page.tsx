import HeroBanner from "@/components/ui/HeroBanner";
import ServiceCard from "@/components/ui/ServiceCard";
import ServiceSection from "@/components/ui/ServiceSection";
import Subscribe from "@/components/ui/Subscribe";
import { services } from "@/constants/service";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <ServiceSection />
      {/* <ServiceCard service={services} /> */}
      <Subscribe />
    </div>
  );
}

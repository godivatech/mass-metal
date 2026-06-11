import { Hero } from "@/components/home/Hero";
import { Clients } from "@/components/home/Clients";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AboutPreview } from "@/components/home/AboutPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <AboutPreview />
      <ProductsPreview />
      <WhyChooseUs />
    </>
  );
}

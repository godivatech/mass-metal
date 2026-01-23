import { Hero } from "@/components/home/Hero";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AboutPreview } from "@/components/home/AboutPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ProductsPreview />
      <WhyChooseUs />
    </>
  );
}

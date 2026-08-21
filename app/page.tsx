import { Cta } from "@/app/components/landing/cta";
import { Features } from "@/app/components/landing/features";
import { Footer } from "@/app/components/landing/footer";
import { Hero } from "@/app/components/landing/hero";
import { HowItWorks } from "@/app/components/landing/how-it-works";
import { Pricing } from "@/app/components/landing/pricing";
import { RegistryShowcase } from "@/app/components/landing/registry-showcase";
import { Stats } from "@/app/components/landing/stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <Stats />
        <Features />
        <RegistryShowcase />
        <HowItWorks />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

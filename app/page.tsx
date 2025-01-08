'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionCard from "@/components/SectionCard";
import SectionMarquee from "@/components/SectionMarquee";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <SectionCard />
        <div className="flex justify-center mb-6">
        <Link href="#" >
          <Button className="default text-sm" size="default2">
            Sign up to continue
          </Button>
        </Link>
      

        </div>
        <div className=" mb-8">
          <SectionMarquee/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>

  );
}

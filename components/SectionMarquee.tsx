import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  { id: 1, name: "Mobile", img: "/img/image2.webp" },
  { id: 2, name: "Web design", img: "/img/image3.webp" },
  { id: 3, name: "Print", img: "/img/image4.webp" },
];

const firstRow = reviews;


const ReviewCard = ({ id, img, name }: { id: number; img: string; name: string }) => {
  return (
    <figure className={cn("relative w-64 cursor-pointer overflow-hidden", "")}>
      <blockquote className="mt-2" key={id}>
        <div className="relative">
        <Image className="w-full rounded-xl opacity-50" src={img} alt={name} width={500} height={500} />
        <div className="absolute inset-0 right-2 top-2 opacity-75 ">
         <Image className="w-full rounded-xl " src={img} alt={name} width={500} height={500} /> 
        </div>
        <div className="absolute inset-0 right-3 top-3 ">
         <Image className="w-full rounded-xl " src={img} alt={name} width={500} height={500} /> 
        </div>

        </div>
      </blockquote>
      <div className="mt-4 text-sm font-medium">{name}</div>
    </figure>
  );
};

export default function SectionMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => {
          return <ReviewCard key={review.id} {...review} />;
        })}
      </Marquee>
    </div>
  );
}
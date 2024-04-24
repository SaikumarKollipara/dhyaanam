import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { COURSES } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 pb-10">
      <Header />
      <section className="flex flex-col md:flex-row justify-between gap-4 h-screen md:h-[calc(100vh-6rem)] w-full">
        <div className="bg-app-secondary flex-1 flex flex-col justify-center rounded-app-md text-app-black">
          <p className="p-8 md:p-20 text-2xl md:text-4xl md:leading-normal font-bold">
            <div className="mb-4 text-xl font-extrabold text-app-accent">
              <span className="font-bold">Meditate. Elevate. Radiate.</span> |
              All for free
            </div>
            <span>
              Discover the transformative journey of meditation, where each
              breath leads you closer to a state of profound inner balance and
              well-being.
            </span>
          </p>
        </div>
        <div className="flex-1 rounded-app-md overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src="/meditating-person.jpg"
            width={1000}
            height={1000}
            alt="Meditating person"
          />
        </div>
      </section>
      <Heading>What are we teaching</Heading>
      <section className="grid auto-rows-[310px] grid-cols-3 gap-4">
        {COURSES.map((course, idx) => (
          <CourseCard
            key={course.id}
            className={idx === 0 ? "row-span-2" : ""}
            imageUrl={course.image}
            title={course.title}
          />
        ))}
      </section>
    </main>
  );
}

function Heading({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1
      className={cn(
        "mb-20 mt-44 text-app-black text-6xl font-black text-center",
        className
      )}
    >
      {children}
    </h1>
  );
}

function CourseCard({
  className,
  imageUrl,
  title,
}: {
  className?: string;
  imageUrl: string;
  title: string;
}) {
  return (
    <div
      className={cn(
        "relative bg-white rounded-app-md overflow-hidden",
        className
      )}
    >
      <Image
        className="w-full h-full object-cover"
        src={imageUrl}
        width={2000}
        height={2000}
        alt="Course"
      />
      <div className="absolute left-6 bottom-8">
        <Button
          className="rounded-full bg-white text-black mb-3 text-xs font-semibold hover:bg-white/90 hover:text-black"
          size="sm"
        >
          Start Program&nbsp;
          <ArrowUpRight className="text-black" size={16} strokeWidth={2} />
        </Button>
        <h1 className="text-2xl text-white">{title}</h1>
      </div>
    </div>
  );
}

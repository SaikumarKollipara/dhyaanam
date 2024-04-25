import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { COURSES } from "@/constants/landing";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 pb-10">
      <Header />
      <section className="flex flex-col md:flex-row justify-between gap-4 h-screen md:h-[calc(100vh-6rem)] w-full">
        <div className="bg-app-secondary flex-1 flex flex-col justify-center rounded-app-md text-app-black">
          <div className="p-8 md:p-20 text-2xl md:text-4xl md:leading-normal font-bold">
            <div className="mb-2 text-xl font-bold text-app-accent">
              Meditate. Elevate. Radiate.
            </div>
            <h1>
              Discover the power of meditation and change your life one breath
              at a time.
            </h1>
            <p className="text-base font-normal mt-4 leading-relaxed">
              Welcome to our online sanctuary, where meditation is freely
              shared, hearts are opened, and lives are transformed.
            </p>
          </div>
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
      <Heading>What is our mission</Heading>
      <section className="min-h-screen grid grid-cols-3 grid-rows-2 gap-4">
        <div className="relative bg-app-secondary pink-dotted-background col-span-3 rounded-app-md p-10 px-20 overflow-hidden">
          <h1 className="text-4xl leading-snug font-bold text-app-black">
            Reach meditation to as many as possible.
          </h1>
          <p className="max-w-md mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            dolorem quasi quia voluptatibus maxime nostrum ipsam voluptatum
            labore beatae suscipit!
          </p>
          <Image
            className="absolute right-20 -bottom-6 h-full w-auto object-cover"
            src="/holding-hands.png"
            width={1000}
            height={1000}
            alt="Holding hands"
          />
        </div>
        <div className="bg-app-secondary-c yellow-dotted-background rounded-app-md p-10">
          <h1 className="text-4xl leading-snug font-bold text-app-black">
            Transform lives
          </h1>
          <p className="max-w-sm mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            dolorem quasi quia voluptatibus maxime nostrum ipsam voluptatum
            labore beatae suscipit!
          </p>
        </div>
        <div className="bg-app-secondary-b blue-dotted-background rounded-app-md p-10">
          <h1 className="text-4xl leading-snug font-bold text-app-black">
            Transform lives
          </h1>
          <p className="max-w-sm mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            dolorem quasi quia voluptatibus maxime nostrum ipsam voluptatum
            labore beatae suscipit!
          </p>
        </div>
        <div className="bg-app-secondary-c yellow-dotted-background rounded-app-md p-10">
          <h1 className="text-4xl leading-snug font-bold text-app-black">
            Transform lives
          </h1>
          <p className="max-w-sm mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            dolorem quasi quia voluptatibus maxime nostrum ipsam voluptatum
            labore beatae suscipit!
          </p>
        </div>
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
        "mb-24 mt-36 text-app-black text-6xl font-black text-center",
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

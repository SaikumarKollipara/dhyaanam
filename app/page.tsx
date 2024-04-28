import ContactForm from "@/components/contact-form";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { COURSES, MISSIONS } from "@/constants/landing";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-4 pb-8">
      <Header />
      <section className="h-[calc(100vh-5rem)] lg:max-h-[800px] w-full flex flex-col md:flex-row justify-between gap-4">
        <div className="bg-app-secondary flex-1 flex flex-col justify-center rounded-app-md text-app-black px-8 py-12 lg:p-20">
          <p className="text-base md:text-lg font-bold text-app-accent mb-2">
            Meditate. Elevate. Radiate.
          </p>
          <h1 className="text-2xl md:text-4xl font-bold md:leading-snug">
            Discover the power of meditation and change your life one breath at
            a time.
          </h1>
          <p className="font-normal leading-normal md:leading-relaxed mt-4">
            Welcome to our online sanctuary, where meditation is freely shared,
            hearts are opened, and lives are transformed.
          </p>
        </div>
        <div className="min-h-[50%] min-w-[50%] flex-1 rounded-app-md overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src="/meditating-person.jpg"
            width={1000}
            height={1000}
            alt="Meditating person"
          />
        </div>
      </section>
      <Heading id="courses">What are we teaching</Heading>
      <section className="grid auto-rows-[310px] grid-cols-1 lg:grid-cols-3 gap-4">
        {COURSES.map((course, idx) => (
          <CourseCard
            key={course.id}
            className={idx === 0 ? "row-span-2" : ""}
            imageUrl={course.image}
            title={course.title}
          />
        ))}
      </section>
      <Heading id="mission">What is our mission</Heading>
      <section className="min-h-[800px] grid grid-cols-1 auto-rows-min md:grid-cols-3 md:grid-rows-2 gap-4">
        {MISSIONS.map((mission, idx) => (
          <MissionCard
            key={mission.id}
            title={mission.title}
            description={mission.description}
            image={mission.image}
            className={cn(mission.className, {
              "md:col-span-3": idx === 0,
            })}
          />
        ))}
      </section>
      <Heading id="contact-us">Got something to say</Heading>
      <ContactForm />
    </main>
  );
}

function Heading({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1
      id={id}
      className={cn(
        "text-app-black text-5xl md:text-6xl font-black leading-snug text-center py-20 mt-24",
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

function MissionCard({
  title,
  description,
  image,
  className,
}: {
  className?: string;
  image?: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className={cn("relative rounded-app-md p-10 overflow-hidden", className)}
    >
      <h1 className="text-2xl md:text-4xl leading-snug font-bold text-app-black">
        {title}
      </h1>
      <p className="max-w-md mt-4 leading-relaxed">{description}</p>
      {image && (
        <Image
          className="hidden md:block absolute right-20 -bottom-10 h-auto w-80 object-cover"
          src={image}
          width={1000}
          height={1000}
          alt={title}
        />
      )}
    </div>
  );
}

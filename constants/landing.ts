export const COURSES: {
  id: number;
  title: string;
  image: string;
}[] = [
  {
    id: 1,
    title: "Meditation for Beginners",
    image: "/course1.jpg",
  },
  {
    id: 2,
    title: "Guided Meditation",
    image: "/course2.jpg",
  },
  {
    id: 3,
    title: "Kriya Yoga",
    image: "/course3.jpg",
  },
  {
    id: 4,
    title: "Mindfulness",
    image: "/course4.jpg",
  },
  {
    id: 5,
    title: "Progressive Relaxation",
    image: "/course5.jpg",
  },
];

export const MISSIONS: {
  id: number;
  title: string;
  description: string;
  image?: string;
  className?: string;
}[] = [
  {
    id: 1,
    title: "Create awareness to as many as possible.",
    description:
      "Spreading awareness far and wide, our mission is to enlighten individuals about the transformative benefits of meditation, fostering a deeper understanding of its profound impact on mental, emotional, and physical well-being.",
    className: "bg-app-secondary pink-dotted-background",
    image: "/holding-hands.png",
  },
  {
    id: 2,
    title: "Transform lives through meditation",
    description:
      "Through the practice of meditation, we empower individuals to embark on a journey of self-discovery and inner transformation, leading to profound shifts in mindset, behavior, and overall quality of life.",
    className: "bg-app-secondary-c yellow-dotted-background",
  },
  {
    id: 3,
    title: "Create global community of mindful citizens",
    description:
      "Our vision extends beyond borders as we strive to unite individuals from all walks of life, forming a global community of mindful citizens dedicated to cultivating compassion, empathy, and understanding through the practice of mindfulness and meditation.",
    className: "bg-app-secondary-b blue-dotted-background",
  },
  {
    id: 4,
    title: "Create global peace",
    description:
      " By fostering inner peace within individuals, we believe in creating a ripple effect that extends to communities and beyond, ultimately contributing to the realization of a more peaceful and harmonious world, where understanding, tolerance, and cooperation prevail.",
    className: "bg-app-secondary-c yellow-dotted-background",
  },
];

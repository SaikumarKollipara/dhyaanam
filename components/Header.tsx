export default function Header() {
  return (
    <nav className="sticky top-0 h-20 flex gap-20 items-center bg-app-primary/80 backdrop-blur-lg z-50">
      <p className="font-black text-xl">Dhyaanam.</p>
      <div className="hidden md:flex gap-8 items-center">
        <p className="cursor-pointer hover:underline font-medium">
          Meditations
        </p>
        <p className="cursor-pointer hover:underline font-medium">Mission</p>
        <p className="cursor-pointer hover:underline font-medium">Purpose</p>
        <p className="cursor-pointer hover:underline font-medium">Articles</p>
        <p className="cursor-pointer hover:underline font-medium">Aboutus</p>
      </div>
    </nav>
  );
}

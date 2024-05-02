import Image from "next/image";
import { ModeToggle } from "./(home)/components/modeToggle";
import Navbar from "./(home)/components/Navbar";
import Comments from "./(home)/components/Comments";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="flex justify-end p-4">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto ">
        <Comments />
      </div>
    </main>
  );
}

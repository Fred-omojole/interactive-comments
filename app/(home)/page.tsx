import Image from "next/image";
import { ModeToggle } from "./components/modeToggle";
import Navbar from "./components/Navbar";

import App from "./components/App";

export default function Home() {
  return (
    <main className="h-screen p-5">
      <div className="flex justify-end p-4">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto ">
        <App />
      </div>
    </main>
  );
}

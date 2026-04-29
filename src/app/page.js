import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StkExplorer from "@/components/StkExplorer";
import SysLogs from "@/components/SysLogs";
import Profile from "@/components/Profile";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-x-hidden">
        <Hero />
        <StkExplorer />
        <SysLogs />
        <Profile />
      </main>
      <Footer />
    </>
  );
}

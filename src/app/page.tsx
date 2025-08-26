import Hero from "@/components/Hero";
import About from "@/components/About";
import Games from "@/components/Games";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Games />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}

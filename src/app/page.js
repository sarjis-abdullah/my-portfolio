import About from "@/components/About";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 p-24 bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <section className="grid grid-cols-40-60 gap-4">
        <Introduction />
        <section className="pt-24 xl:py-24">
          <About />
          <Skills />
          <Experiences />
          <Projects />
        </section>
      </section>
    </main>
  );
}

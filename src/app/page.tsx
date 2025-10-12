import Info from "@/components/Section1/Info";
import Career from "@/components/Section2/Career";
import Projects from "@/components/Section3/Projects";
import Contact from "@/components/Section4/Contact";

export default function Home() {
  return(
    <main className="flex flex-col flex-1">

      <Info />
      <Career />
      <Projects />
      <Contact />
    </main>
  )
}

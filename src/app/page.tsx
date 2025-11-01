import Header from "@/components/Header/Header";
import About from "@/components/Section1/About";
import Career from "@/components/Section2/Career";
import Projects from "@/components/Section3/Projects";
import Contact from "@/components/Section4/Contact";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen ">
      <Header />


      {/* 본문 (남은 공간 전부 차지) */}
      <div className="flex flex-1 overflow-y-auto ">
        {/* Sidebar */}
        <Sidebar />

        <main className="flex flex-col flex-1 overflow-y-auto scroll-smooth">
          <About />
          <Career />
          <Projects />
          <Contact />
        </main>
      </div>


    </div>
  )
}

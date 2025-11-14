'use client'
import Header from "@/components/Header/Header";
import About from "@/components/Section1/About";
import Career from "@/components/Section2/Career";
import { PopupDetail } from "@/components/Section3/popup";
import Projects from "@/components/Section3/Projects";
import Contact from "@/components/Section4/Contact";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [currentSection, setCurrentSection] = useState<string>("About");
  const [isOpenDetail, setIsOpenDetail] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // ✅ 각 섹션 ref 개별 선언
  const mainRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // 배열로 관리 (순서 중요)
  const sectionRefs = [
    { name: "About", ref: aboutRef },
    { name: "Career", ref: careerRef },
    { name: "Projects", ref: projectsRef },
    { name: "Contact", ref: contactRef },
  ];

  useEffect(() => {
    const container = mainRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollCenter = container.scrollTop + container.clientHeight / 2;
      let activeSection = "About";

      sectionRefs.forEach(({ name, ref }) => {
        const el = ref.current;
        if (!el) return;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollCenter >= top && scrollCenter < bottom) {
          activeSection = name;
        }
      });

      setCurrentSection(activeSection);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);



  // 팝업 열기
  const openPopupClick = (projectDetail: any) => {
    setSelectedProject(projectDetail);
    setIsOpenDetail(true);
  };

  // 팝업 닫기
  const closePopupClick = () => {
    setIsOpenDetail(false);
    setSelectedProject(null);
  };


  return (
    <div className="flex flex-col h-screen relative">
      <Header />


      {/* 본문 (남은 공간 전부 차지) */}
      <div className="flex flex-1 overflow-y-auto gap-2">
        {/* Sidebar */}
        <aside className="flex-1 flex items-center hidden md:block">
          <Sidebar currentSection={currentSection} />
        </aside>

        <main className="flex flex-col flex-5 overflow-y-auto scroll-smooth" ref={mainRef}>
          <About ref={aboutRef} />
          <Career ref={careerRef} />
          <Projects popupClick={openPopupClick} ref={projectsRef} />
          <Contact ref={contactRef} />
        </main>
      </div>

      { /** detail popup */}
      {isOpenDetail && <PopupDetail onClickOutside={closePopupClick} detailData={selectedProject} />}

    </div>
  )
}

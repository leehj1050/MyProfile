import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";



export const TechStack = () => {
    return (
        <ul className="flex flex-1 gap-2 items-center text-4xl [@media(max-width:600px)]:text-2xl">
            <li className="text-orange-600"><FaHtml5 /></li>
            <li className="text-blue-600"><FaCss3Alt /></li>
            <li className="text-teal-600"><RiTailwindCssFill /></li>
            <li className="text-fuchsia-600"><FaSass /></li>
            <li className="text-yellow-600"><FaJs /></li>
            <li className="text-blue-600"><SiTypescript /></li>
            <li className="text-[#008b8b]"><FaReact /></li>
            <li><RiNextjsFill /></li>
            <li className="text-orange-600"><FaGitAlt /></li>
        </ul>
    )
}
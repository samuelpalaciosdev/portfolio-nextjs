import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";

const navigation = [
  {
    name: "GitHub",
    href: "https://github.com/samuelpalaciosdev",
    icon: <AiOutlineGithub size={24} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/samuelpalaciosdev/",
    icon: <AiFillLinkedin size={24} />,
  },
  {
    name: "Twitter",
    href: "#",
    icon: <AiOutlineTwitter size={24} />,
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map(({ name, href, icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              className="text-gray-400 transition-colors  duration-300 hover:text-cyan-400"
            >
              <span className="sr-only">{name}</span>
              <span aria-hidden="true">{icon}</span>
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-500">
            &copy; 2023 Coded with{" "}
            <BsFillSuitHeartFill className="inline-block text-cyan-400" /> by{" "}
            <a
              className="font-semibold text-gray-400 transition-colors  duration-300 hover:text-cyan-400"
              href="https://github.com/samuelpalaciosdev"
              target="_blank"
            >
              @samuelpalacios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

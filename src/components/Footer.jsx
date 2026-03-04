import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-white text-gray-700 items-center p-6 border-t">

      {/* Left */}
      <aside>
        <p className="font-semibold text-lg">M&G</p>
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved by M&G
        </p>
      </aside>

      {/* Social Icons */}
      <nav className="flex gap-6 md:place-self-center md:justify-self-end">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noreferrer"
          className="text-2xl hover:text-black transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noreferrer"
          className="text-2xl hover:text-blue-600 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* Email */}
        <a
          href="mailto:your-email@gmail.com"
          className="text-2xl hover:text-red-500 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </nav>

    </footer>
  );
};

export default Footer;

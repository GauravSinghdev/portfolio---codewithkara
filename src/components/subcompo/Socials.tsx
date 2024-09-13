// components/subcompo/SocialLinks.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/GauravSinghdev" target="_blank" rel="noopener noreferrer">
        <FaGithub  className="h-6 w-6 text-primary" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href="https://www.linkedin.com/in/gaurav-singh-898072176/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="h-6 w-6 text-primary" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href="https://twitter.com/codewithkara" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="h-6 w-6 text-primary" />
        <span className="sr-only">Twitter</span>
      </a>
    </div>
  );
};

export default Socials;

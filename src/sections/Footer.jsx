import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const socials = [
    {
      id: 1,
      url: "https://www.linkedin.com/in/babar-khan-42b729235/",
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn"
    },
    {
      id: 2,
      url: "https://github.com/Mr-Babarkhan/",
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub"
    },
    {
      id: 3,
      url: "mailto:mrbabar809@gmail.com",
      icon: <MdEmail className="w-6 h-6" />,
      title: "Email"
    }
  ];

  return (
    <footer className="bg-black">
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="text-white opacity-70">Copyright, QUANTLIX</p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-white transition-all duration-500 hover:text-gray-300">
              Privacy Policy
            </p>
            <p className="text-white transition-all duration-500 hover:text-gray-300">
              Terms of Use
            </p>
          </div>
          <ul className="flex flex-1 justify-center gap-6 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  className="social-icon block rounded-full p-2 text-white hover:bg-white/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
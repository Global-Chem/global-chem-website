import { 
    FaLinkedinIn,
    FaTwitter,
    FaGithub
 } from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    {
      title: "Footer link1",
      href: "#",
    },
    {
      title: "Footer link2",
      href: "#",
    },
    {
      title: "Footer link3",
      href: "#",
    },
  ];

  const socialLinks = [
    {
        title: "Twitter",
        href: "#",
        icon: <FaLinkedinIn />,
    },
    {
        title: "LinkedIn",
        href: "#",
        icon: <FaTwitter />,
    },
    {
        title: "Github",
        href: "#",
        icon: <FaGithub />,
    }
  ]

  return (
    <footer className="bg-black w-full py-8">
      <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-between max-w-screen-md mx-auto text-lg font-light">
          {footerLinks.map((link, index) => (
            <li key={index} className="my-2">
              <a
                className="text-white hover:text-red-200 transition-colors duration-200"
                href={link.href}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href = {link.href}
                    className="text-white transition-colors duration-200 hover:text-red-200"
                >
                    {link.icon}
                </a>
            ))}
        </div>
      </div>
    </footer>
  );
}

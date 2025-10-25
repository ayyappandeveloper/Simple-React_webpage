import {
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaServicestack,
} from "react-icons/fa";
export function Navbar() {
  const navLinks = [
    {
      name: "Home",
      icons: <FaHome />,
      href: "#",
    },
    {
      name: "About",
      icons: <FaInfoCircle />,
      href: "#",
    },
    {
      name: "Services",
      icons: <FaServicestack />,
      href: "#",
    },
    {
      name: "Contact",
      icons: <FaEnvelope />,
      href: "#",
    },
  ];
  return (
    <>
      <div className=" bg-blue-500 flex justify-between p-5 items-center">
        <div>
          <h1 className="text-3xl">My Website</h1>
        </div>
        <div>
          <ul className="flex gap-7">
            {navLinks.map(function (nav, index) {
              return (
                <li key={index}>
                  <a
                    className="hover:text-white flex items-center gap-1"
                    href={nav.href}
                  >
                    {nav.icons}
                    {nav.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

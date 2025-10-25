import { FaBook } from "react-icons/fa";

export function Aside() {
  const links = [
    {
      name: "Vite Configuration",
      icons: <FaBook />,
    },
    {
      name: "React Guide",
      icons: <FaBook />,
    },
    {
      name: "Frontend trends",
      icons: <FaBook />,
    },
  ];

  return (
    <div className="bg-gray-300 p-4 m-8 ">
      <h1 className="text-3xl font-bold mb-2">Related Links</h1>
      <ul>
        {links.map(function (items) {
          return (
            <li>
              <a
                className="flex items-center p-1 text-blue-400 hover:underline"
                href=""
              >
                {items.icons}
                {items.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

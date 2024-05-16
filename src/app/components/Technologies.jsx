import Image from "next/image";
import { useState } from "react";

export default function Technologies() {
  const technologies = [
    {
      name: "HTML",
      logo: "https://www.svgrepo.com/show/197982/html.svg",
    },
    {
      name: "CSS",
      logo: "https://www.svgrepo.com/show/353623/css-3.svg",
    },
    {
      name: "JavaScript",
      logo: "https://www.svgrepo.com/show/373703/js.svg",
    },
    {
      name: "React",
      logo: "https://www.svgrepo.com/show/354259/react.svg",
    },
    {
      name: "Next.js",
      logo: "https://www.svgrepo.com/show/368858/nextjs.svg",
    },
    {
      name: "VS Code",
      logo: "https://www.svgrepo.com/show/374171/vscode.svg",
    },
    {
      name: "TailwindCSS",
      logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://www.svgrepo.com/show/353498/bootstrap.svg",
    },
    {
      name: "ViteJS",
      logo: "https://www.svgrepo.com/show/354521/vitejs.svg",
    },
    {
      name: "Node.js",
      logo: "https://www.svgrepo.com/show/303360/nodejs-logo.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://www.svgrepo.com/show/303301/postgresql-logo.svg",
    },
    {
      name: "Git",
      logo: "https://www.svgrepo.com/show/303548/git-icon-logo.svg",
    },
    {
      name: "Prisma",
      logo: "https://www.svgrepo.com/show/354210/prisma.svg",
    },
    {
      name: "MySQL",
      logo: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    },
    {
      name: "Jasmine",
      logo: "https://www.svgrepo.com/show/373695/jasmine.svg",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-left">
          Technologies that we use
        </h2>
        <div className="flex justify-between items-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 transition duration-200 ease-out transform"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: `scale(${
                  hoveredIndex === index
                    ? 2.5
                    : hoveredIndex === index - 1 || hoveredIndex === index + 1
                    ? 1.2
                    : 1
                })`,
              }}
            >
              <div className="w-10 h-10 relative">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-xs font-semibold text-[#255036] text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

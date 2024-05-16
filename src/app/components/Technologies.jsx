import Image from "next/image";

export default function Technologies() {
  const technologies = [
    {
      name: "HTML",
      logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png",
    },
    {
      name: "CSS",
      logo: "https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png",
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
    },
    {
      name: "React",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
    },
    {
      name: "Next.js",
      logo: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
    },
    {
      name: "VS Code",
      logo: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
    },
    {
      name: "TailwindCSS",
      logo: "https://www.svgrepo.com/show/374118/tailwind.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://icons.veryicon.com/png/o/application/skills-section/bootstrap-2.png",
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
      logo: "https://p7.hiclipart.com/preview/396/90/545/postgresql-database-logo-computer-icons-replication-software-developer.jpg",
    },
    {
      name: "Git",
      logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
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
      logo: "https://www.pngfind.com/pngs/m/68-684650_test-frameworks-jasmine-js-logo-png-transparent-png.png",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-[#255036] mb-10 text-left">
          Technologies that we use
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <div className="w-16 h-16 relative">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-sm font-semibold text-[#255036] text-center">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
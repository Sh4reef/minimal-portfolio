import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Marn",
      description:
        "Employement solutions platform, for businesses and job seekers.",
      url: "https://marn.io",
      image: "/marn-project.png",
    },
    {
      title: "Grow with Google",
      description:
        "It's Google initiative to help people get the skills they need to find a job.",
      url: "https://grow.google",
      image: "/gwg-project.png",
    },
  ];

  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 border-b border-slate-300 mb-14">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Hello, I’m Syarif.
          <span className="block text-slate-500 font-normal text-2xl">
            A software engineer from Indonesia based in Bali.
          </span>
        </h1>
        <p className="text-slate-700 text-lg md:text-xl leading-normal">
          I work with leading-edge companies to create products that can be used
          by million of users. I built user interfaces for web and mobile.
        </p>
        <a
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white space-x-2"
          href="/info"
        >
          <span>More Information</span>
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </a>
      </section>
      <section className="pb-16">
        <h2 className="font-semibold text-2xl tracking-tight mb-4">
          Highlighted Projects
        </h2>
        <p className="text-slate-700 text-lg">
          Below is a selection of recent projects that I've worked on.
        </p>
        <div className="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
          {projects.map((project) => {
            return (
              <a
                className="flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8"
                href={project.url}
              >
                <div className="relative rounded-xl mb-4 shadow-project">
                  <Image
                    loading="lazy"
                    decoding="async"
                    className="rounded-xl bg-cover text-transparent"
                    width={450}
                    height={240}
                    alt=""
                    src={project.image}
                  />
                </div>
                <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-slate-500 text-base">
                  {project.description}
                </h3>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}

import { Title } from "@/components/title";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";
import Link from "next/link";

const experience = [
  {
    company: "Marn",
    role: "Front-End Engineer",
    date: "Aug 2021 → Present",
    logo: "/marn-logo.png",
  },
  {
    company: "R/GA",
    role: "Software Engineer",
    date: "Jan 2020 → Aug 2021",
    logo: "/rga-logo.png",
  },
  {
    company: "Proa",
    role: "Front-End Engineer",
    date: "Jun 2019 → Dec 2019",
    logo: "/proa-logo.jpeg",
  },
  {
    company: "Udacity",
    role: "Project Reviewer",
    date: "Feb 2018 → Dec 2019",
    logo: "/udacity-logo.png",
  },
];

export default function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      <section className="pb-8 prose prose-lg">
        <p>
          Hi, I&apos;m Syarif. I work with companies to design and build digital
          products.
        </p>
        <p>
          Right now, I&apos;m working with Marn to build an employment solutions
          platform, where I&apos;m responsible for developing the design system.
          Before this, I worked at R/GA, building static web pages for the Grow
          with Google program in the Google APAC region. I originally joined
          R/GA as a Software Engineer and focused mostly on frontend
          development.
        </p>

        <p>
          I also took on a freelance project recently, building a mobile app
          called Pawkit, which provides pet services like vet care and grooming
          in Singapore.
        </p>

        <p>
          In the past, I&apos;ve worked with Udacity as a Project Reviewer,
          helping students improve their frontend development skills through
          code reviews.
        </p>

        <p>
          If you&apos;d like to work together, you can reach me at{" "}
          <Link href="mailto:sh4r33f@icloud.com">sh4r33f@icloud.com</Link>.
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">{exp.role}</span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="block my-8 text-slate-500 text-sm font-medium"
        >
          Download resume →
        </Link>
      </section>
    </main>
  );
}

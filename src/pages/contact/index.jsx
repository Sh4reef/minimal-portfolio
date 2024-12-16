import { PageHeader } from "@/components/page-header";
import { Title } from "@/components/title";
import Link from "next/link";

const contact = [
  {
    method: "Email",
    link: "mailto:shareef.banjar@gmail.com",
    label: "shareef.banjar@gmail.com",
  },
  {
    method: "GitHub",
    link: "https://github.com/sh4reef",
    label: "git/sh4reef",
  },
  {
    method: "LinkedIn",
    link: "https://bit.ly/sy4rif",
    label: "in/syarif",
  },
];
export default function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Contact" />
      <section className="pb-8">
        <p className="text-lg mb-4">
          If you&apos;d like to get in touch, you can reach me using the
          following methods. Please note, that I&apos;m not currently available
          for freelance projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contact.map((contactMethod) => {
            return (
              <div className="flex flex-col" key={contactMethod.method}>
                <Title as="h2" variant="tertiary">
                  {contactMethod.method}
                </Title>
                <Link href={contactMethod.link} className="text-slate-700">
                  {contactMethod.label}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

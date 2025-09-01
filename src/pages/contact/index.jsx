import { isChatListModalOpen, store } from "@/atoms";
import ChatListModal from "@/components/chat-list-modal";
import ChatModal from "@/components/chat-modal";
import { PageHeader } from "@/components/page-header";
import { Title } from "@/components/title";
import useAuth from "@/hooks/useAuth";
import useGoogleSignIn from "@/hooks/useGoogleSignIn";
import Link from "next/link";
import { useMemo } from "react";

export default function InfoPage() {
  const { user } = useAuth();
  const { signIn } = useGoogleSignIn();

  const contact = useMemo(
    () => [
      {
        method: "Email",
        link: "mailto:sh4r33f@icloud.com",
        label: "sh4r33f@icloud.com",
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
      {
        method: "Direct Message",
        onclick: () => {
          if (!user) {
            signIn();
          } else {
            store.set(isChatListModalOpen, true);
          }
        },
        label: "Chat Now",
      },
    ],
    [user]
  );

  return (
    <>
      <main className="px-4 md:px-0">
        <PageHeader title="Contact" />
        <section className="pb-8">
          <p className="text-lg mb-4">
            If you&apos;d like to get in touch, you can reach me using the
            following methods. Please note, that I&apos;m not currently
            available for freelance projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contact.map((contactMethod) => {
              return (
                <div className="flex flex-col" key={contactMethod.method}>
                  <Title as="h2" variant="tertiary">
                    {contactMethod.method}
                  </Title>
                  {contactMethod.link ? (
                    <Link href={contactMethod.link} className="text-slate-700">
                      {contactMethod.label}
                    </Link>
                  ) : (
                    <span
                      className="underline text-slate-700 cursor-pointer"
                      onClick={contactMethod.onclick}
                    >
                      {contactMethod.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <ChatListModal />
      <ChatModal />
    </>
  );
}

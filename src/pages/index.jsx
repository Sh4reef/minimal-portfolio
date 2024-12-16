export default function Home() {
  return (
    <main>
      <section className="pb-14 border-b border-slate-300 mb-14">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Hello, I’m Syarif.
          <span className="block text-slate-500 font-normal text-2xl">
            A software engineer from Indonesia based in Bali.
          </span>
        </h1>
        <p className="text-slate-700 text-lg md:text-xl leading-normal">
          I work with leading-edge companies to create exceptional products. I
          most recently worked with MoonPay to help make web3 accessible. Before
          that, I built personal and business banking products for millions of
          customers at Monzo.
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
      <section class="pb-16">
        <h2 class="font-semibold text-2xl tracking-tight mb-4">
          Personal Projects
        </h2>
        <p class="text-slate-700 text-lg">
          Below is a selection of recent projects that I've worked on.
        </p>
        <div class="lg:w-[170%] lg:-ml-[35%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
          <a
            class="flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8"
            href="https://www.hystruct.com"
          >
            <div class="relative rounded-xl mb-4 shadow-project">
              <img
                alt=""
                loading="lazy"
                width="450"
                height="240"
                decoding="async"
                data-nimg="1"
                class="rounded-xl bg-cover"
                srcset="/_next/image?url=%2Fhystruct.png&w=640&q=90 1x, /_next/image?url=%2Fhystruct.png&w=1080&q=90 2x"
                src="/_next/image?url=%2Fhystruct.png&w=1080&q=90"
                style={{ color: "transparent" }}
              />
            </div>
            <h3 class="text-slate-700 font-semibold tracking-tight text-xl">
              Hystruct
            </h3>
            <h3 class="text-slate-500 text-base">
              Scrape structured data from the web with AI
            </h3>
          </a>
          <a
            class="flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8"
            href="https://glow.as"
          >
            <div class="relative rounded-xl mb-4 shadow-project">
              <img
                alt=""
                loading="lazy"
                width="450"
                height="240"
                decoding="async"
                data-nimg="1"
                class="rounded-xl bg-cover"
                srcset="/_next/image?url=%2Fglow.png&w=640&q=90 1x, /_next/image?url=%2Fglow.png&w=1080&q=90 2x"
                src="/_next/image?url=%2Fglow.png&w=1080&q=90"
                style={{ color: "transparent" }}
              />
            </div>
            <h3 class="text-slate-700 font-semibold tracking-tight text-xl">
              Glow
            </h3>
            <h3 class="text-slate-500 text-base">
              A super simple way to create beautiful personal landing pages.
            </h3>
          </a>
          <a
            class="flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8"
            href="https://flagdb.com"
          >
            <div class="relative rounded-xl mb-4 shadow-project">
              <img
                alt=""
                loading="lazy"
                width="450"
                height="240"
                decoding="async"
                data-nimg="1"
                class="rounded-xl bg-cover"
                srcset="/_next/image?url=%2Fflagdb.png&w=640&q=90 1x, /_next/image?url=%2Fflagdb.png&w=1080&q=90 2x"
                src="/_next/image?url=%2Fflagdb.png&w=1080&q=90"
                style={{ color: "transparent" }}
              />
            </div>
            <h3 class="text-slate-700 font-semibold tracking-tight text-xl">
              FlagDB
            </h3>
            <h3 class="text-slate-500 text-base">
              A personal project to build a database of flags from around the
              world
            </h3>
          </a>
          <a
            class="flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8"
            href="https://github.com/alexpate/awesome-design-systems"
          >
            <div class="relative rounded-xl mb-4 shadow-project">
              <img
                alt=""
                loading="lazy"
                width="450"
                height="240"
                decoding="async"
                data-nimg="1"
                class="rounded-xl bg-cover"
                srcset="/_next/image?url=%2Fawesome-design-systems.png&w=640&q=90 1x, /_next/image?url=%2Fawesome-design-systems.png&w=1080&q=90 2x"
                src="/_next/image?url=%2Fawesome-design-systems.png&w=1080&q=90"
                style={{ color: "transparent" }}
              />
            </div>
            <h3 class="text-slate-700 font-semibold tracking-tight text-xl">
              Awesome Design Systems
            </h3>
            <h3 class="text-slate-500 text-base">
              A curated list of design systems
            </h3>
          </a>
        </div>
      </section>
    </main>
  );
}

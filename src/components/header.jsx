export default function Header() {
  return (
    <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
      <a href="/">
        <h1 className="text-base font-mono font-semibold text-slate-950">SD</h1>
      </a>
      <nav className="flex gap-4">
        <a
          className="text-950 text-sm tracking-tighter font-mono font-semibold"
          href="/info"
        >
          Information
        </a>
        <a
          className="text-950 text-sm tracking-tighter font-mono font-semibold"
          href="/contact"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

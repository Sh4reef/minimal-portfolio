export function PageHeader({ title }) {
  return (
    <header>
      <h1 className="font-semibold tracking-tight text-4xl mb-6 text-slate-900 pb-6 border-b border-slate-200">
        {title}
      </h1>
    </header>
  );
}

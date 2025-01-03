export default function Header() {
  return (
    <header className="bg-amber-50 p-4 flex items-center justify-between rounded-t-xl rounded-b-none border-b-2 border-b-slate-50">
      <section className="inline-flex justify-evenly w-[15dvh]">
        <div className="rounded-3xl bg-gray-400 w-8 h-8"></div>
        <div className="rounded-3xl bg-gray-400 w-8 h-8"></div>
        <div className="rounded-3xl bg-gray-400 w-8 h-8"></div>
      </section>
      <div>0 / 3 tâches complétées</div>
    </header>
  );
}

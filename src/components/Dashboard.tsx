import Header from "./Header";
import SearchField from "./SearchField";
import Todo from "./Todo";

export default function Dashboard() {
  return (
    <main className="bg-white w-5/6 h-[80dvh] rounded-t-md">
      <div className="flex flex-col h-full">
        <Header />
        <section className="grid grid-cols-main h-full min-w-full">
          <div className="border-r-2 border-r-slate-100 p-2">
            <Todo />
          </div>
          <div className="bg-search-field-color p-8">
            <SearchField />
          </div>
        </section>
      </div>
    </main>
  );
}

import Header from "./Header";
import SearchField from "./SearchField";
import Todo from "./Todo";

export default function Dashboard() {
  return (
    <main className="bg-white w-5/6 h-[80dvh] rounded-xl">
      <div className="flex flex-col">
        <Header />
        <section className="flex">
          <div className="bg-red-500 flex-1">
            <Todo />
          </div>
          <div className="bg-blue-500 flex-1">
            <SearchField />
          </div>
        </section>
      </div>
    </main>
  );
}

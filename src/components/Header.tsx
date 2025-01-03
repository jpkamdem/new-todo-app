import { TodoType } from "./Dashboard";

export default function Header({
  sortedTodos,
  completedTodos,
}: {
  sortedTodos: TodoType[];
  completedTodos: TodoType[];
}) {
  return (
    <header className="bg-header-color p-4 flex items-center justify-between rounded-t-md rounded-b-none border-b-2 h-24 border-b-slate-100">
      <section className="inline-flex justify-evenly w-[12dvh]">
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
      </section>
      <span className="text-xl">
        <span className="font-bold">{completedTodos.length}</span> /{" "}
        {sortedTodos.length <= 0
          ? "0 Aucune tâche à accomplir"
          : `${sortedTodos.length} tâche${
              sortedTodos.length > 1 ? "s" : ""
            } à accomplir`}
      </span>
    </header>
  );
}

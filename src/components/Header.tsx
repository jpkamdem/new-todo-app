import { TodoType } from "./Dashboard";

export default function Header({
  sortedTodos,
  completedTodos,
}: {
  sortedTodos: TodoType[];
  completedTodos: TodoType[];
}) {
  function headerText() {
    if (sortedTodos.length <= 0) {
      return `${sortedTodos.length} Aucune tâche à accomplir`;
    }

    if (sortedTodos.length == completedTodos.length) {
      return `${sortedTodos.length} Toutes les tâches ont été réalisées`;
    }

    return `${sortedTodos.length}`;
  }

  return (
    <header className="bg-header-color p-4 flex items-center justify-between rounded-t-md rounded-b-none border-b-2 h-24 border-b-slate-100">
      <section className="inline-flex justify-evenly w-[12dvh]">
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
      </section>
      <span className="text-xl">
        <span className="font-bold">{completedTodos.length}</span> /{" "}
        {headerText()}
      </span>
    </header>
  );
}

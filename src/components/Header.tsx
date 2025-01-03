import { useDataContext } from "./DataContext";

export default function Header() {
  const { sortedTodosList, completedTodosList } = useDataContext();
  function headerText() {
    if (sortedTodosList.length <= 0) {
      return `${sortedTodosList.length} Aucune tâche à accomplir`;
    }

    if (sortedTodosList.length == completedTodosList.length) {
      return `${sortedTodosList.length} Toutes les tâches ont été réalisées`;
    }

    return `${sortedTodosList.length}`;
  }

  return (
    <header className="bg-header-color p-4 flex items-center justify-between rounded-t-md rounded-b-none border-b-2 h-24 border-b-slate-100">
      <section className="inline-flex justify-evenly w-[12dvh]">
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
      </section>
      <span className="text-xl">
        <span className="font-bold">{completedTodosList.length}</span> /{" "}
        {headerText()}
      </span>
    </header>
  );
}

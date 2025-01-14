import { useDataContext } from "../hooks";
import SmallButton from "./SmallButton";

export default function Header() {
  const { sortedTodosList, completedTodosList } = useDataContext();
  function headerText() {
    if (sortedTodosList.length <= 0) {
      return `${sortedTodosList.length} Aucune tâche à accomplir`;
    }

    if (sortedTodosList.length == completedTodosList.length) {
      return `${sortedTodosList.length} Toutes les tâches ont été réalisées`;
    }

    return `${sortedTodosList.length} tâche${
      sortedTodosList.length >= 2 ? "s" : ""
    } à accomplir`;
  }

  return (
    <header className="bg-header-color p-4 flex items-center justify-between rounded-t-md rounded-b-none border-b-2 h-24 border-b-slate-100">
      <section className="inline-flex justify-evenly w-[12dvh]">
        <SmallButton />
        <SmallButton />
        <SmallButton />
      </section>
      <span className="text-xl">
        <span className="font-bold">{completedTodosList.length}</span> /{" "}
        {headerText()}
      </span>
    </header>
  );
}

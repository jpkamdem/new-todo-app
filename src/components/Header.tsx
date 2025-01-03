import { TodoType } from "./Dashboard";

export default function Header({ todos }: { todos: TodoType[] }) {
  return (
    <header className="bg-header-color p-4 flex items-center justify-between rounded-t-md rounded-b-none border-b-2 h-24 border-b-slate-100">
      <section className="inline-flex justify-evenly w-[12dvh]">
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
        <div className="rounded-3xl bg-btn-color w-8 h-8"></div>
      </section>
      <span className="text-xl">
        <span className="font-bold">0</span> /{" "}
        {todos.length <= 0
          ? "0 Aucune tâche à accomplir"
          : `${todos.length} tâche${todos.length > 1 ? "s" : ""} à accomplir`}
      </span>
    </header>
  );
}

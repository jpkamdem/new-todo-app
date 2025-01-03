import { useEffect, useMemo, useState } from "react";
import Header from "./Header";
import SearchField from "./SearchField";
import Todo from "./Todo";

export type TodoType = {
  name: string;
  isDone: boolean;
};

export default function Dashboard() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todo, setTodo] = useState<TodoType>({
    name: "",
    isDone: false,
  });
  const [todos, setTodos] = useState<TodoType[]>([]);
  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.isDone),
    [todos]
  );
  const sortedTodos = useMemo(
    () =>
      [...todos].sort((a: TodoType, b: TodoType) => {
        if (a.isDone === b.isDone) {
          return 0;
        }
        return a.isDone ? 1 : -1;
      }),
    [todos]
  );

  useEffect(() => {
    console.log("todos ", todos);
    console.log("completedTodos : ", completedTodos);
    console.log("sortedTodos : ", sortedTodos);
  }, [todos]);

  return (
    <main className="bg-white w-5/6 h-[80dvh] rounded-t-md">
      <div className="flex flex-col h-full">
        <Header sortedTodos={sortedTodos} completedTodos={completedTodos} />
        <section className="grid grid-cols-main h-full min-w-full">
          <div className="border-r-2 border-r-slate-100 overflow-y-scroll overflow-x-hidden">
            <Todo todos={todos} setTodos={setTodos} sortedTodos={sortedTodos} />
          </div>
          <div className="bg-search-field-color p-8">
            <SearchField
              inputValue={inputValue}
              setInputValue={setInputValue}
              todos={todos}
              setTodos={setTodos}
              todo={todo}
              setTodo={setTodo}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

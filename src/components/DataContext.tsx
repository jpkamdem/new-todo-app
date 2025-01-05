import { createContext, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks";

export type TodoType = {
  name: string;
  isDone: boolean;
};

type DataContextProviderProps = {
  children: React.ReactNode;
};

type DataContext = {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  oneTodo: TodoType;
  setOneTodo: React.Dispatch<React.SetStateAction<TodoType>>;
  todosList: TodoType[];
  setTodosList: React.Dispatch<React.SetStateAction<TodoType[]>>;
  completedTodosList: TodoType[];
  sortedTodosList: TodoType[];
};

export const DataContext = createContext<DataContext | null>(null);

export default function DataContextProvider({
  children,
}: DataContextProviderProps) {
  const [input, setInput] = useState<string>("");
  const [oneTodo, setOneTodo] = useState<TodoType>({
    name: "",
    isDone: false,
  });
  const initialTodos: TodoType[] = [];
  const [todosList, setTodosList] = useLocalStorage("todosList", initialTodos);

  const sortedTodosList = useMemo(
    () =>
      [...todosList].sort((a: TodoType, b: TodoType) => {
        if (a.isDone === b.isDone) {
          return 0;
        }
        return a.isDone ? 1 : -1;
      }),
    [todosList]
  );
  const completedTodosList = useMemo(
    () => todosList.filter((todo) => todo.isDone),
    [todosList]
  );

  return (
    <DataContext.Provider
      value={{
        input,
        setInput,
        oneTodo,
        setOneTodo,
        todosList,
        setTodosList,
        completedTodosList,
        sortedTodosList,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

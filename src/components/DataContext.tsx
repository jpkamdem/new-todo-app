import { createContext, useContext, useMemo, useState } from "react";

type TodoType = {
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
  const [todosList, setTodosList] = useState<TodoType[]>([]);
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

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error(
      "useThemeContext doit être utilisé à l'intérieur de DataContextProvider"
    );
  }

  return context;
}

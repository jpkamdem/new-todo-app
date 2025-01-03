import { ChangeEvent, FormEvent } from "react";
import { TodoType } from "./Dashboard";

export type Props = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  todo: TodoType;
  setTodo: React.Dispatch<React.SetStateAction<TodoType>>;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export default function SearchField({
  inputValue,
  setInputValue,
  todo,
  setTodo,
  todos,
  setTodos,
}: Props) {
  return (
    <>
      <form>
        <InputField inputValue={inputValue} setInputValue={setInputValue} />
        <AddToList
          inputValue={inputValue}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          setTodo={setTodo}
        />
      </form>
    </>
  );
}

function InputField({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <div className="flex flex-col">
        <label className="font-bold text-xl">Ajouter une tâche</label>
        <input
          type="text"
          name="inputValue"
          value={inputValue}
          onChange={(e) => handleChange(e)}
          className="h-12 rounded-md text-3xl my-4 pl-2 border-2 focus:outline-none focus:ring-0 focus:border-background-color"
        />
      </div>
    </>
  );
}

function AddToList({
  inputValue,
  todos,
  setTodos,
  todo,
  setTodo,
}: {
  inputValue: string;
  todo: TodoType;
  setTodo: React.Dispatch<React.SetStateAction<TodoType>>;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTodo({ name: inputValue, isDone: false });
    setTodos((prev) => [...prev, todo]);
    console.log(todos);
  }

  return (
    <button
      type="submit"
      disabled={inputValue.toLocaleLowerCase().trim() === ""}
      onClick={handleSubmit}
      className="font-bold text-xl text-white bg-primary-brown rounded-md w-full p-4"
    >
      Ajouter
    </button>
  );
}

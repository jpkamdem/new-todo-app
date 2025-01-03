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
  setTodo,
  setTodos,
}: Props) {
  return (
    <>
      <form>
        <InputField inputValue={inputValue} setInputValue={setInputValue} />
        <AddToList
          inputValue={inputValue}
          setTodos={setTodos}
          setTodo={setTodo}
          setInputValue={setInputValue}
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
  setTodos,
  setInputValue,
}: {
  inputValue: string;
  setTodo: React.Dispatch<React.SetStateAction<TodoType>>;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTodos((prev) => [...prev, { name: inputValue, isDone: false }]);
    setInputValue("");
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

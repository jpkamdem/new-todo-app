import { ChangeEvent, FormEvent } from "react";
import { useDataContext } from "./DataContext";

export default function SearchField() {
  return (
    <>
      <form>
        <InputField />
        <AddToList />
      </form>
    </>
  );
}

function InputField() {
  const { input, setInput } = useDataContext();
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <>
      <div className="flex flex-col">
        <label className="font-bold text-xl">Ajouter une tâche</label>
        <input
          type="text"
          name="input"
          value={input}
          onChange={(e) => handleChange(e)}
          className="h-12 rounded-md text-2xl my-4 pl-2 border-2 focus:outline-none focus:ring-0 focus:border-background-color"
        />
      </div>
    </>
  );
}

function AddToList() {
  const { input, setInput, setTodosList } = useDataContext();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTodosList((prev) => [...prev, { name: input, isDone: false }]);
    setInput("");
  }

  return (
    <button
      type="submit"
      disabled={input.toLocaleLowerCase().trim() === ""}
      onClick={handleSubmit}
      className="font-bold text-xl text-white bg-primary-brown rounded-md w-full p-4"
    >
      Ajouter
    </button>
  );
}

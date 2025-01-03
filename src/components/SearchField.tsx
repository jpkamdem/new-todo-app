export default function SearchField() {
  return (
    <>
      <InputField />
      <AddToList />
    </>
  );
}

function InputField() {
  return (
    <>
      <div className="flex flex-col">
        <label className="font-bold text-xl">Ajouter une tâche</label>
        <input
          type="text"
          className="h-12 rounded-md text-3xl my-4 pl-2 border-2 focus:outline-none focus:ring-0 focus:border-background-color"
        />
      </div>
    </>
  );
}

function AddToList() {
  return (
    <button className="font-bold text-xl text-white bg-primary-brown rounded-md w-full p-4">
      Ajouter
    </button>
  );
}

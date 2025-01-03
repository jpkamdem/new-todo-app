import { TodoType } from "./Dashboard";
import { useDataContext } from "./DataContext";

export default function Todo() {
  return <TodoList />;
}

function TodoList() {
  const { sortedTodosList } = useDataContext();
  return (
    <ul>
      {sortedTodosList.map((todoItem, index) => (
        <TodoItem todoItem={todoItem} index={index} key={index} />
      ))}
    </ul>
  );
}

function TodoItem({ todoItem, index }: { todoItem: TodoType; index: number }) {
  const { todosList, setTodosList } = useDataContext();
  function handleChangeDone(item: TodoType) {
    setTodosList((prev) =>
      prev.map((todo) =>
        todo.name === item.name ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  function removeItem(item: TodoType) {
    setTodosList(todosList.filter((todo) => todo.name !== item.name));
  }

  return (
    <>
      <li key={index}>
        <div className="flex relative left-4 justify-between items-center h-16 border-b-2 border-slate-100">
          <span
            onClick={() => handleChangeDone(todoItem)}
            className={`first-letter:capitalize ${
              todoItem.isDone ? "line-through" : ""
            }`}
          >
            {todoItem.name}
          </span>
          <button
            onClick={() => removeItem(todoItem)}
            className="relative right-8"
          >
            ❌
          </button>
        </div>
      </li>
    </>
  );
}

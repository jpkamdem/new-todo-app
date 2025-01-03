import { TodoType } from "./Dashboard";

export type TodoProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setTodo: React.Dispatch<React.SetStateAction<TodoType>>;
};

export default function Todo({ todos, setTodos, setTodo }: TodoProps) {
  return <TodoList todos={todos} setTodos={setTodos} setTodo={setTodo} />;
}

function TodoList({ todos, setTodos, setTodo }: TodoProps) {
  return (
    <ul>
      {todos.map((todoItem, index) => (
        <TodoItem
          todoItem={todoItem}
          index={index}
          key={index}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
}

function TodoItem({
  todoItem,
  index,
  setTodos,
}: {
  todoItem: TodoType;
  index: number;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}) {
  function handleChangeDone(index: number) {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  return (
    <>
      <li key={index}>
        <div className="flex relative left-4 justify-between items-center h-16 border-b-2 border-slate-100">
          <span
            onClick={() => handleChangeDone(index)}
            className={`capitalize ${todoItem.isDone ? "line-through" : ""}`}
          >
            {todoItem.name}
          </span>
          <button className="relative right-8">❌</button>
        </div>
      </li>
    </>
  );
}

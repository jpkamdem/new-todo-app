import { TodoType } from "./Dashboard";

export type TodoProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  setTodo: React.Dispatch<React.SetStateAction<TodoType>>;
};

export type TodoListProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  sortedTodos: TodoType[];
};

export default function Todo({ todos, setTodos, sortedTodos }: TodoListProps) {
  return (
    <TodoList todos={todos} setTodos={setTodos} sortedTodos={sortedTodos} />
  );
}

function TodoList({ todos, setTodos, sortedTodos }: TodoListProps) {
  return (
    <ul>
      {sortedTodos.map((todoItem, index) => (
        <TodoItem
          todoItem={todoItem}
          index={index}
          key={index}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </ul>
  );
}

function TodoItem({
  todoItem,
  index,
  setTodos,
  todos,
}: {
  todoItem: TodoType;
  index: number;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  todos: TodoType[];
}) {
  function handleChangeDone(index: number) {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  function removeItem(item: TodoType) {
    setTodos(todos.filter((todo) => todo.name !== item.name));
  }

  return (
    <>
      <li key={index}>
        <div className="flex relative left-4 justify-between items-center h-16 border-b-2 border-slate-100">
          <span
            onClick={() => handleChangeDone(index)}
            className={`first-letter:caapi ${
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

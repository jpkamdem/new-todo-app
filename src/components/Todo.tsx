import { TodoType } from "./Dashboard";

export type TodoProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export default function Todo({ todos, setTodos }: TodoProps) {
  return <TodoList todos={todos} setTodos={setTodos} />;
}

function TodoList({ todos, setTodos }: TodoProps) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} index={index} key={index} />
      ))}
    </ul>
  );
}

function TodoItem({ todo, index }: { todo: TodoType; index: number }) {
  // ❌
  return (
    <>
      <li key={index}>
        <div className="flex relative left-4 justify-between items-center h-16 border-b-2 border-slate-100">
          <span>{todo.name}</span>
          <button className="relative right-8">❌</button>
        </div>
      </li>
    </>
  );
}

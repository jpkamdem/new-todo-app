export default function Todo() {
  return <TodoList />;
}

function TodoList() {
  return (
    <ul>
      <TodoItem />
    </ul>
  );
}

function TodoItem() {
  // ❌
  return (
    <>
      <li>
        <div className="flex relative left-4 justify-between items-center h-16 border-b-2 border-slate-100">
          <span>cook dinner</span>
          <button className="relative right-8">❌</button>
        </div>
      </li>
      <li>
        <div className="flex relative left-4 justify-between items-center h-12 border-b-2 border-slate-100">
          <span>study for exam</span>
          <button className="relative right-8">❌</button>
        </div>
      </li>
    </>
  );
}

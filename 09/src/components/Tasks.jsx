import Button from "./Button";
import Input from "./Input";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && (
        <p className="text-stone-800 mb-4">
          This project does not any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 rounded-md bg-stone-100">
          {tasks.map((el) => (
            <li key={el.id} className="flex justify-between my-4">
              <span>{el.text}</span>
              <Button text="Clear" onClick={() => onDelete(el.id)} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

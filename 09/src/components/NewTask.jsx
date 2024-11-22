import { useState } from "react";
import Button from "./Button";

export default function NewTask({ onAdd, onDelete }) {
  const [enteredTask, setEnteredTask] = useState("");

  const onChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const onClickAdd = () => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="flex items-center gap-4 mb-4">
      <input
        className="w-64 p-1 rounded-sm bg-stone-200 "
        type="text"
        onChange={onChange}
        value={enteredTask}
      />
      <Button text="Add task" onClick={onClickAdd} />
    </div>
  );
}

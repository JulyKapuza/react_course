import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onClickCancel, onClickSave }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    const projectData = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    };
    if (
      enteredTitle.trim() === '' ||
      enteredDate.trim() === '' || 
      enteredDescription.trim() === ''
    ) {
      modal.current.open();
      return;
    }
    onClickSave(projectData);
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okey">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Ooops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div className="flex items-center justify-center gap-4 my-4">
          <Button text="Cancel" onClick={onClickCancel} />
          <Button text="Save" darkBtn onClick={handleSave} />
        </div>

        <div>
          <Input ref={title} type="text" label="title" />
          <Input ref={description} textarea type="text" label="Description" />
          <Input ref={date} type="date" label="Due date" />
        </div>
      </div>
    </>
  );
}

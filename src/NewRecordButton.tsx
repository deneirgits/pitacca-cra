import { MdAdd } from "react-icons/md";

function NewRecordButton() {
  return (
    <div className="fixed text-2xl bottom-16 right-5 shadow-md p-4 text-sectext bg-secondary rounded-2xl md:right-16 ">
      <MdAdd />
    </div>
  );
}

export default NewRecordButton;

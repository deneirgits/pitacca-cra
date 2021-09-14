import { MdAdd } from "react-icons/md";

function NewRecordButton() {
  return (
    <div className="absolute text-2xl bottom-20 right-4 shadow-md p-4 text-sectext bg-secondary rounded-2xl md:right-16 ">
      <MdAdd />
    </div>
  );
}

export default NewRecordButton;

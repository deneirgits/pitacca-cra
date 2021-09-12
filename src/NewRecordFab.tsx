import { MdAdd } from "react-icons/md";

function NewRecordFab() {
  return (
    <div className="absolute bottom-0 right-0 h-14 w-14 font-semibold shadow flex items-center justify-center text-white bg-blue-600 rounded-full text-2xl lg:hidden">
      <MdAdd />
    </div>
  );
}

export default NewRecordFab;

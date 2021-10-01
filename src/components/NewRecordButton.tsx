import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

function NewRecordButton() {
    return (
        <Link to="/records/new">
            <button className="fixed text-2xl bottom-16 right-5 shadow-md p-4 text-sectext bg-secondary rounded-2xl md:right-16 ">
                <MdAdd />
            </button>
        </Link>
    );
}

export default NewRecordButton;

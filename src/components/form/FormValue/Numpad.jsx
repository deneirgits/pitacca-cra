import PropTypes from "prop-types";
import { MdArrowBack } from "react-icons/md";

const keys = [
    {
        id: "clear",
        class: "function",
        value: "Clear",
        className: "col-span-2 bg-primlight",
    },
    {
        id: "calc",
        class: "function",
        value: "=",
        className: "col-span-2 bg-primlight",
    },
    { id: "9", class: "number", value: "9" },
    { id: "8", class: "number", value: "8" },
    { id: "7", class: "number", value: "7" },
    {
        id: "multiply",
        class: "operator",
        value: "*",
        className: "bg-primlight",
    },
    { id: "6", class: "number", value: "6" },
    { id: "5", class: "number", value: "5" },
    { id: "4", class: "number", value: "4" },
    { id: "divide", class: "operator", value: "/", className: "bg-primlight" },
    { id: "3", class: "number", value: "3" },
    { id: "2", class: "number", value: "2" },
    { id: "1", class: "number", value: "1" },
    { id: "minus", class: "operator", value: "-", className: "bg-primlight" },
    { id: "dot", class: "number", value: "." },
    { id: "0", class: "number", value: "0" },
    { id: "clearBack", class: "function", value: <MdArrowBack /> },
    { id: "add", class: "operator", value: "+", className: "bg-primlight" },
];

function Numpad({ onClick }) {
    return (
        <div className="keyboard grid grid-cols-4">
            {keys.map((key) => (
                <div
                    className={`btn grid place-content-center h-14 transition duration-150 ease-in-out active:bg-secbg active:text-sectext ${key.className}`}
                    id={key.id}
                    key={key.id}
                    onClick={() => onClick(key.id, key.class, key.value)}
                >
                    {key.value}
                </div>
            ))}
        </div>
    );
}

Numpad.propTypes = {
    onClick: PropTypes.func,
};

export default Numpad;

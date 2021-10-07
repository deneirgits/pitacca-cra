import ResultView from "./FormValue/ResultView";
import Numpad from "./FormValue/Numpad";
import FormInput from "./FormInput";
import Modal from "react-modal";
import { useState } from "react";
import { MdCheck } from "react-icons/md";

let output = "";
let symbols = ["*", "-", "+", "/"];

Modal.setAppElement("#root");

export default function ValueInput() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [result, setResult] = useState("");
    const [display, setDisplay] = useState(result);

    const updateState = () => {
        setDisplay(output.toString());
    };

    const setValue = () => {
        onClick("calc", "function", "=");
        setResult(output);
        closeModal();
    };

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const onClick = (
        id: string,
        keyType: string,
        value: string | JSX.Element
    ) => {
        output = output.toString();
        let lastInput = output.slice(-1);

        switch (keyType) {
            case "function":
                functionKey(id, lastInput);
                break;
            case "operator":
                operatorKey(value, lastInput);
                break;
            case "number":
                numberKey(value, lastInput);
                break;
            default:
                return;
        }
    };
    const resetOutput = (display: boolean) => {
        output = "";
        display && updateState();
    };
    const calculate = (lastInput: string) => {
        // Check if last input is number and output is not empty
        if (!symbols.includes(lastInput) && output) {
            try {
                output = eval(
                    output.replace(/%/g, "*0.01")
                ); /* eslint no-eval: 0 */
                output = Number.isSafeInteger(output)
                    ? output
                    : Number(output).toFixed(2);
                updateState();
            } catch (error) {
                output = "Error";
                updateState();
                resetOutput(false);
            }
        }
    };

    const functionKey = (id: string, lastInput: string) => {
        switch (id) {
            case "clear":
                resetOutput(true);
                break;
            case "clearBack":
                output = output.slice(0, -1);
                updateState();
                break;
            case "calc":
                calculate(lastInput);
                break;
            default:
                return;
        }
    };
    const operatorKey = (value: string | JSX.Element, lastInput: string) => {
        // Prevent starting with an operator
        if (output === "" && value !== "-") {
            return;
        } else {
            // Replace operator symbol if lastinput is operator
            symbols.includes(lastInput)
                ? (output = output.slice(0, -1) + value)
                : (output += value);
        }
        updateState();
    };
    const numberKey = (value: string | JSX.Element, lastInput: string) => {
        // Prevent entering . or % multipy times
        if (value === "." || value === "%") {
            // Prevent starting with '%'
            if (output === "" && value === "%") return;
            lastInput === "." || lastInput === "%" || (output += value);
        } else {
            output += value;
        }
        updateState();
    };

    return (
        <>
            <FormInput
                label="Value"
                name="value"
                required
                type="number"
                step="0.01"
                value={result}
                onClick={openModal}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Test Modal"
                className="absolute top-1/4 right-5 left-5 shadow bg-primbg rounded-xl"
                overlayClassName="fixed top-0 right-0  bottom-0 left-0 bg-gray-600 bg-opacity-25"
            >
                <div className="app">
                    <div className="text-primtext">
                        <ResultView output={display} />
                        <Numpad onClick={onClick} />
                        <button
                            className="flex bg-primary rounded-md py-0.5 px-9 shadow float-right m-2"
                            onClick={setValue}
                        >
                            <div className="pr-1">
                                <span className="text-xl">
                                    <MdCheck />
                                </span>
                            </div>
                            <div className="text-sm">Insert</div>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

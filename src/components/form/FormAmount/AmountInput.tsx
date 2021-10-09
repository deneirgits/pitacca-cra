import ResultView from "./ResultView";
import Numpad from "./Numpad";
import Modal from "react-modal";
import { useState } from "react";
import { MdCheck } from "react-icons/md";
import { useForm } from "../../../utils/FormContext";

let output = "";
let symbols = ["*", "-", "+", "/"];

Modal.setAppElement("#root");

interface Props {
    currency: string;
}

export default function AmountInput(props: Props) {
    const { register, errors } = useForm();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [result, setResult] = useState("");
    const [display, setDisplay] = useState(result);

    const updateState = () => {
        setDisplay(output.toString());
    };

    const setAmount = () => {
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
            <div className="py-1">
                <label htmlFor="amount" className="font-medium">
                    Amount
                </label>
                <div className="flex flex-row gap-2">
                    <p className="font-medium py-2 w-11">{props.currency}</p>
                    <input
                        type="number"
                        className="bg-transparent rounded-full w-full py-2 border-2 border-primtext"
                        autoComplete="off"
                        step="0.01"
                        onClick={openModal}
                        value={result}
                        readOnly={true}
                        onFocus={(e) => (e.target.readOnly = true)}
                        {...register("amount", { required: true })}
                    />
                    {errors["amount"] && (
                        <h2 className="text-sectext">* Invalid</h2>
                    )}
                </div>
            </div>
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
                            className="flex bg-primary rounded-md py-1 px-9 shadow float-right m-2"
                            onClick={setAmount}
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

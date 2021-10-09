import { ChangeEvent } from "react-router/node_modules/@types/react";
import { useForm } from "../../utils/FormContext";

export interface FormOption {
    key: string | number;
    value: string | number | string[];
    label: string;
}

interface Props {
    name: string;
    label: string;
    required?: boolean;
    options: FormOption[];
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function FormSelect(props: Props) {
    const { register, errors } = useForm();
    return (
        <div className="py-1">
            <label htmlFor={props.name} className="font-medium">
                {props.label}
            </label>
            <select
                className="bg-transparent rounded-full w-full py-2 border-2 border-primtext"
                {...register(props.name, { required: props.required })}
                onChange={(e) => (props.onChange ? props.onChange(e) : {})}
            >
                {props.options.map((option) => (
                    <option value={option.value} key={option.key}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errors && <h2 className="text-sectext">{errors.message}</h2>}
        </div>
    );
}

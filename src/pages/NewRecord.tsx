import { SubmitHandler } from "react-hook-form";
import Form from "../components/form/Form";
import FormInput from "../components/form/FormInput";
import FormSelect from "../components/form/FormSelect";

export type Inputs = {
    account: string;
    category: string;
    date: Date;
    description: string;
    value: number;
};

export default function NewRecord() {
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    const accounts = [
        { value: "cash", label: "Cash" },
        { value: "bank", label: "Bank" },
        { value: "stash", label: "Stash" },
        { value: "bills", label: "Bills" },
    ];

    const categories = [
        { value: "restaurant", label: "Restaurant" },
        { value: "transport", label: "Transport" },
        { value: "shopping", label: "Shopping" },
        { value: "bills", label: "Bills" },
    ];

    return (
        <div className="px-14 py-32">
            <Form onSubmit={onSubmit} name="New Record">
                <FormSelect
                    label="Account"
                    name="account"
                    options={accounts}
                    required
                />
                <FormSelect
                    label="Category"
                    name="category"
                    options={categories}
                    required
                />
                <FormInput
                    label="Date & Time"
                    name="date"
                    required
                    type="datetime-local"
                    default={new Date()}
                />
                <FormInput
                    label="Description"
                    name="description"
                    type="text"
                    autocomplete
                />

                <FormInput
                    label="Value"
                    name="value"
                    required
                    type="number"
                    default={0}
                    step="0.01"
                />
            </Form>
        </div>
    );
}

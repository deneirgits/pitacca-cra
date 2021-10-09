import { SubmitHandler, useForm } from "react-hook-form";
import Form from "../components/form/Form";
import FormInput from "../components/form/FormInput";
import FormSelect from "../components/form/FormSelect";
import FormAmount from "../components/form/FormAmount/AmountInput";
import { ChangeEvent, useState } from "react";

enum RecordType {
    Expense,
    Income,
}

export type Inputs = {
    account: string;
    category: string;
    date: Date;
    description: string;
    amount: number;
    type: number;
};

const accounts = [
    { value: ["cash", "PHP"], label: "Cash", key: "cash" },
    { value: ["bank", "EUR"], label: "Bank", key: "bank" },
    { value: ["stash", "USD"], label: "Stash", key: "stash" },
    { value: ["bills", "GBP"], label: "Bills", key: "bills" },
];

const categories = [
    { value: "restaurant", label: "Restaurant", key: "restaurant" },
    { value: "transport", label: "Transport", key: "transport" },
    { value: "shopping", label: "Shopping", key: "shopping" },
    { value: "bills", label: "Bills", key: "bills" },
];

const type = [
    { value: RecordType.Expense, label: "Expense", key: RecordType.Expense },
    { value: RecordType.Income, label: "Income", key: RecordType.Income },
];

export default function NewRecord() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const now_string = now.toISOString().slice(0, 16);

    const [currency, setCurrency] = useState(accounts[0].value[1]);

    function onChange(e: ChangeEvent<HTMLSelectElement>) {
        const currency = e.target.value.split(",")[1];
        setCurrency(currency);
    }

    return (
        <div className="px-14 py-32">
            <Form
                register={register}
                errors={errors}
                handleSubmit={handleSubmit(onSubmit)}
                name="New Record"
            >
                <FormSelect
                    label="Account"
                    name="account"
                    options={accounts}
                    required
                    onChange={onChange}
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
                    type="datetime-local"
                    default={now_string}
                    required
                />
                <FormInput
                    label="Description"
                    name="description"
                    type="text"
                    autocomplete
                />
                <FormSelect label="Type" name="type" options={type} required />
                <FormAmount currency={currency} />
            </Form>
        </div>
    );
}

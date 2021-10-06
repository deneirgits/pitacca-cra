import { SubmitHandler, useForm } from "react-hook-form";

import React from "react";
import { FormProvider } from "../../utils/FormContext";

interface Props {
    name: string;
    onSubmit: SubmitHandler<any>;
    children: React.ReactNode;
}

export default function Form(props: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>();

    return (
        <div className="w-full text-primtext">
            <h2 className="text-3xl mb-8 font-bold">{props.name}</h2>
            <FormProvider context={{ register: register, errors: errors }}>
                <form onSubmit={handleSubmit(props.onSubmit)}>
                    {props.children}
                    <button className="bg-primary rounded-xl w-full py-2 mt-10 shadow">
                        <input
                            type="submit"
                            className="bg-transparent font-medium"
                        />
                    </button>
                </form>
            </FormProvider>
        </div>
    );
}

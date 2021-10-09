import {
    DeepMap,
    SubmitHandler,
    UseFormRegister,
    DeepPartial,
    FieldError,
} from "react-hook-form";

import React from "react";
import { FormProvider } from "../../utils/FormContext";

interface Props {
    name: string;
    register: UseFormRegister<any>;
    handleSubmit: SubmitHandler<any>;
    errors: DeepMap<DeepPartial<Partial<any>>, FieldError>;
    children: React.ReactNode;
}

export default function Form(props: Props) {
    return (
        <div className="w-full text-primtext">
            <h2 className="text-3xl mb-8 font-bold">{props.name}</h2>
            <FormProvider
                context={{ register: props.register, errors: props.errors }}
            >
                <form onSubmit={props.handleSubmit}>
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

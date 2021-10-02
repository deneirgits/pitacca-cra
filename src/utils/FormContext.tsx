import { useContext, createContext } from "react";
import {
    DeepMap,
    DeepPartial,
    FieldError,
    UseFormRegister,
} from "react-hook-form";

interface Context {
    register: UseFormRegister<any>;
    errors: DeepMap<DeepPartial<Partial<any>>, FieldError>;
}

interface Props {
    context: Context;
    children: React.ReactNode;
}

const FormContext = createContext<Context>({} as Context);

export function useForm() {
    return useContext(FormContext);
}

export function FormProvider(props: Props) {
    return (
        <FormContext.Provider value={props.context}>
            {props.children}
        </FormContext.Provider>
    );
}

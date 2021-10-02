import { FormEvent, useRef, useState } from "react";
import { useAuth } from "../utils/Auth";
import { useHistory } from "react-router";

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const history = useHistory();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const email = emailRef.current;
        const password = passwordRef.current;

        try {
            if (email !== null && password !== null) {
                setError("");
                setLoading(true);
                await login(email.value, password.value);
                history.push("/");
            }
        } catch {
            setError("Login failed");
        }

        setLoading(false);
    }

    return (
        <div className="h-full">
            <div className="py-32 px-14 w-full text-primtext">
                <h2 className="text-5xl mb-8 text-center font-bold">Pitacca</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        ref={emailRef}
                        className="bg-transparent rounded-full w-full py-2 border-2 border-primtext"
                    />
                    <label htmlFor="password" className="font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        ref={passwordRef}
                        className="bg-transparent rounded-full w-full py-2 border-2 border-primtext"
                    />
                    {error && <h2 className="text-sectext">{error}</h2>}
                    <button className="bg-primary rounded-xl w-full py-2 mt-10">
                        <input
                            type="submit"
                            disabled={loading}
                            value="Log In"
                            className="bg-transparent font-medium"
                        />
                    </button>
                </form>
            </div>
        </div>
    );
}

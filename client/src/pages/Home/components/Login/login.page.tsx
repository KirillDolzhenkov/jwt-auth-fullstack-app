import {useState} from "react";
import type {FormEvent} from "react";

const LoginPage = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <label>Login:</label>
            <input
                name='login'
                type='text'
                value={login}
                onChange={(event) => {
                    setLogin(event.target.value);
                }}
            />
            <label>Password:</label>
            <input
                name='password'
                type='password'
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            />
            <button>Submit</button>
        </form>
    );
};

export default LoginPage;
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import FormDataField from "../components/text-field/FormDataField";
import { NavLink } from "react-router";

function RegisterPage() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        repeatPassword: ""
    });
    function handleSubmit(e) {
        setUser({ ...user, [e.target.id]: e.target.value });
    }
    function handleChange() {
        console.log();

    }

    return (
        <main className="h-screen flex justify-center place-items-center">
            <form className="flex flex-col justify-center place-items-center gap-5 w-1/5" onSubmit={(e) => handleSubmit(e)}>
                <FormDataField type={"text"} id={"username"} value={user.username} handleChange={(e) => handleChange(e)} />
                <FormDataField type={"email"} id={"email"} value={user.email} handleChange={(e) => handleChange(e)} />
                <FormDataField type={"password"} id={"password"} value={user.password} handleChange={(e) => handleChange(e)} />
                <FormDataField type={"password"} id={"repeatPassword"} value={user.repeatPassword} handleChange={(e) => handleChange(e)} />
                <NavLink to={"/login"} className={"text-blue-800 underline self-start"}>Log in</NavLink>
                <button type="submit" className="font-sans bg-blue-500 py-2 px-5 rounded-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:scale-x-105 transition-all">Login</button>
            </form>
        </main>
    );
}

export default RegisterPage;
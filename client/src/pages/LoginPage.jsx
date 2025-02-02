import { useState } from "react";
import FormDataField from "../components/text-field/FormDataField";
import { NavLink } from "react-router";

function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(user);
    }
    function handleChange(e) {
        console.log(e.target.id);
        setUser({ ...user, [e.target.id]: e.target.value });
        console.log(user);
    }
    return (
        <main className="h-screen flex justify-center place-items-center">
            <form className="flex flex-col justify-center place-items-center gap-5 w-1/5" onSubmit={(e) => handleSubmit(e)}>
                <FormDataField type={"email"} id="email" value={user.email} handleChange={(e) => handleChange(e)} />
                <FormDataField type={"password"} id="password" value={user.password} handleChange={(e) => handleChange(e)} />
                <NavLink to={"/register"} className={"text-blue-800 underline self-start"}>Do not have an account ?</NavLink>
                <button type="submit" className="font-sans bg-blue-500 py-2 px-5 rounded-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:scale-x-105 transition-all">Login</button>
            </form>
        </main>
    );
}

export default LoginPage;
/* eslint-disable react/no-unescaped-entities */
import {useContext, useState} from "react";
import FormDataField from "../components/text-field/FormDataField";
import {NavLink, useNavigate} from "react-router";
import postData from "../utils/postData.js";
import {AuthContext} from "../App.jsx";

function RegisterPage() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        repeatPassword: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);


    function validateUser() {
        const reg =/[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        if (!reg.test(user.email)) {
            setErrorMessage("Invalid email");
            return false
        }
        if (user.password < 6 ) {
            setErrorMessage("Passwords can not be less than 6 characters");
            return false
        }
        if (user.password !== user.repeatPassword) {
            setErrorMessage("Passwords don't match");
            return false
        }
        return true
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!validateUser()){
            return;
        }
        try {
            const result = await postData("http://localhost:3000/api/users", user);
            console.log("Token:", result.token);
            login(result.token);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    }
    function handleChange(e) {
        setUser({ ...user, [e.target.id]: e.target.value });
        console.log();
    }

    return (
        <main className="h-screen flex flex-col justify-center place-items-center">
            <h1 className={"text-3xl"}>Register</h1>
            <form className="flex flex-col justify-center place-items-center gap-5 w-1/5"
                  onSubmit={(e) => handleSubmit(e)}>
                <FormDataField type={"text"} id={"username"} value={user.username}
                               handleChange={(e) => handleChange(e)}/>
                <FormDataField type={"email"} id={"email"} value={user.email} handleChange={(e) => handleChange(e)}/>
                <FormDataField type={"password"} id={"password"} value={user.password}
                               handleChange={(e) => handleChange(e)}/>
                <FormDataField type={"password"} id={"repeatPassword"} value={user.repeatPassword}
                               handleChange={(e) => handleChange(e)}/>
                <p className={`select-none ${errorMessage === "" ? 'text-white' : 'text-red-600'}`}>{errorMessage}</p>
                <NavLink to={"/login"} className={"text-blue-800 underline self-start"}>Log in</NavLink>
                <button type="submit"
                        className="font-sans bg-blue-500 py-2 px-5 rounded-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:scale-x-105 transition-all">Register
                </button>
            </form>
        </main>
    );
}

export default RegisterPage;
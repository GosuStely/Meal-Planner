import {useContext, useEffect, useState} from "react";
import FormDataField from "../components/text-field/FormDataField";
import {NavLink, useNavigate} from "react-router";
import postData from "../utils/postData.js";
import {AuthContext} from "../App.jsx";
import {prodURL} from "../utils/urls.js";

function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    useEffect(() => {
        auth.logout()
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await postData(`${prodURL}/api/sessions`, user);
            console.log("Token:", result.token);
            auth.login(result.token);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    }
    function handleChange(e) {
        console.log(e.target.id);
        setUser({ ...user, [e.target.id]: e.target.value });
        console.log(user);
    }
    return (
        <main className="h-screen flex flex-col justify-center place-items-center bg-black text-white">
            <h1 className={"text-3xl"}>Login</h1>
            <form className="flex flex-col justify-center place-items-center gap-5 w-1/5" onSubmit={(e) => handleSubmit(e)}>
                <FormDataField type={"email"} id="email" value={user.email} handleChange={(e) => handleChange(e)} />
                <FormDataField type={"password"} id="password" value={user.password} handleChange={(e) => handleChange(e)} />
                <p className={`select-none ${errorMessage === "" ? 'text-white' : 'text-red-600'}`}>{errorMessage}</p>
                <NavLink to={"/register"} className={"underline self-start"}>Do not have an account ?</NavLink>
                <button type="submit" className="font-sans bg-blue-500 py-2 px-5 rounded-sm hover:bg-blue-600 hover:text-white cursor-pointer hover:scale-x-105 transition-all">Login</button>
            </form>
        </main>
    );
}

export default LoginPage;
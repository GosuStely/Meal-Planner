import HomePage from "./pages/HomePage"
import {BrowserRouter, Routes, Route} from "react-router";
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

function App() {
    const [token, setToken] = useState(null);

    const login = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    }
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    }
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{token, login, logout}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App

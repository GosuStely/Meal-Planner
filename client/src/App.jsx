import HomePage from "./pages/HomePage"
import {BrowserRouter, Routes, Route} from "react-router";
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import {createContext, useEffect, useState} from "react";
import CreateRecipePage from "./pages/CreateRecipePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

export const AuthContext = createContext(null);

function App() {
    const [token, setToken] = useState(()=>{
        return localStorage.getItem("token");
    });

    const login = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    }
    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{token, login, logout}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/register' element={<RegisterPage/>}/>
                    <Route path='/create' element={<CreateRecipePage/>}/>
                    <Route path='/profile/:id' element={<ProfilePage/>}/>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App

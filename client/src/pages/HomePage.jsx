import { NavLink } from "react-router";
function HomePage() {
    return (
        <main className="h-screen flex flex-row">
            <section className="bg-green-800 w-1/5 border-r border-gray-400">
                <NavLink to="/login" >Login</NavLink>
                <NavLink to="/register" >Register</NavLink>


            </section>
            <section className="bg-teal-300 w-full">

            </section>
        </main>
    );
}

export default HomePage;
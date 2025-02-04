import SideBar from "../components/SideBar.jsx";
function HomePage() {
    return (
        <main className="h-screen flex flex-row bg-black">
            <section className=" w-1/5 border-r border-gray-400">
                <SideBar/>


            </section>
            <section className="bg-teal-300 w-4/5">

            </section>
        </main>
    );
}

export default HomePage;
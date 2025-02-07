import SideBar from "../components/SideBar/SideBar.jsx";
import Timeline from "../components/Timeline.jsx";
import Suggestions from "../components/Suggestions.jsx";
function HomePage() {
    const users = ["Pesho","Ivan","Georgi","Aleks","Sasho"]

    return (
        <main className="h-full flex flex-row bg-black text-white">
            <SideBar/>
            <section className="w-4/5 flex mt-5">
                <Timeline/>
                <Suggestions users={users} />
            </section>
        </main>
    );
}

export default HomePage;
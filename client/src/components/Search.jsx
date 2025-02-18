import {useState} from 'react';
import FormDataField from "./text-field/FormDataField.jsx";

function Search({users,setFilteredUsers}) {
    const [username, setUsername] = useState("");

    const handleChange = (e) => {
        setUsername(e.target.value);
        setFilteredUsers([...users.filter(user => user.username.toLowerCase().includes(e.target.value))]);
    }

    return (
            <div className={"w-1/3 "}>
                <FormDataField type={"text"} id={"username"} value={username} handleChange={handleChange}/>
            </div>
    );
}

export default Search;
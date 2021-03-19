import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState("");
    const [guests, setGuests] = useState<string[]>([]);

    function addGuest() {
        setName("");
        setGuests([...guests, name]);
    }

    return (
        <div>
            <h1>Guest List</h1>
            <ul>
                {guests.map((ele, idx) => {
                    return <li key={idx}>{ele}</li>;
                })}
            </ul>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={addGuest}>Add Guest</button>
        </div>
    );
};

export default GuestList;

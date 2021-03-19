import React, { useState } from "react";

const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 32 },
    { name: "Samuel", age: 15 },
];

const FindUser: React.FC = () => {
    const [search, setSearch] = useState("");
    const [user, setUser] = useState<
        { name: string; age: number } | undefined
    >();

    function handleSearch() {
        const foundUser = users.find((user) => {
            return user.name === search;
        });

        setUser(foundUser);
    }

    return (
        <div>
            <h3>Search User</h3>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
        </div>
    );
};

export default FindUser;

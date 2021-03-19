import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
// import FindUser from "./state/FindUser";
// import FindUser from "./classes/FindUser";
import FindUser from "./refs/FindUser";
import EventComponent from "./events/EventComponent";

const users = [
    { name: "Sarah", age: 20 },
    { name: "Alex", age: 32 },
    { name: "Samuel", age: 15 },
];

const App = () => {
    return (
        <div>
            {/* <FindUser /> */}
            {/* <EventComponent /> */}
            <FindUser />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

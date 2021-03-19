import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import FindUser from "./state/FindUser";
import EventComponent from "./events/EventComponent";

const App = () => {
    return (
        <div>
            {/* <FindUser /> */}
            <EventComponent />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import FindUser from "./state/FindUser";

const App = () => {
    return (
        <div>
            <FindUser />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));

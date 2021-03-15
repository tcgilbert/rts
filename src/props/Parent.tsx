import { ChildAsFC } from "./Child";

const Parent = () => {
    return (
        <ChildAsFC color="blue" onClick={() => console.log("clicked")}>
            random
        </ChildAsFC>
    );
};

export default Parent;

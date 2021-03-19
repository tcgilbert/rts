import { Component } from "react";

interface User {
    name: string;
    age: number;
}

interface FindUserProps {
    users: User[];
}

interface FindUserState {
    search: string;
    user: User | undefined;
}

export class FindUser extends Component<FindUserProps> {
    state: FindUserState = {
        search: "",
        user: undefined,
    };

    handleSearch = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.search;
        });
        this.setState({ user: foundUser });
    };

    render() {
        return (
            <div>
                <h3>Search User</h3>
                <input
                    type="text"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                />
                <button onClick={this.handleSearch}>Search</button>
                <div>
                    {this.state.user && this.state.user.name}
                    {this.state.user && this.state.user.age}
                </div>
            </div>
        );
    }
}

export default FindUser;

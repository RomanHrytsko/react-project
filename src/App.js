import React, {Component} from 'react';
import UserComponent from "./components/user/UserComponent";
import AllMenComponent from "./components/AllMenComponents/AllMenComponent";


class App extends Component {

    render() {
        return (
            <div>
                {
                <AllMenComponent/>
                }
            </div>
        )
    }
}

export default App;
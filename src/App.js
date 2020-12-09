import React, {Component} from 'react';
import AllMenComponent from "./components/user/AllMenComponent";


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
import React, {Component,} from 'react';
import ReduxUsers from "./components/Redux-users/ReduxUsers";

class App extends Component {

    render() {


        return (
            <div>
                {
                   <ReduxUsers/>
                }
            </div>
        )
    }
}

export default App;
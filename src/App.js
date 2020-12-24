import React, {Component} from 'react';
import Counter from "./components/Redux/Counter";


class App extends Component {

    render() {
        return (
            <div>
                {
                    <Counter/>
                }
            </div>
        )
    }
}

export default App;
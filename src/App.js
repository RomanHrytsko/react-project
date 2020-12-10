import React, {Component} from 'react';
import AllMenComponent from "./components/user/AllMenComponent";
import AllWomenCoponents from "./components/women/allWomenCoponents";
import './App.css'
import PairGender from "./components/PairGenders/PairGender";


class App extends Component {

    render() {
        return (
            <div className={'main'}>
                <div className={'men'}>
                    <h2>MEN</h2>
                    <hr/>
                    <AllMenComponent/>

                </div>
                <div className={'women'}>
                    <h2>WOMEN</h2>
                    <hr/>
                    <AllWomenCoponents/>

                </div>
                <div className={'pairs'}>
                    <h2>Pair By Id</h2>
                    <hr/>
                    <PairGender/>

                </div>

            </div>
        )
    }
}

export default App;
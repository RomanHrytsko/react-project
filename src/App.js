import React, {Component} from 'react';
import AllSpaceShipsComponents from "./components/AllSpaceShips/AllSpaceShipsComponents";

import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPeopleComponent from "./components/ AllPeople/AllPeopleComponent";


class App extends Component {

    render() {

        return (
            <Router>

                <div>
                    <div className="header">
                        <div className='article'>
                            <h1>StarWars</h1>
                        </div>
                        <div>
                            <Link className='paragraph' to={`/starships/`}>StarWars Space Ships</Link>
                        </div>
                        <div>
                            <Link className='paragraph' to={'/people/'}>StarWars People</Link>
                        </div>
                    </div>


                </div>
                <Switch>
                    <Route path={'/starships/'} render={()=>{
                        return <AllSpaceShipsComponents/>
                    }}/>
                    <Route path={'/people/'} render={()=>{
                        return <AllPeopleComponent/>
                    }}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
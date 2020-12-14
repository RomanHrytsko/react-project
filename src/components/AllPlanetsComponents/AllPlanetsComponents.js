import React, {Component} from 'react';
import {PlanetsService} from "../../services/PlanetsService/PlanetsService";
import PlanetComponent from "./PlanetComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import InfoAboutHero from "../ AllPeople/InfoAboutHero";
import InfoAboutPlanets from "./InfoAboutPlanets";

class AllPlanetsComponents extends Component {
    state = {planets: []}
    planetService = new PlanetsService()

    async componentDidMount() {
        let {results} = await this.planetService.getAllPlanets()
        let index = 1
        results.forEach(value => {
            value.id = index
            index++
        })


        this.setState({planets: results})

    }


    render() {
        let {planets} = this.state
        let{match:{url}} = this.props
        console.log(planets)
        return (
            <div >
                <div className="spaceShipsBlock">
                    {
                    planets.map(value => <PlanetComponent item={value} key={value.id}/>)
                     }
                </div>
<Switch>
    <Route path={url +'/:id'} render={(props)=>{
        let{match:{params:{id}}} = props
        console.log(props)
        return <InfoAboutPlanets {...props} key={id}/>
    }}/>
</Switch>
            </div>
        );
    }
}

export default withRouter(AllPlanetsComponents);
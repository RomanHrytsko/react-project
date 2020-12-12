import React, {Component} from 'react';
import {PlanetsService} from "../../services/PlanetsService/PlanetsService";
import PlanetComponent from "./PlanetComponent";

class AllPlanetsComponents extends Component {
    state={planets:[]}
    planetService = new PlanetsService()
   async componentDidMount() {
        let {results} = await this.planetService.getAllPlanets()
        this.setState({planets:results})
    }


    render() {
        let{planets} = this.state

        return (
            <div className="spaceShipsBlock">
                {
                    planets.map(value => <PlanetComponent item={value} />)
                }
            </div>
        );
    }
}

export default AllPlanetsComponents;
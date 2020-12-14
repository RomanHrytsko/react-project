import React, {Component} from 'react';
import {PlanetsService} from "../../services/PlanetsService/PlanetsService";
import './plantStyles.css'
class InfoAboutPlanets extends Component {
    state = {planet: null}
    planetService = new PlanetsService()

    async componentDidMount() {
        let {match: {params: {id}}} = this.props
        let planet = await this.planetService.getPlanetById(id)
        this.setState({planet})
    }

    render() {
        let {planet} = this.state
        console.log(planet)
        return (
            <div>
            {planet &&<div className={'planetInfoBlock'}>
            {`Name: ${planet.name}`} <br/>
            {`Rotation_period: ${planet.rotation_period}`} <br/>
            {`Orbital_period: ${planet.orbital_period}`} <br/>
            {`Diameter: ${planet.diameter}`} <br/>
            {`Climate: ${planet.climate}`} <br/>
            {`Gravity: ${planet.gravity}`} <br/>
            </div>


            }
            </div>
        );
    }

}

export default InfoAboutPlanets;
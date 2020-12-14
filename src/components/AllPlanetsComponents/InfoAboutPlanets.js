import React, {Component} from 'react';
import {PlanetsService} from "../../services/PlanetsService/PlanetsService";

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
        return (
            <div>{planet &&
                <div>{
                    `Name: ${planet.name}
                    Rotation_period: ${planet.rotation_period},
                    Orbital_period: ${planet.orbital_period},
                    Diameter: ${planet.diameter},
                    Climate: ${planet.climate},
                    Gravity: ${planet.gravity}`
                }
                </div>
            }
            </div>
        );
    }

}

export default InfoAboutPlanets;
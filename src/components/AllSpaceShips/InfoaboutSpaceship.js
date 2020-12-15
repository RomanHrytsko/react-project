import React, {Component} from 'react';
import {SpaceShipService} from "../../services/SpaceShipService/SpaceShipService";

class InfoaboutSpaceship extends Component {
    state = {spaceship: []}
    spaceShipService = new SpaceShipService()
    async componentDidMount() {
        let{match:{params:{id}}} = this.props
        let spaceship = await this.spaceShipService.getSpaceShipsById(id)
        this.setState({spaceship})
        console.log(spaceship)
        }

    render() {
        let{spaceship} = this.state
        return (
            <div>

                {
                    spaceship && <div className={'spaceShipInfoBlock'}>
                        {`Name: ${spaceship.name}`} <br/>
                        {`Model: ${spaceship.model}`} <br/>
                        {`Cost in credits: ${spaceship.cost_in_credits}`}
                        }

                    </div>
                }



            </div>
        );
    }
}

export default InfoaboutSpaceship;
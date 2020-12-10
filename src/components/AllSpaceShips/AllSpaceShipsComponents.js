import React, {Component} from 'react';
import {SpaceShipService} from "../../services/SpaceShipService/SpaceShipService";
import SpaceShipComponent from "./SpaceShipComponent";

class AllSpaceShipsComponents extends Component {
        state = {spaceShips: []}
    spaceShipsService = new SpaceShipService()
    async componentDidMount() {
        let {results} = await this.spaceShipsService.getAllSpaceShips()
         this.setState({spaceShips: results})
    }

    render() {
            let {spaceShips} = this.state
        console.log(spaceShips)
        return (
            <div className="nav">

                <div className="spaceShipsBlock">
                    {
                        spaceShips.map(value=><SpaceShipComponent item={value} key={value.length}/>)
                    }
                </div>

            </div>
        );
    }
}

export default AllSpaceShipsComponents;
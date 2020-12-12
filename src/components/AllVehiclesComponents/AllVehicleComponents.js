import React, {Component} from 'react';
import {VehicleService} from "../../services/VehicleService/VehicleService";
import VehicleComponent from "./VehicleComponent";

class AllVehicleComponents extends Component {
    state = {vehicles: []}
    vehiclesService = new VehicleService()

   async componentDidMount() {
        let {results} =  await this.vehiclesService.getAllVehicles()
        this.setState({vehicles: results})
    }


    render() {
        let{vehicles}=this.state
        return (
            <div className="spaceShipsBlock">
                {
                    vehicles.map(value => <VehicleComponent item={value} key={value.length}/>)
                }
            </div>
        );
    }
}

export default AllVehicleComponents;
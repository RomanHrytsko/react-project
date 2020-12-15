import React, {Component} from 'react';
import {VehicleService} from "../../services/VehicleService/VehicleService";
import './VehicleStyles.css'
class InfoAboutVehicle extends Component {
    state = {vehicle: null}
    vehicleService = new VehicleService()

    async componentDidMount() {
        let{match:{params:{id}}} = this.props
        let vehicle = await this.vehicleService.getVehicleById(id)
        console.log(vehicle)
        this.setState({vehicle})
    }

    render() {
        let{vehicle} = this.state
        return (
            <div>
                {
                    vehicle && <div className={'InfoBlockStyle'}>
                        {`Name: ${vehicle.name}`} <br/>
                        {`Cargo capacity:: ${vehicle.cargo_capacity}`}<br/>
                        {`Cost in credits: ${vehicle.cost_in_credits}`}<br/>
                        {`Model: ${vehicle.model}`}<br/>

                    </div>
                }
            </div>
        );
    }
}

export default InfoAboutVehicle;
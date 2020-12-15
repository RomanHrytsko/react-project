import React, {Component} from 'react';
import {VehicleService} from "../../services/VehicleService/VehicleService";
import VehicleComponent from "./VehicleComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import InfoAboutVehicle from "./InfoAboutVehicle";

class AllVehicleComponents extends Component {
    state = {vehicles: []}
    vehiclesService = new VehicleService()

   async componentDidMount() {
        let {results} =  await this.vehiclesService.getAllVehicles()
       let index = 1
       results.forEach(value =>{
           value.id = index
           index++
       })
        this.setState({vehicles: results})
    }


    render() {
        let{vehicles}=this.state
        let{match:{url}} = this.props
        return (
            <div >
                <div className="spaceShipsBlock">
                    {
                        vehicles.map(value => <VehicleComponent item={value} key={value.id}/>)
                    }
                </div>
                <Switch>
                    <Route path={url + '/:id/'} render={(props) =>{
                        let{match:{params:{id}}} = props
                        return <InfoAboutVehicle {...props} key={id}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(AllVehicleComponents);
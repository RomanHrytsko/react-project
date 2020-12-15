import React, {Component} from 'react';
import {SpaceShipService} from "../../services/SpaceShipService/SpaceShipService";
import SpaceShipComponent from "./SpaceShipComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import './SpaceShipStyle.css'
import InfoaboutSpaceship from "./InfoaboutSpaceship";

class AllSpaceShipsComponents extends Component {
        state = {spaceShips: []}
    spaceShipsService = new SpaceShipService()
    async componentDidMount() {
        let {results} = await this.spaceShipsService.getAllSpaceShips()
        let index = 1
        results.forEach(value =>{
            value.id = index
            index++
        })
         this.setState({spaceShips: results})
        console.log(results)
    }

    render() {
            let {spaceShips} = this.state
            let{match:{url}}= this.props
        return (
            <div className="nav">

                <div className="spaceShipsBlock">
                    {
                        spaceShips.map(value=><SpaceShipComponent item={value} key={value.id}/>)
                    }
                </div>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        let{match:{params:{id}}} = props
                        return <InfoaboutSpaceship {...props} key={id}/>
                    }}/>
                </Switch>

            </div>
        );
    }
}

export default withRouter(AllSpaceShipsComponents);
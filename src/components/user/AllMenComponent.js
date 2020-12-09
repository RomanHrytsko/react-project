import React, {Component} from 'react';
import UserComponent from "./UserComponent";
import {MenService} from "../../Services/MenService/MenService";

class AllMenComponent extends Component {
    state ={men:[]}
    menService = new MenService()

    async componentDidMount() {
        let men = await this.menService.getAllMen()
        this.setState({men})
    }

    render() {
        let {men}=this.state
        return (
            <div>
                {
                    men.map(value => <UserComponent item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllMenComponent;
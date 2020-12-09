import React, {Component} from 'react';
import {MenService} from "../Services/MenService/MenService";
import ManComponent from "./ManComponent";

class AllMenComponent extends Component {
    menService = new MenService()
    state = {men:[]}

    async componentDidMount() {
        let men = await this.menService.getAllMen()
        this.setState({men})
    }

    render() {
        let{men} = this.state
        return (
            <div>
                {
                    men.map(value => <ManComponent />)
                }

            </div>
        );
    }
}

export default AllMenComponent;
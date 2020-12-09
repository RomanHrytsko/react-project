import React, {Component} from 'react';
import {WomenService} from "../../Services/WomenService/WomenService";
import WomanComponent from "./womanComponent";

class AllWomenCoponents extends Component {

    state = {women:[]}
    womenService = new WomenService()

    async componentDidMount() {
    let women = await this.womenService.getAllWomen()
    this.setState({women})
    }

    render() {
        let{women} = this.state
        return (

            <div>
                {
                    women.map(value => <WomanComponent item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllWomenCoponents;
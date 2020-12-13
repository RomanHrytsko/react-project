import React, {Component} from 'react';
import {PeopleService} from "../../services/PeopleService/PeopleService";

class InfoAboutHero extends Component {
    state = {hero: null}
    peopleService = new PeopleService()

    async componentDidMount() {

        let hero


    }

    render() {
        let {hero} = this.state
        console.log(hero)
        return (
            <div>
                <h1></h1>
                </div>

        );
    }

}

export default InfoAboutHero;
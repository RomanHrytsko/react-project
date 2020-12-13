import React, {Component} from 'react';
import {PeopleService} from "../../services/PeopleService/PeopleService";
import PersonComponent from "./PersonComponent";
import {Switch, withRouter} from "react-router-dom";

class AllPeopleComponent extends Component {
    state = {people: []}

    peopleService = new PeopleService()

    async componentDidMount() {
        let {results} = await this.peopleService.getAllPeople()
        this.setState({people: results})
    }

    render() {
        let {people} = this.state

        // console.log(people)
        return (
            <div>
                <div className="spaceShipsBlock">
                    {
                        people.map(value => <PersonComponent item={value} key={value.name}/>)

                    }


                </div>
                <Switch>

                </Switch>
            </div>
        );
    }
}

export default withRouter(AllPeopleComponent);
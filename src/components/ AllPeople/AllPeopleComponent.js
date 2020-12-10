import React, {Component} from 'react';
import {PeopleService} from "../../services/PeopleService/PeopleService";
import PersonComponent from "./PersonComponent";

class AllPeopleComponent extends Component {
    state = {people: []}

    peopleService = new PeopleService()
    async componentDidMount() {
       let {results} = await this.peopleService.getAllPeople()
        this.setState({people: results})
    }

    render() {
        let {people} = this.state
        console.log(people)
        return (
            <div className="spaceShipsBlock" >
                {
                    people.map(value => <PersonComponent item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllPeopleComponent;
import React, {Component} from 'react';
import {PeopleService} from "../../services/PeopleService/PeopleService";
import PersonComponent from "./PersonComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import InfoAboutHero from "./InfoAboutHero";

class AllPeopleComponent extends Component {
    state = {people: []}

    peopleService = new PeopleService()
    async componentDidMount() {
       let {results} = await this.peopleService.getAllPeople()
        this.setState({people: results})
    }

    render() {
        let {people} = this.state

        let {match:{url}} = this.props
        let {location:{key}} = this.props
        console.log(people)
        return (
            <div  >
                <div className="spaceShipsBlock">
                {
                    people.map(value => <PersonComponent item={value} key={value.name}/>)

                }

                <Switch>
                    <Route path={people.url} render={(props)=>{
                        let{location:{key}}= props
                        return <InfoAboutHero {...props} key={key}/>
                    }}/>
                </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllPeopleComponent);
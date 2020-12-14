import React, {Component} from 'react';
import {PeopleService} from "../../services/PeopleService/PeopleService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class InfoAboutHero extends Component {
    state = {hero: null}
    peopleService = new PeopleService()

    async componentDidMount() {
        let{match:{params:{id}}} = this.props
        console.log(id)
        let hero = await this.peopleService.getPeopleByName(id)
        console.log(hero)
        this.setState({hero})
    }




    render() {
        let {hero} = this.state

        return (
            <div>
                {hero && <div>{hero.name}-{hero.id}-{hero.gender}</div>}
                </div>

        );
    }

}

export default withRouter(InfoAboutHero);
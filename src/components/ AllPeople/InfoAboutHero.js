import React, {Component} from 'react';
import {PeopleService} from "../../services/PeopleService/PeopleService";
import './peopleStyleBlock.css'
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

        let hero = await this.peopleService.getPeopleByName(id)
        this.setState({hero})
        console.log(hero)

    }




    render() {
        let {hero} = this.state
        let{match:{params:{id}}} =this.props

        return (
            <div>
                {hero && <div className={'peopleInfoBlock'} >{hero.name}-{hero.id}-{hero.gender}</div>}
                </div>

        );
    }

}

export default withRouter(InfoAboutHero);
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
        let index = 1
        results.forEach(value=>{
            value.id = index
            index++
        })

        this.setState({people: results})

    }

    render() {
    let {people} = this.state
        let{match:{url}} = this.props

        return (
            <div >
                <div className="spaceShipsBlock">
                {
                    people.map(value => <PersonComponent item={value} key={value.id}/>)
                }
                </div>
                <Switch>
                    <Route path={url + '/:id' + '/'} render={(props)=>{
                        console.log(props)
                        let{match:{params:{id}}} = props
                        return <InfoAboutHero {...props} key={id}/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(AllPeopleComponent);
import React, {Component} from 'react';
import {PeopleService} from "../../services/PeopleService/PeopleService";
import PersonComponent from "./PersonComponent";
import {Switch, Route, withRouter} from "react-router-dom";
import InfoAboutHero from "./InfoAboutHero";
import * as url from "url";

class AllPeopleComponent extends Component {
    state = {people: [], id: []}

    peopleService = new PeopleService()

    async componentDidMount() {
        let {results} = await this.peopleService.getAllPeople()
        this.setState({people: results})


        // let id = await this.peopleService.searchNumber(results.url)
        // this.setState({id})


        this.state.people.forEach(value => {
            let arr = value.url.split('')
            let id = ''
            arr.forEach(value =>{

                if(value === '1'){
                    id +=value
                }else if(value === '2'){
                    id += value
                }else if (value === '3'){
                    id += value
                }else if (value === '4'){
                    id += value
                }else if (value === '5'){
                    id += value
                }else if (value === '6'){
                    id += value
                }else if (value === '7'){
                    id += value
                }else if (value === '8'){
                    id += value
                }else if (value === '9'){
                    id += value
                }else if (value === '0'){
                    id += value
                }

                })
            console.log(id)
            this.setState({id})


        })


    }

    render() {
        let {people,id} = this.state

        return (
            <div>
                <div className="spaceShipsBlock">
                    {
                        people.map(value => <PersonComponent item={value} key={value.name} id={id}/>)

                    }


                </div>
                <Switch>

                </Switch>
            </div>
        );
    }
}

export default withRouter(AllPeopleComponent);
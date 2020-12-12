import React, {Component} from 'react';
import {StarsService} from "../../services/StarsService/StarsService";
import StarComponent from "./StarComponent";
import "./StarsStyles.css"

class AllStarsComponents extends Component {
    state = { stars: []}

    starsService = new StarsService()

   async componentDidMount() {
      let {results} = await this.starsService.getAllStars()
       this.setState({stars: results})

   }


    render() {

        let{stars} = this.state

        return (

            <div >
                <h1>StarWars Heros</h1>
                <div>
                    {
                        stars.map(value => <StarComponent item={value} key={value.id}/>)

                    }
                </div>


            </div>
        );
    }
}

export default AllStarsComponents;
import React, {Component} from 'react';
import {StarsService} from "../../services/StarsService/StarsService";
import StarComponent from "./StarComponent";
import "./StarsStyles.css"

class AllStarsComponents extends Component {
    state = { stars: [],chosen: null}

    starsService = new StarsService()

   async componentDidMount() {
      let {results} = await this.starsService.getAllStars()
       this.setState({stars: results})

   }

   async choseHero(id){
     let chosen =   await this.starsService.getStarById(id)


    }
    render() {
        console.log(this.state.stars);
        return (
            <div >
                <h1>StarWars Heros</h1>
                <div className='header'>
                    {
                        this.state.stars.map(value => <StarComponent item={value} key={value.id}/>)
                    }
                </div>

            </div>
        );
    }
}

export default AllStarsComponents;
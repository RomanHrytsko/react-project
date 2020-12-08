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
       this.setState({chosen:chosen})


    }
    render() {

        let{stars,chosen} = this.state
        console.log('...')
        return (

            <div >
                <h1>StarWars Heros</h1>
                <div className='header'>
                    {
                        stars.map(value => <StarComponent item={value} key={value.id} chosenHero={this.choseHero}/>)

                    }
                </div>
                <hr/>
                    <div>
                        {
                          chosen && <StarComponent item={chosen}/>

                        }
                    </div>

            </div>
        );
    }
}

export default AllStarsComponents;
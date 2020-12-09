import React, {Component} from 'react';
import {MenService} from "../../Services/MenService/MenService";
import {WomenService} from "../../Services/WomenService/WomenService";
import AllMenComponent from "../user/AllMenComponent";
import PairComponent from "./PairComponent";
import AllWomenCoponents from "../women/allWomenCoponents";

class PairGender extends Component {
    state = {men: [], women: [], couple: null}
    menService = new MenService()
    womenService = new WomenService()

    async componentDidMount() {
       let men = await this.menService.getAllMen()
        this.setState({men})
        let women = await this.womenService.getAllWomen()
        this.setState({women})
    }


    //
    // findPair = (id) => {
    //     let man = this.state.men.find(value => value.id === id)
    //
    //     let woman = this.state.women.find(value => value.id === id)
    //     this.setState({couple: `${man}+${woman}`})
    //
    //     }




    render() {

        let {men, women, couple} = this.state
        console.log(men)
        return (
            <div>

                {
                    men.map(value=> <PairComponent item={value} key={value.id} findPair={this.findPair} />)
                }


            </div>
        );
    }
}

export default PairGender;
import React, {Component} from 'react';
import {MenService} from "../../Services/MenService/MenService";
import {WomenService} from "../../Services/WomenService/WomenService";
import AllMenComponent from "../user/AllMenComponent";
import PairComponent from "./PairComponent";
import AllWomenCoponents from "../women/allWomenCoponents";

class PairGender extends Component {
    state = {men: [], women: [], chosenMan: [], chosenWoman:[],couple: []}
    menService = new MenService()
    womenService = new WomenService()

    async componentDidMount() {
       let men = await this.menService.getAllMen()
        this.setState({men})
        let women = await this.womenService.getAllWomen()
        this.setState({women})
    }

findMan = (id)=>{
        let man = this.state.men.find(value => value.id === id)
        this.setState({chosenMan:man})
}
findWoman = (id) =>{
        let woman = this.state.women.find(value => value.id === id)
    this.setState({chosenWoman:woman})
    console.log(woman)
}
    coupleFind(){
        // if(this.findMan(this.state.men.id) === this.findWoman(this.state.women.id))
        if(this.chosenMan.id === this.chosenWoman.id)
        {
            // this.setState({couple:`${this.state.chosenMan.name} + ${this.state.chosenWoman.name}`})
            console.log(`${this.chosenMan.name} + ${this.chosenWoman.name}`)
        }
    }




    render() {

        let {men, women, couple, chosenMan,chosenWoman,} = this.state
this.coupleFind()
        return (
            <div>

                {
                    men.map(value=> <PairComponent item={value} key={value.id} findMan={this.findMan} />)
                }
            <hr/>
                {
                    couple && <PairComponent item={couple} coupleFind={this.coupleFind}/>
                }

            </div>
        );
    }
}

export default PairGender;
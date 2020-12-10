import React, {Component} from 'react';
import {MenService} from "../../Services/MenService/MenService";
import {WomenService} from "../../Services/WomenService/WomenService";

class PairGender extends Component {
    state = {pair: []}
    menService = new MenService()
    womenService = new WomenService()

     componentDidMount() {
    const pair = []
        const allMen = this.menService.getAllMen()
        const allWomen = this.womenService.getAllWomen()
        allMen.forEach(man =>{
            allWomen.forEach(woman=>{
                if(man.id === woman.id){
                    pair.push(`${man.id} ${man.name} + ${woman.id} ${woman.name}`)
                }
            })
        })
        this.setState({pair})
    }





    render() {

        return (

            this.state.pair.map(value => <div><h3>{value}</h3></div>)

            )
    }
}

export default PairGender;
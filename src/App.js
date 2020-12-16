import React, {Component} from 'react';


class App extends Component {
    myForm = React.createRef()
state = {inputValue: ''}

    render() {
        let {inputValue} = this.state
        console.log(inputValue)
        return (
            <div>
                <form action="" onSubmit={this.send} ref={this.myForm}>

                    <input onInput={this.commitState} value={this.state.inputValue}/> <button>send</button>
                </form>


            </div>
        );
    }
   send=(e)=>{
        e.preventDefault()
       // console.log(this.myForm.current[0].value)
       // console.log(e.target.children[0].value)
   }
   commitState= (e)=>{
        this.setState({inputValue: e.target.value})
       // console.log(e.target.value)
   }
}

export default App;
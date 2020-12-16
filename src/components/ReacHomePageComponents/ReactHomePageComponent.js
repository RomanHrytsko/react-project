import React, {Component} from 'react';
import './ReactHomePageStyle.css'

class ReactHomePageComponent extends Component {
    render() {
        return (
            <div className={'reactHomePage'}>
                <div className={'reactArticle'}>
                    <span>React</span>
                </div>
                <div className={'reactImg'}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                        alt="react-icon"/>
                </div>
            </div>
        );
    }
}

export default ReactHomePageComponent;
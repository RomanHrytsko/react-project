import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import './UsersStyles.css'
class UserComponent extends Component {
    render() {
        let{item}= this. props
        let{match:{url}}= this.props
        return (
            <div className={'blockWithOneUser'}>
                <div className={'nameBlock'}>
                    {item.id}. {item.name}


                </div>
                <div className={'buttonsBlock'}>
                    <Link to={url + '/' + item.id}> <button className={'btnDetails'} > Details</button></Link>
                    <button className={'btnPosts'}>Posts</button>
                </div>
            </div>
        );
    }
}

export default withRouter(UserComponent);